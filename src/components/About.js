import React from "react"

import profile from "../images/TTlogo_Color.png"
import {FaGithub, FaEnvelope,FaLinkedin, FaRegFilePdf, FaFilePdf} from "react-icons/fa"
import MyResume from '../TRUONG_Resume.pdf';

export default function About() {
    return (
    <div className=" max-w-5xl mt-6 mx-auto">
        <div className=" grid grid-cols-3 ">

            <div className="">
            <img className=" w-44 mx-auto shadow-xl rounded-full drop-shadow-lg justify-center" src={profile} alt="profile">
                </img>
            </div>

            <div className="col-span-2">
            <p className= "text-black text-4xl md:text-4xl font-semibold text-center ">
                Truong Tommy
            </p>
            <p className= "text-base text-md md:text-xl text-center text-gray-700 leading-relaxed mt-4 ">
                I am currently a Computer Science major at Rensselaer Polytechnic Institute. 
            </p>
            <p className= "text-base text-md md:text-xl text-center text-gray-700 leading-relaxed  ">
                I enjoy creating and sharing fun and useful software. My current work include iOS applications and tons of other programs.
            </p>

            <div >
                <a href = {MyResume} target = "_blank" className= "flex align-center justify-center mt-2 py-4 px- hover:underline ">
                    <FaFilePdf className="text-red-800 mt-1 m-1.5" />   
                    <p className= "text-4xl md:text-xl text-center text-gray-700 leading-relaxed  ">
                        Latest Resume: September 2023
                    </p>
                </a>
            </div>

            {/* <div className=" flex align-center justify-center mt-2">
                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full 
                            hover:text-white transition-colors duration-300" href="https://github.com/TruongTommy99" target="_blank">
                            <FaGithub />
                             <span class  = "sr-only">Github</span>
                    </a>

                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2  text-blue-600 hover:bg-blue-400 rounded-full 
                            hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/tommy-tr/ " target="_blank">
                            <FaLinkedin />
                             <span class = "sr-only">LinkedIn</span>
                    </a>
                </div> */}

            </div>
        </div>
    </div>

    )
}