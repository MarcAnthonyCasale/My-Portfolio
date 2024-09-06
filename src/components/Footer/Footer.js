import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>+9283237283 | marcanthonycasale1@gmail.com</p>
        <p>Designed and built by Marc Casale</p>
      </div>
      <div className="footer-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
