import React, { useEffect } from 'react';
import './About.css';
import ProgressBar from 'progressbar.js';

const About = () => {
  useEffect(() => {
    const htmlProgress = new ProgressBar.Circle('.html-progress', {
      color: '#cf1f1f',
      strokeWidth: 4,
      trailWidth: 4,
      trailColor: '#2e3035',
      duration: 1400,
      easing: 'easeInOut',
    });
    htmlProgress.animate(0.9);

    const cssProgress = new ProgressBar.Circle('.css-progress', {
      color: '#cf1f1f',
      strokeWidth: 4,
      trailWidth: 4,
      trailColor: '#2e3035',
      duration: 1400,
      easing: 'easeInOut',
    });
    cssProgress.animate(0.85);

    const phpProgress = new ProgressBar.Circle('.php-progress', {
      color: '#cf1f1f',
      strokeWidth: 4,
      trailWidth: 4,
      trailColor: '#2e3035',
      duration: 1400,
      easing: 'easeInOut',
    });
    phpProgress.animate(0.8);

    const jqueryProgress = new ProgressBar.Circle('.jquery-progress', {
      color: '#cf1f1f',
      strokeWidth: 4,
      trailWidth: 4,
      trailColor: '#2e3035',
      duration: 1400,
      easing: 'easeInOut',
    });
    jqueryProgress.animate(0.75);

    return () => {
      htmlProgress.destroy();
      cssProgress.destroy();
      phpProgress.destroy();
      jqueryProgress.destroy();
    };
  }, []);

  return (
    <section id="section-about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>About Me</h2>
            <div className="space-border"></div>
          </div>
          <div className="col-md-12 offset-md-2 text-center text-container">
            <p>
              I am a full-stack web developer with over 5 years of experience building dynamic and responsive web applications. I have worked with a variety of technologies including HTML, CSS, JavaScript, PHP, and jQuery, focusing on creating high-performance user experiences. I'm passionate about writing clean, maintainable code, and continuously enhancing my skills to deliver innovative solutions.
            </p>
          </div>


          <div className="progressbars-row">
            <div className="progressbar-col">
              <div className="progressbar html-progress">
                <canvas width="200" height="30"></canvas>
                <div className="progress-text">90.0%</div>
              </div>
              <h4>HTML</h4>
            </div>
            <div className="progressbar-col">
              <div className="progressbar css-progress">
                <canvas width="200" height="30"></canvas>
                <div className="progress-text">85.0%</div>
              </div>
              <h4>CSS</h4>
            </div>
            <div className="progressbar-col">
              <div className="progressbar php-progress">
                <canvas width="200" height="30"></canvas>
                <div className="progress-text">80.0%</div>
              </div>
              <h4>PHP</h4>
            </div>
            <div className="progressbar-col">
              <div className="progressbar jquery-progress">
                <canvas width="200" height="30"></canvas>
                <div className="progress-text">75.0%</div>
              </div>
              <h4>jQuery</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
