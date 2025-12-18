import React from "react";
import {FaSpotify,FaPython,FaDiscord} from "react-icons/fa";
import img1 from "../images/python.svg.png";
import {GoChevronRight} from "react-icons/go";
import { SiShazam } from "react-icons/si";
import {FaPaperPlane} from "react-icons/fa";

import UniFriendIcon from "../images/UniFriend.png"
import UniFriendsScreenshot from "../images/UniFriendsScreenshot.png"
import ExplorerScreenshot from "../images/ExplorerScreenshot.png"
import ExplorerScreenInformationView from "../images/ExplorerScreenshotInformationView.png"
import ShazamScreenshot from "../images/ShazamScreenshot.png"

function personalProjects() {
    return (
        // Changed to single column on mobile, 2 on tablet, 3 on desktop
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7"> 

            {/* Uni Friends */}
            <div className="col-span-1 bg-white shadow-lg rounded-xl p-4">  
                <div className="flex items-center gap-3 pb-3">
                    <img src={UniFriendIcon} 
                         className="w-10 h-10 object-contain flex-shrink-0" 
                         alt="Uni Friends Icon" />
                    <a href="https://apps.apple.com/lt/app/uni-friends/id1622401835" 
                       target="_blank" 
                       rel="noreferrer noopener" 
                       className="font-semibold text-blue-500 hover:underline text-base sm:text-lg">  
                        Uni Friends
                    </a>
                </div>
                <div className="pb-4">
                    <p className="text-sm sm:text-base font-semibold">
                        Time your studying block with a relaxing music player.
                    </p>                     
                </div>
                <div className="flex justify-center">
                    <img src={UniFriendsScreenshot} 
                         className="w-full max-w-[200px] h-auto object-contain" 
                         alt="Uni Friends Screenshot" />
                </div>
            </div>

            {/* Explorer */}
            <div className="col-span-1 bg-white shadow-lg rounded-xl p-4">  
                <div className="flex items-center gap-3 pb-3">
                    <FaPaperPlane className="text-blue-500 text-2xl sm:text-3xl flex-shrink-0" />
                    <a href="https://github.com/TruongTommy99/Explorer/tree/main/Explorer" 
                       target="_blank" 
                       rel="noreferrer noopener" 
                       className="font-semibold text-blue-500 hover:underline text-base sm:text-lg">  
                        Explorer
                    </a>
                </div>
                <div className="pb-4">
                    <p className="text-sm sm:text-base font-semibold">
                        Find your next vacation spot and learn more about it.
                    </p>                     
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <img src={ExplorerScreenshot} 
                         className="w-full max-w-[200px] h-auto object-contain transition-transform duration-500 hover:scale-110 cursor-pointer" 
                         alt="Explorer Screenshot" />
                    <img src={ExplorerScreenInformationView} 
                         className="w-full max-w-[200px] h-auto object-contain transition-transform duration-500 hover:scale-110 cursor-pointer" 
                         alt="Explorer Information View" />
                </div>
            </div>

            {/* Shazam */}
            <div className="col-span-1 bg-white shadow-lg rounded-xl p-4">  
                <div className="flex items-center gap-3 pb-3">
                    <SiShazam className="text-blue-500 text-2xl sm:text-3xl flex-shrink-0" />
                    <a href="https://github.com/TruongTommy99/Shazam-Assignment/tree/main/ShazamAssignment/ShazamAssignment" 
                       target="_blank" 
                       rel="noreferrer noopener" 
                       className="font-semibold text-blue-500 hover:underline text-base sm:text-lg">  
                        ShazamKit
                    </a>
                </div>
                <div className="pb-4">
                    <p className="text-sm sm:text-base font-semibold">
                        Start Shazaming with only a few lines of code.
                    </p>                     
                </div>
                <div className="flex justify-center">
                    <img src={ShazamScreenshot} 
                         className="w-full max-w-[200px] h-auto object-contain" 
                         alt="Shazam Screenshot" />
                </div>
            </div>
        </div>
    )
}

export default personalProjects;