import React from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          {/* <img className="logo" src="logo.png" /> */}
          <h2>aboutKonsta</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars style={{ color: "#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link offset={-50} smooth={true} to={"home"} className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-50} smooth={true} to={"about"} className="nav-link" href="#">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-50} smooth={true} to={"skills"} className="nav-link" href="#">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-50} smooth={true} to={"experience"} className="nav-link" href="#">
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link offset={-50} smooth={true} to={"contact"} className="nav-link" href="#">
                Contact me
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/konsta2106" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
