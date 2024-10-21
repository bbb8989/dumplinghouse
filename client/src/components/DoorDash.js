// src/components/DoorDash.js
import React from 'react';
import './DoorDash.css'; // CSS for styling

const DoorDash = () => {
  return (
    <section className="doordash-section">
      <h2>Order Online</h2>
      <a href="https://order.online/business/dumpling-house-13091475" target="_blank" rel="noopener noreferrer">
        <button>Order for Pickup or Delivery</button>
      </a>
    </section>
  );
};

export default DoorDash;
