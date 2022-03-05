import React from "react";
import { icons } from "react-icons";
import profile from "../images/TTlogo_Color.png"
import {FaGithub, FaEnvelope,FaLinkedin} from "react-icons/fa"


function App(){ 
return(
    <div className=" w-full">
        <div className=" flex flex-col justify-center max-w-md mx-auto bg-white shadow-lg rounded-xl p-2 "> 
            
            <div className=""> 
                <img className=" w-32 mx-auto shadow-xl rounded-full drop-shadow-lg" src={profile} alt="profile">
                </img>
            </div>

            <div className=" text-center mt-5">
                <p className=" text-2xl sm:2xl text-gray-800">
                    Truong Tommy
                </p>
                <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2 "> 
                    RPI Computer Science Major 
                </p>

                <div className=" flex align-center justify-center mt-2">
                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full 
                            hover:text-white transition-colors duration-300" href="https://github.com/TruongTommy99">
                            <FaGithub />
                             <span class class = "sr-only">Github</span>
                    </a>

                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-green-500 rounded-full 
                            hover:text-white transition-colors duration-300" href="https://github.com/TruongTommy99">
                            <FaEnvelope />
                             <span class class = "sr-only">Email</span>
                    </a>
                    <a className="text-xl m-1 p-1 sm:m-2 sm:p-2  text-blue-600 hover:bg-green-500 rounded-full 
                            hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/tommy-tr/">
                            <FaLinkedin />
                             <span class class = "sr-only">LinkedIn</span>
                    </a>
                </div>
            

            </div>
       

       

        </div>
         
    </div>
)
}

export default App;