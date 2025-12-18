import React from "react";
import Map from "../images/MapRoutes.png"
import RCOS from "../images/RCOS.png"
import RPIChess from "../images/RPIChessClub.png"
import {FaArrowRight, FaPlus} from "react-icons/fa"
import {FaGithub, FaEnvelope,FaLinkedin, FaEnvelopeOpen,FaPlusCircle, FaTableTennis} from "react-icons/fa"
import AWS from "../images/AWS.png"
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

const blueTitleFont1 = "text-md sm:text-xl text-left text-blue-600 font-semibold pt-3 p-3"
const whiteTitleFont1 = "text-md sm:text-xl text-left text-white font-semibold pt-3 p-3"

return (
    // Changed from grid-cols-3 to grid-cols-1 on mobile, 2 on md, 3 on lg
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7"> 
        
        {/* Map Section */}
        <div className="col-span-1 bg-white shadow-lg rounded-xl p-4"> 
            <p className="text-base sm:text-xl text-blue-600 text-left font-semibold pt-2 pb-2">
                From Saigon to New York through Paris
            </p>
            <p className="text-sm sm:text-md text-black text-left font-semibold pb-3">
                After my first year of engineering school in Paris, I moved to the US and am currently attending RPI.
            </p>
            <img className="w-full bg-transparent" src={Map} alt="profile" />
        </div>

        {/* Technologies Section */}
        <div className={`${openTab === 1 ? "bg-white" : "bg-blue-500"} col-span-1 shadow-lg rounded-xl p-4`}>  
            <div className="flex justify-between items-start">
                <p className={openTab === 1 ? 
                    "text-base sm:text-xl text-left text-blue-500 font-semibold" : 
                    "text-base sm:text-xl text-left text-white font-semibold"
                }>
                    Technologies I use
                </p>
                <button 
                    className={`text-2xl sm:text-3xl p-2 ${openTab === 1 ? "text-blue-500" : "text-white"}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(openTab === 1 ? 2 : 1);
                    }}
                    aria-label="Toggle technologies"
                >
                    <div className={openTab === 1 ? "" : "rotate-45"}>
                        <FaPlusCircle/>
                    </div>
                </button>
            </div>

            <div className={openTab === 1 ? "block" : "hidden"}>
                <p className="text-sm sm:text-lg text-black text-left font-semibold py-2">
                    SwiftUI and UIKit to build applications on Xcode.
                </p>
                <div className="flex justify-center gap-3 py-4">
                    <img className="w-16 sm:w-20 md:w-24 bg-transparent drop-shadow-lg" src={SwiftUI} alt="SwiftUI" />
                    <img className="w-16 sm:w-20 md:w-24 bg-transparent drop-shadow-lg" src={Swift} alt="Swift" />
                    <img className="w-16 sm:w-20 md:w-24 bg-transparent drop-shadow-lg" src={Xcode} alt="Xcode" />
                </div>
                <p className="text-sm sm:text-lg text-black text-left font-semibold">
                    Frameworks include AVFoundations, MapKit, CoreML and multiple 3rd party libraries.
                </p>
            </div>

            <div className={openTab === 2 ? "block" : "hidden"}>
                <p className="text-sm sm:text-lg text-white font-semibold py-2">
                    I worked with Firebase as a backend tool to store and retrieve data through REST APIs such as GET or POST requests.
                </p>
                <p className="text-sm sm:text-lg text-white text-left font-semibold pt-3">
                    I have also used Python for my schoolwork and made this website with React.js and TailwindCSS.
                </p>
            </div>
        </div>  

        {/* What I'm up to Section */}
        <div className="col-span-1 bg-white shadow-lg rounded-xl p-4"> 
            <p className="text-base sm:text-xl text-blue-600 text-left font-semibold pb-3">
                What I'm up to
            </p>

            <div className="flex items-start gap-3 py-4">
                <img className="w-12 sm:w-16 flex-shrink-0" src={AWS} alt="AWS" />
                <div> 
                    <p className="text-sm sm:text-md text-black font-semibold">
                        Here's my team (I'm on the far left!), playing 
                        <a className="text-[#5865F2] pl-1 hover:underline" 
                           href="https://www.instagram.com/p/CvxMH9YMOgb/?hl=en"
                           target="_blank"
                           rel="noopener noreferrer">
                            Pickleball <FaTableTennis className='inline'/> 
                        </a> 
                        during my summer internship!
                    </p>
                </div>
            </div>
            
            <div className="flex items-start gap-3 py-4">
                <img className="w-12 sm:w-16 shadow-xl bg-white rounded-full drop-shadow-lg flex-shrink-0" 
                     src={RPIChess} 
                     alt="RPI Chess Club" />
                <div> 
                    <p className="text-sm sm:text-md text-black font-semibold">RPI Chess Club</p>
                    <p className="text-sm sm:text-md text-black font-semibold">
                        Come join us on 
                        <a className="text-[#5865F2] pl-1 hover:underline" 
                           href="https://discord.gg/kgqfBskqKV"
                           target="_blank"
                           rel="noopener noreferrer">
                            Discord
                        </a>
                    </p>
                </div>
            </div>
            
            <div className="pt-6">
                <p className="text-sm sm:text-md text-black text-left font-semibold pb-3">
                    Connect with me: 
                </p>

                <div className="flex gap-2">
                    <a className="text-xl p-2 text-gray-800 hover:bg-gray-800 rounded-full 
                                hover:text-white transition-colors duration-300" 
                       href="https://github.com/TruongTommy99" 
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Github">
                        <FaGithub />
                    </a>

                    <a className="text-xl p-2 text-blue-600 hover:bg-blue-400 rounded-full 
                                hover:text-white transition-colors duration-300" 
                       href="https://www.linkedin.com/in/tommy-tr/" 
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>

                    <a className="text-xl p-2 text-orange-500 hover:bg-orange-300 rounded-full 
                                hover:text-white transition-colors duration-300" 
                       href="mailto:truongnhuphattommy@gmail.com?subject=Hello" 
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </div>
    </div>
)
}