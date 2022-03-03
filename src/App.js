import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/home";
import About from "./components/About";
import SinglePost from "./components/singlepost";
import Post from "./components/post";
import Project from "./components/project";
import NavBar from "./components/navbar";
import react from "react";
import Card from "./components/Card";
import Skills from "./components/Skills"


function App() {
  return (
    <div className=" min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div className = "flex align-self: center">
        <Card />
        <About />
      </div>
        <Card />

    </div>
    
  );
}

export default App;
