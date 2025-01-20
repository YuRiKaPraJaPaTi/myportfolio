import React from "react";
import Welcome from "./components/home/Welcome";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects"
import Resume from "./components/resume/Resume"
import Contact from "./components/contact/Contact"


function App() {
  return(
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className=" mx-auto px-16">
        
        <Navbar />
        <Welcome />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        
      </div>
    </div>
    
  )
}

export default App;
