// src/components/Menu.js
import React from 'react';
import './Menu.css'; // CSS for styling

const Menu = () => {
  const menuItems = [
    { name: 'Margherita Pizza', price: '$12', description: 'Classic pizza with tomato, mozzarella, and basil.' },
    { name: 'Spaghetti Carbonara', price: '$15', description: 'Traditional Italian pasta with pancetta and egg.' },
  ];

  return (
    <section className="menu-section">
      <h2>Our Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - {item.price}
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
