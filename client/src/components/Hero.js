// src/components/Hero.js
import React from 'react';
import './Hero.css'; // CSS for styling
import header_photo from './icons/header.png'; // Import the buuz image

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        src={header_photo} // Path to your image
        alt="Restaurant"
        className="hero-image"
      />
    </div>
  );
};

export default Hero;
