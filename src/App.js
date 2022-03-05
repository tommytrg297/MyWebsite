import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/home";
import About from "./components/About";
import SinglePost from "./components/singlepost";
import Post from "./components/post";
import NavBar from "./components/navbar";
import react from "react";
import Card from "./components/Card";
import Skills from "./components/Skills"
import Project from "./components/Project"


function App() {
  return (
    <div className=" min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div className = "grid place-content-center h-48 py-36">
        <div><Card /></div>
      </div>

      <Skills/>
      <Project/>

    </div>
    
  );
}

export default App;
