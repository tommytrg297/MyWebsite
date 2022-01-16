import React from "react"
import { NavLink } from "react-router-dom";



export default function navbar() {
    return (
    <header className=" bg-red-500 ">
        <div className=" container mx-auto flex justify-between">
            <nav className=" flex">
                <NavLink to ="/" exact activeClassName="text-white" 
                className="inline-flex items-center py-3 px-4 mr-4 text-red-100
                 hover:text-cyan-400 text-3xl font-bold  tracking-widest ">
                    Tommy
                </NavLink>
                
                <NavLink to = "/project" 
                activeClassName = "text-red-100 bg-red-700"
                className=" inline-flex items-center py-3 px-3 my-3 rounded text-red-200 
                                                     hover:text-green-800 ">
                    Projects
                </NavLink>
               
                <NavLink to = "/about"  
                activeClassName = "text-red-100 bg-red-700"
                className=" inline-flex items-center py-3 px-3 my-3 rounded text-red-200 
                                                     hover:text-green-800 ">
                    About me!
                </NavLink>
            </nav>
        </div>
    </header>
    )
}