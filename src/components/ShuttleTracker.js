import React from "react";
import profile from "../images/TommyLogo_BW.png";
import {CgChevronRight} from "react-icons/cg";
import {AiOutlinePlusCircle} from "react-icons/ai"
import ST_distance from "../images/ShuttleTrackerBoardDistance.jpeg";
import ST_announcement from "../images/ShuttleTrackerAnnouncement.jpeg";

import STBusSelection from "../images/ShuttleTrackerBusSelection.png";
import STMainScreen from "../images/ShuttleTrackerMainScreen.png";
import STMilestones from "../images/ShuttleTrackerMilestones.png";




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

        <div className = "flex pt-8 pb-6">
       <img src={STMainScreen} className=" object-scale-down h-[32rem] w-2/5 "></img>
       <img src={STBusSelection} className=" object-scale-down h-[32rem] w-3/5 "></img>
         </div>
        </div>

        <div className="relative col-span-1 bg-white shadow-lg rounded-xl p-2 "> 
            <p className = " text-md sm:text-xl text-red-500 text-left font-semibold  pt-3 p-3 ">
            Unique features</p>

            <p className = " text-md sm:text-md text-black text-left font-semibold pt-0.5 pl-3 ">
                Community milestones. See how many students contribute to the application!
            </p>

            <div className = " flex pt-2 pb-4 rounded-xl  object-scale-down h-[32rem] px-16">
                <img src={STMilestones} className=""></img>
                    </div>

            {/* <p className = " text-md sm:text-md text-black text-left font-semibold pt-0.5 pl-3 ">
                Choose maximum boarding distance
            </p>

            <div className = " flex pt-2 pb-4 rounded-xl  bg-[#f2f1f6] shadow-lg ">
                <img src={ST_distance} className=""></img>
                    </div>

            <p className = " text-md sm:text-md text-black text-left font-semibold pt-4 pl-3 ">
                Announcements
            </p>
            <div className = " flex pt-2 pb-2 rounded-xl  bg-white shadow-lg ">
                <img src={ST_announcement} className=""></img>
                    </div>

            <p className = " text-md sm:text-md text-black text-left font-semibold pt-8 pl-3 ">
                Debug Mode (coming soon!)
            </p> */}

            <div className = " absolute bottom-12 left-3 no-underline hover:underline text-md sm:text-md text-blue-600  font-[335] pt-0.5 pl-3">
            <a href="https://github.com/wtg/Shuttle-Tracker-SwiftUI" target="_blank" rel="noreferrer noopener">
                    Learn more 
                </a>
            </div>

            <div className = " absolute bottom-6 left-3 no-underline hover:underline text-md sm:text-md text-blue-600 text-left font-[335] pt-0.5 pl-3">
                <a href="https://apps.apple.com/us/app/shuttle-tracker/id1583503452" target="_blank" rel="noreferrer noopener">
                    Download on the Apple Store 
                </a>
            </div>

        </div>



    </div>
)
}

export default Project;