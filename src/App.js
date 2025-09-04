import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaReact, FaJava, FaGithub, FaLinkedin, FaBootstrap } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </>
  );
}


export default App;
