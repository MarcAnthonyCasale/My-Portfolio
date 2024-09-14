import React from 'react';
import './TechStackP.css';

const TechStack = () => {
  return (
    <div className="tech-stack">
      <h2>My Tech Stack</h2>
      <p>Technologies I've been working with recently</p>
      <div className="icons">
        <div className="icon-wrapper">
          <i className="fab fa-html5"></i>
          <span className="tooltip">HTML</span>
        </div>

        <div className="icon-wrapper">
          <i className="fab fa-css3-alt"></i>
          <span className="tooltip">CSS</span>
        </div>

        <div className="icon-wrapper">
          <i className="fab fa-js-square"></i>
          <span className="tooltip">JavaScript</span>
        </div>

        <div className="icon-wrapper">
          <i className="fab fa-react"></i>
          <span className="tooltip">React</span>
        </div>

        <div className="icon-wrapper">
          <i className="fab fa-vuejs"></i>
          <span className="tooltip">Vue.js</span>
        </div>

        <div className="icon-wrapper">
          <i className="fab fa-laravel"></i>
          <span className="tooltip">Laravel</span>
        </div>

      </div>
      <div className="icons">

        <div className="icon-wrapper">
          <i className="fab fa-wordpress"></i>
          <span className="tooltip">WordPress</span>
        </div>

        <div className="icon-wrapper">
          <i className="fab fa-python"></i>
          <span className="tooltip">Python</span>
        </div>

        <div className="icon-wrapper">
          <i className="fab fa-github"></i>
          <span className="tooltip">GitHub</span>
        </div>

        <div className="icon-wrapper">
          <i className="fab fa-bootstrap"></i>
          <span className="tooltip">Bootstrap</span>
        </div>

        <div className="icon-wrapper">
          <i className="fab fa-sass"></i>
          <span className="tooltip">Sass</span>
        </div>

        <div className="icon-wrapper">
          <i className="fab fa-git"></i>
          <span className="tooltip">Git</span>
        </div>
      </div>

    </div>
  );
};

export default TechStack;
