// src/components/FoodShowcase.js
import React from 'react';
import './FoodShowcase.css'; // CSS for styling

const foodImages = [
  { src: '/images/dish1.jpg', alt: 'Dish 1' },
  { src: '/images/dish2.jpg', alt: 'Dish 2' },
  { src: '/images/dish3.jpg', alt: 'Dish 3' },
];

const FoodShowcase = () => {
  return (
    <section className="food-showcase">
      <h2>Our Dishes</h2>
      <div className="food-grid">
        {foodImages.map((food, index) => (
          <div key={index} className="food-item">
            <img src={food.src} alt={food.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodShowcase;
