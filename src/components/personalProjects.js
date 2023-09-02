import React from "react";
import {FaSpotify,FaPython,FaDiscord} from "react-icons/fa";
import img1 from "../images/python.svg.png";
import {GoChevronRight} from "react-icons/go";
import UniFriendIcon from "../images/UniFriend.png"



function personalProjects() {

return (
    <div className="grid grid-cols-3 gap-7 " > 

        {/** Uni Friends*/}
        <div className="col-span-1 bg-white shadow-lg rounded-xl p-2">  
            <img src={UniFriendIcon} className=" object-scale-down h-[2.5rem] "></img>
            <p className="pl-3 pt-2.5 font-semibold text-blue-500">Uni Friend</p>
            <p className=" pl-5 pt-1">
                An application that combines a music player with a timer allowing students to easily manage their studying block.
            </p>
            <a href="https://github.com/TruongTommy99/-SpotifyUI" target="_blank" rel="noreferrer noopener"
                className = "py-2  text-blue-800">
                        <GoChevronRight/>
            </a>
        </div>

        {/** Uni Friends*/}
        <div className=" col-span-1 bg-white shadow-lg rounded-xl p-2"> 
            <p>
                Explorer
            </p>
        </div>

        {/** Shazam*/}
        <div className=" col-span-1 bg-white shadow-lg rounded-xl p-2"> 
            <p>
                Shazam
            </p>
        </div>

    </div>
)
}

export default personalProjects;