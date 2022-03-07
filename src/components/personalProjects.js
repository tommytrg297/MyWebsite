import React from "react";
import {FaSpotify,FaPython} from "react-icons/fa";
import BSDiscord from "react-icons/bs";



function personalProjects() {

return (
    <div className="grid " > 
        <div className=" bg-white shadow-lg rounded-xl p-2 ">  

        {/** SPOTIFY UI*/}
        <div className = "flex">
           <div className = "pl-3 pt-3"><FaSpotify size={30} className = "text-green-500"/> </div> 
            <p className="pl-3 pt-4 font-semibold text-green-500">Spotify's UI, remade!</p>
        </div>
        <p className=" pl-14">
            I recreated the iOS Spotify UI using the SwiftUI kit. 
        </p>


      



        






        </div>
    </div>
)
}

export default personalProjects;