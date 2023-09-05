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
    <div className="grid grid-cols-3 gap-7 auto-cols-max " > 

        {/** Uni Friends*/}
        <div className="col-span-1 bg-white shadow-lg rounded-xl p-2">  
            <div className="px-4 py-2 flex ">
                <img src={UniFriendIcon} className=" object-scale-down h-[2.5rem] "></img> {/* Icon */}
                <a href="https://apps.apple.com/lt/app/uni-friends/id1622401835" target="_blank" rel="noreferrer noopener" className = "pt-2 px-4  font-semibold text-blue-500">  
                            Uni Friends
                </a>   {/* Title */}
            </div>
            <div className=" pl-5 pt-1 font-semibold">
                <p className=""> Time your studying block with a relaxing music player.</p>                     
            </div>
            <img src={UniFriendsScreenshot} className=" flex pb-4 rounded-xl  object-scale-down h-[32rem] px-16"></img>
        </div>

        {/** Explorer*/}
        <div className="col-span-1 bg-white shadow-lg rounded-xl p-2">  
            <div className="px-4 py-2 flex ">
                <FaPaperPlane className="mt-1 text-blue-500 text-md sm:text-3xl"></FaPaperPlane> 
                <a href="https://github.com/TruongTommy99/Explorer/tree/main/Explorer" target="_blank" rel="noreferrer noopener" className = "pt-2 px-4  font-semibold text-blue-500">  
                            Explorer
                </a>   {/* Title */}
            </div>
            <div className=" pl-5 pt-1 font-semibold">
                <p className=""> Find your next vacation spot and learn more about it.</p>                     
            </div>
            <img src={ExplorerScreenshot} className="flex pb-4 rounded-xl object-scale-down h-[16rem] px-12 hover:scale-[3.5] transition duration-500 cursor-pointer"></img>
            <img src={ExplorerScreenInformationView} className="flex pb-4 rounded-xl object-scale-down h-[16rem] px-12 hover:scale-[3.5] transition duration-500 cursor-pointer"></img>
        </div>

        {/** Shazam*/}
        <div className="col-span-1 bg-white shadow-lg rounded-xl p-2">  
            <div className="px-4 py-2 flex ">
                <SiShazam className="mt-1 text-blue-500 text-md sm:text-3xl"></SiShazam> 
                <a href="https://github.com/TruongTommy99/Shazam-Assignment/tree/main/ShazamAssignment/ShazamAssignment" target="_blank" rel="noreferrer noopener" className = "pt-2 px-4  font-semibold text-blue-500">  
                            ShazamKit
                </a>   {/* Title */}
            </div>
            <div className=" pl-5 pt-1 font-semibold">
                <p className=""> Start Shazaming with only a few lines of code. </p>                     
            </div>
            <img src={ShazamScreenshot} className=" flex pb-4 rounded-xl  object-scale-down h-[32rem] px-16"></img>
        </div>

    </div>
)
}

export default personalProjects;