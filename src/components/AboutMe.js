import React from "react";

import Map from "../images/MapRoutes.png"

import RCOS from "../images/RCOS.png"
import RPIChess from "../images/RPIChessClub.png"
import {FaArrowRight, FaPlus} from "react-icons/fa"
import {FaGithub, FaEnvelope,FaLinkedin, FaEnvelopeOpen,FaPlusCircle} from "react-icons/fa"

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
const [openTab, setOpenTab] = React.useState(1);

const programmingIcon = "w-20 bg-transparent drop-shadow-lg";
const blueTitleFont1 = "text-md sm:text-xl text-left text-blue-600 font-semibold  pt-3 p-3"
const whiteTitleFont1 = "text-md sm:text-xl text-left text-white font-semibold  pt-3 p-3"


return (
    <div className="grid grid-cols-3 gap-7" > 
        <div className="col-span-1 bg-white shadow-lg rounded-xl "> 
        <p className = " text-md sm:text-xl text-blue-600 text-left font-semibold pt-5 p-3">
            From Saigon to New York through Paris</p>
        <p className = " text-md sm:text-md text-black text-left font-semibold pt-0.5 pl-3">
        After my first year of engineering school in Paris, I moved to the US and am currently attending RPI.
        </p>
        <img className = " w-auto bg-transparent" src={Map} alt="profile" ></img>
        </div>

        <div className= {(openTab === 1 ? "bg-white relative col-span-1 shadow-lg rounded-xl p-2" : 
                                          "bg-blue-500 relative col-span-1 shadow-lg rounded-xl p-2")  }>  
            <div className="flex space-x-28 ">
                <p className = { (openTab === 1 ? blueTitleFont1: 
                                                  "text-md sm:text-xl text-left text-blue-600 font-semibold  pt-3 p-3" )}>
                Technologies I use
                </p>
                <a className = 
                    { (openTab === 1 ? "text-3xl m-1 p-1 sm:m-0.5 sm:p-2 text-blue-500 rounded-none " :
                                       "text-3xl m-1 p-1 sm:m-0.5 sm:p-2 text-white rounded-none" )} 
                    onClick={e => {
                        e.preventDefault();
                        if (openTab == 2) { 
                            setOpenTab(1);
                        }
                        if (openTab == 1) { 
                            setOpenTab(2);
                        }
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                    >
                    <div className= {(openTab == 1 ? "" : "rotate-45 " )}>
                        <FaPlusCircle/>
                    </div>
                </a>
            </div>
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <p className = " text-md sm:text-2xl  text-black text-left font-semibold pt-0.5 pl-3 "
                                    id = "link1">
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
            </div>

            <div className={openTab === 2 ? "block" : "hidden" } id="link2">
                    <p className = " text-md sm:text-2xl text-white justify-center font-semibold pt-2 pl-3 "
                                    id = "link1">
                    I worked with Firebase as a backend tool to store and retrieve data through REST APIs such as GET or POST requests.
                    </p>
                    <p className = " text-md sm:text-2xl text-white text-left font-semibold pl-3 pt-3 ">
                    I haved also used Python for my schoolwork and made this website with React.js and TailwindCSS.
                    </p>
            </div>
            
        </div>  
          
        
        {/* <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                <p className = " text-md sm:text-2xl  text-black text-left font-semibold pt-0.5 pl-3 "
                                id = "link1">
                    I have experienced in using Firebase as a back-end service, making POST and GET request in order to receive and transmit data.
                </p>

                <p className = " text-md sm:text-2xl text-black text-left font-semibold pl-3 ">
                I also have used Python for schoolwork, and have experience in Web Development with React.js and TailwindCSS.
                 </p>
            </div> */}


        <div className="relative col-span-1 bg-white shadow-lg rounded-xl p-2 "> 
            <p className = " text-md sm:text-xl text-blue-600 text-left font-semibold  pt-3 p-3 ">
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

