import React, { useEffect, useState } from 'react';
import './Location.css';
import grapefruit from './icons/grapefruit.png';
import rosemary from './icons/rosemary.png'; // Import the rosemary image

const Location = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Only move vertically (Y-axis) based on scroll position for grapefruit
  const grapefruitStyle = {
    transform: `translateY(${scrollPosition * -0.15}px)`, // Only vertical movement
    transition: 'transform 1s ease-out', // Smooth scrolling transition
  };

  // Only move vertically (Y-axis) based on scroll position for rosemary
  const rosemaryStyle = {
    transform: `translateY(${scrollPosition * 0.1}px)`, // Only vertical movement (slightly different speed)
    transition: 'transform 1s ease-out', // Smooth scrolling transition
  };

  return (
    <section className="location-section">
      <h2>Visit Us</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4847231000485!2d-122.4201623099422!3d37.778678639709376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809b79c60109%3A0xd1e5081a8c1fbd5b!2s1200%20Market%20St%2C%20San%20Francisco%2C%20CA%2094102!5e0!3m2!1sen!2sus!4v1729466139962!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Restaurant Location"
        ></iframe>
      </div>
      <p>1200 Market St, San Francisco, CA</p>
      <p>Open Hours: 11:00 AM - 8:00 PM Mon-Sat</p>

      {/* Grapefruit Illustration */}
      <img
        src={grapefruit}
        alt="Grapefruit Illustration"
        className="grapefruit"
        style={grapefruitStyle} // Apply the vertical scroll effect
      />

      {/* Rosemary Illustration */}
      <img
        src={rosemary}
        alt="Rosemary Illustration"
        className="rosemary"
        style={rosemaryStyle} // Apply the vertical scroll effect for rosemary
      />
    </section>
  );
};

export default Location;
