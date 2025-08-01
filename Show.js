import { useState } from "react";

function Show() {

    const[loca, setLoca] = useState('Location');

    function handlelocation(event) {
        setLoca(event.target.value);
    }

    

    return(
        <div className="bg-gray-700 bg-cover h-screen flex items-center justify-center ">
            <div className="bg-black w-96 ">
               <div className="flex justify-center">
               <input type="text" className="mt-2"  placeholder="Enter something" onChange={handlelocation} />
               <button className="text-white bg-blue-500 rounded" onClick={handlelocation}>serach</button>
               </div>
               <div className="text-white flex justify-center">
                {loca}
               </div>
               {/* this is weather api for */}
               <div>
               <div className="text-white">
                16C
               </div>
               <div className="text-white">
                 image of status
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