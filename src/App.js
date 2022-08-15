import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About";
import react from "react";
import Skills from "./components/Skills";
import ShuttleTracker from "./components/ShuttleTracker";
import PersonalProjects from "./components/personalProjects";
import ForDevs from "./components/forDevs";
import AboutMe from "./components/AboutMe";


function App() {
  return (
    
    <div className=" min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div className = "grid place-content-center h-48 py-36">
        <div> <About/></div>
      </div>

      <div className="max-w-sm md:max-w-7xl mx-auto justify-center py-8 ">
      <p className="text-md sm:text-5xl  text-blue-600 text-left font-semibold  ">
            About me
        </p>
        <div className = "py-10">
          <AboutMe/>
        </div>

      <p className="text-md sm:text-7xl text-black text-left font-semibold  pt-4">
            Projects I'm working on. 
        </p>
      <p className="text-md sm:text-5xl text-red-500 text-left font-semibold  pt-16 ">
            Shuttle Tracker
        </p>
      <div className = " py-10">
        <ShuttleTracker/>
        </div>

        <p className="text-md sm:text-5xl text-[#652af8] text-left font-semibold  pt-16 ">
            Personal Projects
        </p>

        <div className = "py-10">
          <PersonalProjects/>
        </div>



        <p className="text-md sm:text-5xl text-[#019cb7] text-left font-semibold  pt-8 ">
            For Developpers
        </p>

        <div className = " py-5">
        <ForDevs/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
