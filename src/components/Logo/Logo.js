import React from 'react';
import './Logo.css';

const logos = [
  '/assets/logo/1.png',
  '/assets/logo/2.png',
  '/assets/logo/3.png',
  '/assets/logo/4.png',
  '/assets/logo/5.png',
  '/assets/logo/6.png',
  '/assets/logo/7.png',
  '/assets/logo/8.png',
  '/assets/logo/9.png',
  '/assets/logo/10.png',
  '/assets/logo/11.png',
  '/assets/logo/12.png',
  '/assets/logo/13.png',
  '/assets/logo/14.png',
  '/assets/logo/15.png',
  '/assets/logo/16.png',
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
