import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <p>Things I've built so far</p>
      <div className="projects">
        <div className="project-tile">
          <div className="project-image"></div>
          <div className="project-info">
            <h3>Crypto Pond</h3>
            <p>Research portal website revamp to improve usability and data management.</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
              <a href="home">View Code</a>
            </div>
          </div>
        </div>
        <div className="project-tile">
          <div className="project-image"></div>
          <div className="project-info">
            <h3>SERP-P</h3>
            <p>This is a sample project description...</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
              <a href="home">View Code</a>
            </div>
          </div>
        </div>
        <div className="project-tile">
          <div className="project-image"></div>
          <div className="project-info">
            <h3>Mental Health PH</h3>
            <p>This is a sample project description...</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
              <a href="home">View Code</a>
            </div>
          </div>
        </div>
        
      </div>
      <div className="projects">
        <div className="project-tile">
          <div className="project-image"></div>
          <div className="project-info">
            <h3>Klik Media Group</h3>
            <p>This is a sample project description...</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
              <a href="home">View Code</a>
            </div>
          </div>
        </div>
        <div className="project-tile">
          <div className="project-image"></div>
          <div className="project-info">
            <h3>Project 5</h3>
            <p>This is a sample project description...</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
              <a href="home">View Code</a>
            </div>
          </div>
        </div>
        <div className="project-tile">
          <div className="project-image"></div>
          <div className="project-info">
            <h3>Project 6</h3>
            <p>This is a sample project description...</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
              <a href="home">View Code</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
