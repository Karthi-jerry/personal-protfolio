import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import { FaReact, FaJava, FaGithub, FaLinkedin, FaBootstrap } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
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
