import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-header">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/assets/Logo.png`} alt="Example" />
          </div>
          <div className="footer-info">
            <p className="footer-contact">09283237283 | marcanthonycasale1@gmail.com</p>
          </div>

        </div>
        <hr className="footer-line" />
        <div className="footer-nav">
          <div className="footer-links">
            <a href="#home">Home </a>
            <a href="#about">About </a>
            <a href="#technologies">Tech Stack </a>
            <a href="#projects">Projects </a>
            <a href="#contact">Contact </a>
          </div>
          <p className="footer-credit">
            Designed and built by <span className="footer-highlight">Marc Anthony Casale</span>
          </p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
