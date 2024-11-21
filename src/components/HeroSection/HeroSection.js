import React from "react";
import './HeroSection.css';
import Typewriter from "typewriter-effect";
import { introdata } from "../../content_option";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="subtitle">I Am Marc Anthony Casale</p>
          <h1 className="title">
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h1>
          <div className="location-container">
              <div className="location">
                <span className="location-title">Position</span>
                <p className="location-subtext">Full Stack Web Developer</p>
              </div>
              <div className="location">
                <span className="location-title">Location</span>
                <p className="location-subtext">Manila, Philippines</p>
              </div>
              <div className="location">
                <span className="location-title">Expertise</span>
                <p className="location-subtext">React, Laravel, Python</p>
              </div>
            </div>
          </div>

        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/assets/DP.jpg`} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
