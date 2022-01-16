import react from "react";
import { FaSwift } from "react-icons/fa";
import { SiCplusplus} from "react-icons/si"
import { SiPython} from "react-icons/si"
import { SiJavascript} from "react-icons/si"


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
                <SiPython color ="#044F88" className=" mx-auto text-2l sm:text-4xl"></SiPython>
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Python</p>
            </div>

            <div className="flex flex-col w-30 p-6 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-40">
                <SiJavascript color ="#ffdf00" className=" mx-auto text-2l sm:text-4xl"></SiJavascript>
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Javascript</p>
            </div>

            <div className="flex flex-col w-30 p-6 m-5 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-40">
                <SiCplusplus color ="#044F88" className=" mx-auto text-2l sm:text-4xl"></SiCplusplus>
                <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">C++</p>
            </div>




        </div>
    </div>
)
}

export default Skills;