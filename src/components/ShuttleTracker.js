import React from "react";
import img1 from "../images/ShuttleTrackerMap.png";
import profile from "../images/TommyLogo_BW.png";

import img2 from "../images/ShuttleTrackerBusSelect.png" ;

function Project() {

return (
    <div className="grid grid-cols-3 gap-7" > 

        <div className="col-span-2 bg-white shadow-lg rounded-xl p-2 "> 
        
        <p className = " text-md sm:text-xl text-red-500 text-left font-semibold  pt-3 p-3 ">
            Never miss the shuttle again!</p>

        <p className = " text-md sm:text-md text-black text-left font-semibold pt-0.5 pl-3 ">
        Shuttle Tracker lets you track the real-time locations of the Rensselaer Polytechnic Institute campus shuttles with crowd-sourced location data.
        When boarding a bus, tap "Board Bus" and choose a Shuttle. Tap "Leave Bus" when you get out. This will let users know that a Shuttle is at the stop. 
         </p>

        

        <div className = " flex pt-8 pb-6">
       <img src={img1} className=" object-scale-down h-[32rem] w-2/5"></img>
       <img src={img2} className=" object-scale-down h-[32rem] w-3/5"></img>
       </div>
        </div>


        <div className=" col-span-1 bg-white shadow-lg rounded-xl p-2 "> 
            <p className = " text-md sm:text-xl text-red-500 text-left font-semibold  pt-3 p-3 ">
            Unique features</p>
        </div>


    </div>
)
}

export default Project;