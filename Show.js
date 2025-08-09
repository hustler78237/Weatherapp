import { useState } from "react";

function Show() {

    const [loca, setLoca] = useState('');
    const [show, setShow] = useState('Location');
    const [cond, setCond] = useState(false);
    const [icons, setIcons] = useState("10d");
    const [tem, setTem] = useState('Temperature in ');
    const [desc, setDesc] = useState('Weather Condition');
    const [ftemp, setFtemp] = useState('Temperature in ');
    const [humi, setHumi] = useState('Humidity in ');
    const [ws, setWs] = useState('WindSpeed ');
    const [srise, setSrise] = useState('Sunrise time');
    const [sun, setSun] = useState('Sunset time');
    // api url section
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=053591a1f4e308d7a86520d84c8a3d46&units=metric`;
    let apiicon = `https://openweathermap.org/img/wn/${icons}@2x.png `


    function handlelocation(event) {
        setLoca(event.target.value);
    }

    function handleshow() {
        setShow(loca);
        setCond(true);
    }

    // data fetching through api
    // result is response  of api if i want to fetch details i have to use result
    async function datafetch() {

        try {
            const response = await fetch(api);
            const result = await response.json();
            // console.log(result);
            if (result.cod == 200) {


                setIcons(result.weather[0].icon);
                // console.log(result.weather[0].icon)
                setTem(result.main.temp);
                setDesc(result.weather[0].description);
                setFtemp(result.main.feels_like);
                setHumi(result.main.humidity);
                setWs(result.wind.speed);

                let time = result.sys.sunrise;
                let timezne = result.timezone;
                let time1 = result.sys.sunset;
                let timezne1 = result.timezone;
                let sr = new Date((time + timezne) * 1000).toUTCString();
                let sr1 = new Date((time1 + timezne1) * 1000).toUTCString();
                setSrise(sr);
                setSun(sr1);
                setShow(result.name)
            } else if (result.cod == 404) {
                setIcons("10d");
                setTem("Temperature in ")
                setDesc("Weather Condition")
                setFtemp("Temperature in ")
                setHumi("Humidity in ")
                setWs("Wind Speed ")
                setSrise("Sunrise Time")
                setSun("Sunset Time")
                setShow("city not found")
            }

        } catch (error) {
            console.log("Error", error);
        }
        setCond(false);
    }
    if (cond === true) {
        datafetch();
    } else {
        console.log("you does not provide Location");
    }

    // api integration 

    return (
        <div className="bg-gradient-to-br from-blue-900 via-gray-800 to-black min-h-screen flex items-center justify-center p-2 sm:p-4">
            <div className="bg-black bg-opacity-50 w-full max-w-6xl rounded-xl shadow-2xl p-4 sm:p-6 space-y-6 backdrop-blur-md border border-gray-700">

                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
                    <input
                        type="text"
                        className="w-full sm:flex-1 px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 bg-gray-900 text-white placeholder-gray-400"
                        placeholder="Enter State Name"
                        onChange={handlelocation}
                    />
                    <button
                        className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-green-500 transition-all duration-300 shadow-lg"
                        onClick={handleshow}
                    >
                        Search
                    </button>
                </div>

                {/* Location Display */}
                <div className="text-center text-base sm:text-lg font-bold text-white tracking-wide underline underline-offset-4 decoration-blue-400">
                    {show}
                </div>

                {/* Weather Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-white text-center">
                    <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                        🌡️ Temperature: {tem}°C
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                        🥵 Feels Like: {ftemp}°C
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                        💧 Humidity: {humi}%
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                        💨 Wind Speed: {ws} Km/hr
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                        🌅 Sunrise: {srise}
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                        🌇 Sunset: {sun}
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow flex justify-center items-center hover:scale-105 transition-transform duration-300">
                        <img src={apiicon} alt="Weather Icon" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                        🌤️ Condition: {desc}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Show;