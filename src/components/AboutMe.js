import React from "react";

import Map from "../images/MapRoutes.png"

import RCOS from "../images/RCOS.png"
import RPIChess from "../images/RPIChessClub.png"
import {FaArrowRight} from "react-icons/fa"
import {FaGithub, FaEnvelope,FaLinkedin, FaEnvelopeOpen} from "react-icons/fa"

import SwiftUI from "../images/ProgrammingIcons/SwiftUI.png"
import Swift from "../images/ProgrammingIcons/Swift.png"
import Xcode from "../images/ProgrammingIcons/Xcode.png"
import AVFoundations from "../images/ProgrammingIcons/AVFoundations.png"
import MapKit from "../images/ProgrammingIcons/MapKit.png"
import CoreML from "../images/ProgrammingIcons/CoreML.png"
import PackageManager from "../images/ProgrammingIcons/SwiftPackageManager.png"
import Firebase from "../images/ProgrammingIcons/Firebase.png"
import Devices from "../images/ComputerPhone.png"






export default function AboutMe() {
const programmingIcon = "w-20 bg-transparent drop-shadow-lg";

return (
    <div className="grid grid-cols-3 gap-7" > 

        <div className="col-span-1 bg-white shadow-lg rounded-xl "> 

        <p className = " text-md sm:text-xl text-blue-400 text-left font-semibold  pt-3 p-3 ">
            From Saigon to New York through Paris</p>

        <p className = " text-md sm:text-md text-black text-left font-semibold pt-0.5 pl-3 ">
        After my first year of engineering school in Paris, I moved to the US and am currently attending RPI.
        </p>

        <img className = " w-auto bg-transparent" src={Map} alt="profile" ></img>


        </div>

        <div className="relative col-span-1 bg-white shadow-lg rounded-xl p-2 "> 
            <p className = " text-md sm:text-xl text-blue-600 text-left font-semibold  pt-3 p-3 ">
            Technologies I use</p>

            <p className = " text-md sm:text-2xl  text-black text-left font-semibold pt-0.5 pl-3 ">
                SwiftUI and UIKit to build applications on Xcode.
            </p>

            <div className="flex space-x-3 justify-center py-4">

            <img className = " w-24 bg-transparent drop-shadow-lg" src={SwiftUI} alt="profile" ></img>
            <img className = " w-24 bg-transparent drop-shadow-lg" src={Swift} alt="profile" ></img>
            <img className = " w-24 bg-transparent drop-shadow-lg" src={Xcode} alt="profile" ></img>


            </div>

            <p className = " text-md sm:text-2xl text-black text-left font-semibold pl-3 ">
                Frameworks include AVFoundations, MapKit, CoreML and multiple 3rd party libraries.
            </p>

            {/* <div className="flex space-x-5 justify-center py-8">
            <img className = {programmingIcon} src={AVFoundations} alt="profile" ></img>
            <img className = {programmingIcon} src={MapKit} alt="profile" ></img>
            <img className = {programmingIcon} src={CoreML} alt="profile" ></img>
            </div> */}

            {/* <p className = " text-md sm:text-2xl text-black text-left font-semibold pt-0.5 pl-3 ">
                Firebase with REST API.
            </p>

            <div className="flex space-x-3 justify-center py-4">
            <img className = {programmingIcon} src={Devices} alt="profile" ></img>
            <p className= " text-5xl text-blue-900 py-4">  <strong> <FaArrowRight/> </strong>   </p>
            <div className=" py-2">
                <p className="font-semibold pt-0.5 pl-3"> GET </p>
                <p className="font-semibold pt-0.5 pl-3"> POST </p>
            </div>
            <p className= " text-5xl text-orange-400 py-4">  <strong> <FaArrowRight/> </strong>   </p>
            <img className = {programmingIcon} src={Firebase} alt="profile" ></img>
            </div> */}
            
        </div>


        <div className="relative col-span-1 bg-white shadow-lg rounded-xl p-2 "> 
            <p className = " text-md sm:text-xl text-blue-800 text-left font-semibold  pt-3 p-3 ">
            What I'm up to</p>

            <div className=" flex text-left py-5 ">
            <img className=" w-16 shadow-xl bg-white rounded-full drop-shadow-lg" src={RCOS}></img>
            <div> 
                <p className = "text-md sm:text-md text-black  font-semibold pl-3 ">RCOS </p>
                <p className = "text-md sm:text-md text-black font-semibold pl-3 "> Rensselaer Center for Open Source </p>
            </div>
            </div>

            <div className="flex justify-start py-5 ">
            <img className=" w-16 shadow-xl bg-white rounded-full drop-shadow-lg" src={RPIChess}></img>
            <div> 
                <p className = "text-md sm:text-md text-black font-semibold pl-3 ">RPI Chess Club</p>
                <div className="flex">
                <p className = "text-md sm:text-md text-black font-semibold pl-3 ">Come join us on  </p>
                <a className = "text-md sm:text-md text-[#5865F2] font-semibold pl-1 " href = "https://discord.gg/kgqfBskqKV">Discord </a>
                </div>
            </div>
            </div>
            
            <p className = " text-md sm:text-md text-black text-left font-semibold pl-3 absolute bottom-16 ">
                Connect with me: 
            </p>

            <div className=" flex align-center justify-center mt-2 absolute bottom-6">
            <a className="text-xl m-1 sm:m-2 sm:p-1 text-gray-800 hover:bg-gray-800 rounded-full 
                hover:text-white transition-colors duration-300" href="https://github.com/TruongTommy99" target="_blank">
                <FaGithub />
                    <span class  = "sr-only">Github</span>
            </a>

            <a className="text-xl m-1 p-1 sm:m-2 sm:p-1  text-blue-600 hover:bg-blue-400 rounded-full 
                hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/tommy-tr/ " target="_blank">
                <FaLinkedin />
                    <span class = "sr-only">LinkedIn</span>
            </a>

            <a className="text-xl m-1 p-1 sm:m-2 sm:p-1  text-orange-500 hover:bg-orange-300 rounded-full 
                hover:text-white transition-colors duration-300" href="mailto: truongnhuphattommy@gmail.com?subject=Hello" target="_blank">
                <FaEnvelope />
                    <span class = "sr-only">Mail</span>
            </a>


            </div>
        </div>

    </div>
)
}

