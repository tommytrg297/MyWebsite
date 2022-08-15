import react from "react";
import { FaSwift,FaReact,FaHtml5,FaCss3 } from "react-icons/fa";
import { SiCplusplus} from "react-icons/si"
import { SiPython} from "react-icons/si"
import { SiJavascript} from "react-icons/si"

import img1 from "../images/python.svg.png";



function Skills() {

return (
    <div className="max-w-4xl mx-auto justify-center py-8" id="tech">
        <p className="text-xl sm:text-2xl text-black text-center font-bold  pt-4">
            Technologies I Use 
        </p>
    
        <div className="flex flex-wrap justify-center pt-2">

            <div className="flex flex-col w-30 p-6 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-40">
                <FaSwift color ="#F05138" className=" mx-auto text-2l sm:text-4xl"></FaSwift>
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Swift</p>
            </div>

            <div className="flex flex-col w-30 p-6 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-40">
            <   FaSwift color ="#044F88" className=" mx-auto text-2l sm:text-4xl"></FaSwift>
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">SwiftUI</p>
            </div>
            
            <div className="flex flex-col w-30 p-6 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-40">
                <SiCplusplus color ="#044F88" className=" mx-auto text-2l sm:text-4xl"></SiCplusplus>
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">C++</p>
            </div>

            <div className="flex flex-col w-30 p-6 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-40">
                <img src={img1} className=" object-scale-down h-[2.5rem]"></img>
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Python</p>
            </div>

            <div className="flex flex-col w-30 p-6 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-40">
                <div className = "flex">
                <FaHtml5 color ="#2191E9" className=" mx-auto text-2l sm:text-4xl"></FaHtml5>
                <FaCss3 color ="#FF6443" className=" mx-auto text-2l sm:text-4xl"></FaCss3>
                </div>
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">HTML/CSS</p>
            </div>

            <div className="flex flex-col w-30 p-6 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-40">
                <SiJavascript color ="#ffdf00" className=" mx-auto text-2l sm:text-4xl"></SiJavascript>
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Javascript</p>
            </div>

            <div className="flex flex-col w-30 p-6 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-40">
                <FaReact color ="#044F88" className=" mx-auto text-2l sm:text-4xl"></FaReact>
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">React</p>
            </div>

        
        </div>
    </div>
)
}

export default Skills;