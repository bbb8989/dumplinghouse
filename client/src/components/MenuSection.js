import React, { useEffect, useState } from 'react';
import './MenuSection.css'; // CSS for styling the menu section
import khuushurImage from './icons/khuushur.jpg'; // Import the image for khuushur
import flowerImage from './icons/flower.png'; // Import flower illustration
import rosemaryImage from './icons/rosemary.png'; // Import rosemary illustration
import { Link } from 'react-router-dom'; // For navigation to /menu

const MenuSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = (speed) => ({
    transform: `translateY(${scrollPosition * speed}px)`,
  });

  return (
    <section id="menu" className="menu-section">
      {/* Parallax Illustrations */}
      <img
        src={flowerImage}
        alt="Flower Illustration"
        className="parallax-image flower"
        style={parallaxStyle(0.1)} // Adjust parallax speed
      />
      <img
        src={rosemaryImage}
        alt="Rosemary Illustration"
        className="parallax-image rsmary"
        style={parallaxStyle(-0.1)} // Adjust parallax speed
      />

      <div className="menu-content">
        <img src={khuushurImage} alt="Khuushur" className="menu-image" />
        <div className="menu-text">
          <h2>Discover Our Menu</h2>
          <p>Explore the delicious flavors of our traditional Mongolian dishes.</p>
          <Link to="/menu">
            <button className="view-menu-button">View Menu</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
