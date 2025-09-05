import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">Karthick Muthupandi</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="nav-link"
                role="button"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="nav-link"
                role="button"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="nav-link"
                role="button"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="nav-link"
                role="button"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="nav-link"
                role="button"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
