import React from "react";
import {FaSpotify,FaPython,FaDiscord} from "react-icons/fa";
import img1 from "../images/python.svg.png";
import {GoChevronRight} from "react-icons/go";




function personalProjects() {

return (
    <div className="grid " > 
        <div className=" bg-white shadow-lg rounded-xl p-2 ">  

        {/** SPOTIFY UI*/}
        <div className = "flex pl-3 pt-3">
           <div className = " p-1  bg-black rounded-xl"><FaSpotify size={30} className = "text-green-500 "/> </div> 
            <p className="pl-3 pt-2.5 font-semibold text-green-500">Spotify's UI, remade!</p>
        </div>
        <div className = "flex">
        <p className=" pl-5 pt-1">
            I recreated the iOS Spotify UI using the SwiftUI kit. 
        </p>
        <a href="https://github.com/TruongTommy99/-SpotifyUI" target="_blank" rel="noreferrer noopener"
            className = "py-2  text-blue-800">
                    <GoChevronRight/>
                     </a>
        </div>
        

        {/** Python Games */}
        <div className = "flex pl-3 pt-3">
           <div className = " p-1 rounded-xl">
           <img src={img1} className=" object-scale-down h-[2.5rem]"></img>
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



        <p className=" pl-5 pt-1">
            Tetris with added colorful ASCII-art textures using the graphics packages.
        </p>



        {/** Discord ChessBot*/}
        <div className = "flex pl-3 pt-3">
           <div className = " p-1 bg-[#7289DA] rounded-xl"><FaDiscord size={30} className = " text-white"/> </div> 
            <p className="pl-3 pt-3 font-semibold text-[#7289DA]">Discord Chess Bot</p>
        </div>
        <p className=" pl-5 pt-1">
            What happens when Computer Science Majors that plays chess wants to share their amazing 4 moves sequence checkmate? They use the RPIChessBot!
        </p>
        <p className=" pl-5"> Developped using JavaScript </p>


      



        






        </div>
    </div>
)
}

export default personalProjects;