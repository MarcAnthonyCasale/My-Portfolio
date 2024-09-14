import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Hi <span role="img" aria-label="wave">👋</span>
          , My name is <br /><span className="highlight">Marc Anthony Casale <br /></span>
          I am a <br /><span className="highlight">Web developer/Web Designer</span></h2>
        </div>
        <div className="hero-image">
          <img src="/assets/DP.jpg" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
