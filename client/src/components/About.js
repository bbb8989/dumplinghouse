import React, { useState, useEffect } from 'react';
import './About.css'; // CSS for styling
import plate from './icons/plate.jpg'; // Import the Khuushur image
import clam from './icons/clam.png'; // Import the Clam image
import berry from './icons/berry.png'; // Import the Berry image

const About = () => {
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

  // Parallax effect styles for clam and berry
  const clamStyle = {
    transform: `translateY(${scrollPosition * -0.2}px)`,
    transition: 'transform 1s ease-out', // Smooth scrolling transition with 1s duration
  };

  const berryStyle = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
    transition: 'transform 1s ease-out', // Smooth scrolling transition with 1s duration
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="text-container">
          {/* Title and Lines */}
          <div className="title-lines">
            <h2>About Us</h2>
            <div className="about-lines">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          {/* Paragraph */}
          <p>
            Experience the Bay Area’s most authentic Mongolian restaurant at our new location on 1200 Market St. 
            After 12 successful years in Richmond, we're excited to bring our traditional flavors to the heart of the city. 
            Join us for a taste of Mongolia today!
          </p>
        </div>
        <div className="image-container">
          <img src={plate} alt="Plate" />
        </div>
      </div>

      {/* Clam and Berry Illustrations with Scroll Effect */}
      <img
        src={clam}
        alt="Clam Illustration"
        className="clam-illustration"
        style={clamStyle} // Apply the parallax scroll effect for clam
      />
      <img
        src={berry}
        alt="Berry Illustration"
        className="berry-illustration"
        style={berryStyle} // Apply the parallax scroll effect for berry
      />
    </section>
  );
};

export default About;
