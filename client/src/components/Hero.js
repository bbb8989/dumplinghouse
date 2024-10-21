// src/components/Hero.js
import React from 'react';
import './Hero.css'; // CSS for styling

const Hero = () => {
  return (
    <div className="hero">
      <img
        src="/images/restaurant-banner.jpg" // Path to your image
        alt="Restaurant"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>Our Restaurant</h1>
      </div>
    </div>
  );
};

export default Hero;
