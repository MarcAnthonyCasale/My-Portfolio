import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <span>
            <img src={`${process.env.PUBLIC_URL}/assets/Logo.png`} alt="Logo"/>
          </span>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
       
        <div className="hamburger">
          <span>About</span>
          <span>Services</span>
          <span>Portfolio</span>
          <span>Contact</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
