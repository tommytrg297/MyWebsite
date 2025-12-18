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
    <div className="min-h-screen py-6 sm:py-10 px-3 sm:px-5 bg-gray-100">
      
      {/* About Section - Centered with better mobile spacing */}
      <div className="grid place-content-center py-12 sm:py-24 md:py-36">
        <About/>
      </div>

      {/* Main Content Container - Responsive width */}
      <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto py-4 sm:py-8">
        
        {/* About Me Section */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 text-left font-semibold mb-4 sm:mb-6">
          About me
        </p>
        <div className="py-4 sm:py-6 md:py-10">
          <AboutMe/>
        </div>

        {/* Projects Section Header */}
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-black text-left font-semibold pt-8 sm:pt-12 md:pt-16 mb-4 sm:mb-6">
          Projects I'm working on
        </p>

        {/* Shuttle Tracker Section */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-500 text-left font-semibold pt-8 sm:pt-12 md:pt-16 mb-4 sm:mb-6">
          Shuttle Tracker
        </p>
        <div className="py-4 sm:py-6 md:py-10">
          <ShuttleTracker/>
        </div>

        {/* Personal Projects Section */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#652af8] text-left font-semibold pt-8 sm:pt-12 md:pt-16 mb-4 sm:mb-6">
          Personal Projects
        </p>
        <div className="py-4 sm:py-6 md:py-10">
          <PersonalProjects/>
        </div>

        {/* For Developers Section */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-600 text-left font-semibold pt-8 sm:pt-12 md:pt-16 mb-4 sm:mb-6">
          For Developers
        </p>
        <div className="py-2 sm:py-4 md:py-5">
          <ForDevs/>
        </div>
      </div>
    </div>
  );
}

export default App;