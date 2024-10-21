// src/components/DoorDash.js
import React from 'react';
import './DoorDash.css'; // CSS for styling

const DoorDash = () => {
  return (
    <section className="doordash-section">
      <h2>Order Online</h2>
      <a href="https://www.doordash.com/store/your-store-link" target="_blank" rel="noopener noreferrer">
        <button>Order for Pickup or Delivery</button>
      </a>
    </section>
  );
};

export default DoorDash;
