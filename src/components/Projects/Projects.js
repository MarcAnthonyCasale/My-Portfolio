import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <p>Things I've built so far</p>
      <div className="projects">
        <div className="project-tile">
          <div className="project-image"><img src={`${process.env.PUBLIC_URL}/assets/image1.jpg`} alt="Project" /></div>
          <div className="project-info">
            <h3>Crypto Pond</h3>
            <p>TheCryptoPond is the premier free crypto networking group in the space.</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
            </div>
          </div>
        </div>
        <div className="project-tile">
          <div className="project-image"><img src={`${process.env.PUBLIC_URL}/assets/image2.png`} alt="Project" /></div>
          <div className="project-info">
            <h3>SERP-P</h3>
            <p>Research portal website revamp to improve usability and data management.</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
            </div>
          </div>
        </div>
        <div className="project-tile">
          <div className="project-image"><img src={`${process.env.PUBLIC_URL}/assets/image3.jpg`} alt="Project" /></div>
          <div className="project-info">
            <h3>Mental Health PH</h3>
            <p>This is a sample project description...</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
            </div>
          </div>
        </div>
        
      </div>
      <div className="projects">
        <div className="project-tile">
          <div className="project-image"><img src={`${process.env.PUBLIC_URL}/assets/image4.jpg`} alt="Project" /></div>
          <div className="project-info">
            <h3>Klik Media Group</h3>
            <p>This is a sample project description...</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
            </div>
          </div>
        </div>
        <div className="project-tile">
          <div className="project-image"><img src={`${process.env.PUBLIC_URL}/assets/image5.png`} alt="Project" /></div>
          <div className="project-info">
            <h3>Kode Across</h3>
            <p>A trusted software development company that helps businesses of all sizes across industries.</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
            </div>
          </div>
        </div>
        <div className="project-tile">
          <div className="project-image"><img src={`${process.env.PUBLIC_URL}/assets/image6.png`} alt="Project" /></div>
          <div className="project-info">
            <h3>KCP</h3>
            <p>The King’s College of the Philippines.</p>
            <div className="project-links">
              <a href="home">Live Preview</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
