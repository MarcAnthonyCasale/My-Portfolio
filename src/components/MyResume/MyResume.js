import React from "react";
import "./MyResume.css";

const MyResume = () => {
  return (
    <section id="resume">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="resume-header">My Resume</h2>
            <div className="space-border"></div>
          </div>
        </div>
        <div className="row exp">
          {/* Experience Section 1 */}
          <div className="col-md-6">
            <h3 className="section-title">Work Experiences (Part 1)</h3>
            <ul className="timeline">
              <li className="timeline-item">
                <div className="number">1</div>
                <h3 className="timeline-date">01/2019 - 02/2021</h3>
                <p className="timeline-details">
                  <span className="position-title">Back-End Developer/Front-End Developer</span>
                  <span className="company-name">Pylon International Trading Corporation</span>
                  <span className="description">
                    IT Company supporting hardware and software installations for Local Government Units and private organizations.
                    <br />
                    Contact: Mark Granada Jalando-on
                  </span>
                </p>
              </li>
              <li className="timeline-item">
              <div className="number">2</div>
                <h3 className="timeline-date">03/2021 - 12/2022</h3>
                <p className="timeline-details">
                  <span className="position-title">Full Stack Developer</span>
                  <span className="company-name">Lilypad Digital Solutions</span>
                  <span className="description">
                    A team of developers, strategists, and storytellers in Metro Manila, Philippines.
                    <br />
                    Contact: Charles Buking
                  </span>
                </p>
              </li>
              <li className="timeline-item">
              <div className="number">3</div>
                <h3 className="timeline-date">09/2022 - 12/2022</h3>
                <p className="timeline-details">
                  <span className="position-title">Mid-Level Website Developer</span>
                  <span className="company-name">Kode Across</span>
                  <span className="description">
                    IT Company addressing employment issues by offering opportunities based on character and excellence.
                    <br />
                    Contact: Rosselle Mabunga
                  </span>
                </p>
              </li>
             
            </ul>
          </div>
          {/* Experience Section 2 */}
          <div className="col-md-6">
            <h3 className="section-title">Work Experiences (Part 2)</h3>
            <ul className="timeline">
              <li className="timeline-item">
              <div className="number">4</div>
              <h3 className="timeline-date">02/2023 - 04/2023</h3>
                <p className="timeline-details">
                  <span className="position-title">Full Stack Web Developer</span>
                  <span className="company-name">Payoneer</span>
                  <span className="description">
                    The commerce technology company powering payments for the new global economy.
                  </span>
                </p>
              </li>
              <li className="timeline-item">
              <div className="number">5</div>
              <h3 className="timeline-date">06/2022 - 02/2023</h3>
                <p className="timeline-details">
                  <span className="position-title">Full Stack Web Developer</span>
                  <span className="company-name">Google Developer Group Manila</span>
                  <span className="description">
                    An independent group with no official links to Google Corporation.
                    <br />
                    Contact: Nina Garcia
                  </span>
                </p>
              </li>
              <li className="timeline-item">
              <div className="number">6</div>
              <h3 className="timeline-date">05/2023 - 08/2023</h3>
                <p className="timeline-details">
                  <span className="position-title">Laravel Full Stack Web Developer</span>
                  <span className="company-name">MDM SYSTEMS, INC.</span>
                  <span className="description">
                    Focused on Laravel-based application development for enterprise-level clients.
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyResume;
