import React, { useEffect, useState } from 'react';
import './DoorDash.css'; // CSS for styling
import flower from './icons/flower.png'; // Import the flower image
import greenOnion from './icons/green_onion.png'; // Import the green-onion image

const DoorDash = () => {
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

  // Parallax effect: move the flower and green onion slightly up as you scroll down
  const flowerStyle = {
    transform: `translateY(${scrollPosition * -0.1}px)`, // Move slightly upwards with scrolling
    transition: 'transform 0.5s ease-out', // Smooth transition
  };

  const greenOnionStyle = {
    transform: `translateY(${scrollPosition * -0.1}px)`, // Move slightly upwards with scrolling
    transition: 'transform 0.5s ease-out', // Smooth transition
  };

  return (
    <section className="doordash-section">
      <h2>Order Online</h2>
      <a href="https://order.online/business/dumpling-house-13091475" target="_blank" rel="noopener noreferrer">
        <button>Order for Pickup or Delivery</button>
      </a>

      {/* Flower Illustration with Scroll Effect on the Right */}
      <img src={flower} alt="Flower Illustration" className="flower-illustration" style={flowerStyle} />

      {/* Green Onion Illustration with Scroll Effect on the Left */}
      <img src={greenOnion} alt="Green Onion Illustration" className="green-onion-illustration" style={greenOnionStyle} />
    </section>
  );
};

export default DoorDash;
