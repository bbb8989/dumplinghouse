// src/components/Hero.js
import React from 'react';
import './Hero.css'; // CSS for styling
import buuz from './icons/buuz.jpg'; // Import the buuz image

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Dumpling House</h1>
        <h1>Mongolian Cuisine</h1>
      </div>
      <img
        src={buuz} // Path to your image
        alt="Restaurant"
        className="hero-image"
      />
    </div>
  );
};

export default Hero;
