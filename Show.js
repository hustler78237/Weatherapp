import { useState } from "react";

function Show() {

    const [loca, setLoca] = useState('');
    const [show, setShow] = useState('Location');
    const [cond, setCond] = useState(false);
    const [icons , setIcons] = useState("10d");
    const [tem , setTem] = useState('Temperature in ');
    const [desc , setDesc] = useState('Weather Condition');
    const [ftemp, setFtemp] = useState('Temperature in ');
    const [humi , setHumi] = useState('Humidity in ');
    const [ws , setWs] = useState('WindSpeed ');
    const [srise, setSrise] = useState('Sunrise time');
    const [sun , setSun] = useState('Sunset time');
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
            if (result.cod == 200 ) {
                
            
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
            let sr = new Date((time+timezne) * 1000).toUTCString();
            let sr1 = new Date((time1+timezne1) * 1000).toUTCString();
            setSrise(sr);
            setSun(sr1);
            setShow(result.name)
        } else if(result.cod == 404){
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
        <div className="bg-gray-700 bg-cover h-screen flex items-center justify-center ">
            <div className="bg-black w-96 ">
                {/* this is our serach bar and show location */}
                <div className="flex justify-center">
                    <input type="text" className="mt-2" placeholder="Enter State Name" onChange={handlelocation} />
                    <button className="text-white bg-blue-500 rounded" onClick={handleshow}>Serach</button>
                </div>
                <div className="text-white flex justify-center">
                    {show}
                </div>
                {/* this is weather api for */}
                <div>
                    <div className="text-white">
                        temperature = {tem}C
                    </div>
                    <div className="text-white">
                        Feeling temperature :  {ftemp}C
                    </div>
                    <div className="text-white">
                        Humidity :  {humi}%
                    </div>
                     <div className="text-white">
                        Wind Speed :  {ws}Km/hr
                    </div>
                    <div className="text-white">
                        Sunrise :  {srise}
                    </div>
                    <div className="text-white">
                        Sunset :  {sun}
                    </div>
                    <div className="text-white">
                        <img src={apiicon} alt="image of weather" />
                    </div>
                    <div className="text-white">
                        Weather Condition : {desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show;