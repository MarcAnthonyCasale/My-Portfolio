import React from 'react';
import './Logo.css';

const logos = [
 `${process.env.PUBLIC_URL}/assets/Logo/1.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/2.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/3.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/4.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/5.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/6.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/7.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/8.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/9.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/10.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/11.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/12.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/13.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/14.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/15.png`,
 `${process.env.PUBLIC_URL}/assets/Logo/16.png`,
];

function Logo() {
  return (
    <section className="logo-gallery-section">
      <div className="container">
        <h2 className="section-title">My Logo Designs</h2>
        <p className="section-description">A collection of logos I've created for different projects.</p>
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Logo;
