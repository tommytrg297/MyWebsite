import React from "react";
import {FaSpotify,FaPython,FaDiscord} from "react-icons/fa";
import img1 from "../images/python.svg.png";
import {GoChevronRight} from "react-icons/go";
import UniFriendIcon from "../images/UniFriend.png"



function personalProjects() {

return (
    <div className="grid " > 
        <div className=" bg-white shadow-lg rounded-xl p-2 ">  

        {/** SPOTIFY UI*/}
        <div className = "flex pl-3 pt-3">
            <img src={UniFriendIcon} className=" object-scale-down h-[2.5rem] "></img>
            <p className="pl-3 pt-2.5 font-semibold text-blue-500">Uni Friend</p>
        </div>
        <div className = "flex">
        <p className=" pl-5 pt-1">
            I created an application that combines a music player with a timer allowing students to easily manage their studying studying block.
        </p>
        <a href="https://github.com/TruongTommy99/-SpotifyUI" target="_blank" rel="noreferrer noopener"
            className = "py-2  text-blue-800">
                    <GoChevronRight/>
                     </a>
        </div>
        

        {/** Python Games */}
        <div className = "flex pl-3 pt-3">
           <div className = " p-1 rounded-xl">
           <img src={img1} className=" rounded-lg object-scale-down h-[2.5rem] "></img>
               </div> 
            <p className="pl-3 pt-4 font-semibold text-blue-700">Mini Games, made with Python 3</p>
        </div>
        
        <div className = "flex">
        <p className=" pl-5 pt-1">
            Mastermind, a funny small guessing game.
        </p>
        <a href="https://github.com/TruongTommy99/Mastermind" target="_blank" rel="noreferrer noopener"
            className = "py-2  text-blue-800">
                    <GoChevronRight/>
                     </a>
        </div>

        <div className = "flex">
        <p className=" pl-5 pt-1">
                Tetris with added colorful ASCII-art textures using the graphics packages.        </p>
        <a href="https://github.com/Gerzer/Textris" target="_blank" rel="noreferrer noopener"
            className = "py-2  text-blue-800">
                    <GoChevronRight/>
                     </a>
        </div>
    

        </div>
    </div>
)
}

export default personalProjects;