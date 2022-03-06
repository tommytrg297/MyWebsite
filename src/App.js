import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About";
import NavBar from "./components/navbar";
import react from "react";
import Card from "./components/Card";
import Skills from "./components/Skills"
import ShuttleTracker from "./components/ShuttleTracker"


function App() {
  return (
    <div className=" min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div className = "grid grid-cols-2 place-content-center h-48 py-36">
        <div><Card /></div>
        <div> <About/></div>
      </div>

      <Skills/>

      <div className="max-w-sm md:max-w-7xl mx-auto justify-center py-8 ">
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

        <p className="text-md sm:text-5xl text-[#019cb7] text-left font-semibold  pt-16 ">
            For Developpers
        </p>


      </div>
      
    </div>
    
  );
}

export default App;
