import { useState } from "react";

function Show() {

    // const[loca, setLoca] = useState('');
    // function handleloaction(value) {
    //     setLoca(loca = value);
    // }

    return(
        <div className="bg-gray-700 bg-cover h-screen flex items-center justify-center ">
            <div className="bg-black w-96 ">
               <div className="flex justify-center">
               <input type="serach" className="mt-2" />
               <button className="text-white bg-blue-500 rounded">serach</button>
               </div>
               <div className="text-white flex justify-center">
                Show location
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