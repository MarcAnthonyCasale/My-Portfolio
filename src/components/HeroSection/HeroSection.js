import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Hi <span role="img" aria-label="wave">👋</span>,</h1>
        <h2>My name is <span className="highlight">Marc Anthony Casale</span></h2>
        <h3>I am a Web developer/Web Designer</h3>
      </div>
      <div className="hero-image">
        <img src="/assets/DP.jpg" alt="Profile" />
      </div>
    </div>
  );
};

export default HeroSection;
