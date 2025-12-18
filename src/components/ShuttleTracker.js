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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-7"> 

            {/* Main Description - Takes 2 columns on desktop, full width on mobile */}
            <div className="col-span-1 lg:col-span-2 bg-white shadow-lg rounded-xl p-4"> 

                <p className="text-lg sm:text-xl text-red-500 text-left font-semibold pb-2">
                    Never miss the shuttle again!
                </p>

                <p className="text-sm sm:text-md text-black text-left font-semibold pb-4">
                    Shuttle Tracker lets you track the real-time locations of the Rensselaer Polytechnic Institute campus shuttles with crowd-sourced location data.
                    When boarding a bus, tap "Board Bus" and choose a Shuttle. Tap "Leave Bus" when you get out. This will let users know that a Shuttle is at the stop. 
                </p>

                {/* Images - Both same size, side by side or stacked */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-4 justify-center items-center">
                    <img src={STMainScreen} 
                         className="w-full sm:w-1/2 max-w-xs h-auto object-contain" 
                         alt="Shuttle Tracker Main Screen" />
                    <img src={STBusSelection} 
                         className="w-full sm:w-1/2 max-w-xs h-auto object-contain" 
                         alt="Shuttle Tracker Bus Selection" />
                </div>
            </div>

            {/* Unique Features Section */}
            <div className="col-span-1 bg-white shadow-lg rounded-xl p-4"> 
                <p className="text-lg sm:text-xl text-red-500 text-left font-semibold pb-2">
                    Unique features
                </p>

                <p className="text-sm sm:text-md text-black text-left font-semibold pb-4">
                    Community milestones. See how many students contribute to the application!
                </p>

                <div className="flex justify-center py-4">
                    <img src={STMilestones} 
                         className="w-full max-w-xs h-auto object-contain" 
                         alt="Shuttle Tracker Milestones" />
                </div>

                {/* Links Section - Better positioned for mobile */}
                <div className="mt-6 space-y-3">
                    <div className="text-sm sm:text-md text-blue-600 font-normal hover:underline">
                        <a href="https://github.com/wtg/Shuttle-Tracker-SwiftUI" 
                           target="_blank" 
                           rel="noreferrer noopener">
                            Learn more 
                        </a>
                    </div>

                    <div className="text-sm sm:text-md text-blue-600 font-normal hover:underline">
                        <a href="https://apps.apple.com/us/app/shuttle-tracker/id1583503452" 
                           target="_blank" 
                           rel="noreferrer noopener">
                            Download on the Apple Store 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;