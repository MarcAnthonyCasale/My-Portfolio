import React from 'react';
import './RotatingImages.css';


const images = [
  '/assets/image1.jpg',  
  '/assets/image2.jpg',
  '/assets/image3.jpg',
  '/assets/image4.jpg',
  '/assets/image5.jpg',
  '/assets/image5.jpg',
];


function RotatingSolarGallery() {
  return (
    <div className="Images-section">
      <div className="solar-gallery-container">
        <div className="solar-gallery">
          {images.slice(0).map((image, index) => (
            <div
              key={index}
              className="solar-gallery-item"
              style={{
                transform: `rotateY(${index * (360 / (images.length - 1))}deg) translateZ(200px)`
              }}
            >
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RotatingSolarGallery;
