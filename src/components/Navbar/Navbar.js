import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>
            <img src="/assets/Logo.png" alt="Logo"/>
        </span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#techstack">Tech Stack</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="social-icons">
        <a href="home"><i className="fab fa-github"></i></a>
        <a href="home"><i className="fab fa-twitter"></i></a>
        <a href="home"><i className="fab fa-linkedin"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
