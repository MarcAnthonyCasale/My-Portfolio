import React from 'react';
import './TechStackP.css';

const TechStack = () => {
  return (
    <div className="tech-stack">
      <h2>My Tech Stack</h2>
      <p>Technologies I've been working with recently</p>
      <div className="icons">
        {/* Add your tech icons here */}
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
        <i className="fab fa-js-square"></i>
        <i className="fab fa-react"></i>
        {/* Add more icons as necessary */}
      </div>
    </div>
  );
};

export default TechStack;
