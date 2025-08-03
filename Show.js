import { useState } from "react";

function Show() {
    
    const [loca, setLoca] = useState('');
    const [show, setShow] = useState('Location');
    const [cond , setCond] = useState(false);
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=053591a1f4e308d7a86520d84c8a3d46&units=metric`;
    

    function handlelocation(event) {
        setLoca(event.target.value);
    }

    function handleshow() {
        setShow(loca);
        setCond(true);
    }

    // data fetching through api
    function datafetch() {
        fetch(api)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log("Error:", error))

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
                    <input type="text" className="mt-2" placeholder="Enter Location" onChange={handlelocation} />
                    <button className="text-white bg-blue-500 rounded" onClick={handleshow}>Serach</button>
                </div>
                <div className="text-white flex justify-center">
                    {show}
                </div>
                {/* this is weather api for */}
                <div>
                    <div className="text-white">
                        16C
                    </div>
                    <div className="text-white">
                        <img src="" alt="image of weather" />
                    </div>
                    <div className="text-white">
                        wind speed and many more
                    </div>
                </div>
                <div className="text-white">
                    conculsion of weather here
                </div>
            </div>
        </div>
    )
}

export default Show;