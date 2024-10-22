import React, { useState } from 'react';
import './Header.css'; // Include your CSS for styling
import restaurantLogo from './icons/logo_notext.png'; // Import your logo image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Restaurant Logo */}
        <div className="logo-container">
          <img src={restaurantLogo} alt="Restaurant Logo" className="logo" />
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          {/* Updated "Order Online" link with DoorDash URL */}
          <a href="https://order.online/business/dumpling-house-13091475" target="_blank" rel="noopener noreferrer">
            Order Online
          </a>
          <a href="#about">About Us</a>
          <a href="#menu">Menu</a>
        </nav>

        {/* Hamburger Menu Icon */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="mobile-menu">
            <a href="#home" onClick={toggleMenu}>Home</a>
            {/* Updated "Order Online" link with DoorDash URL for mobile */}
            <a href="https://order.online/business/dumpling-house-13091475" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              Order Online
            </a>
            <a href="#about" onClick={toggleMenu}>About Us</a>
            <a href="#menu" onClick={toggleMenu}>Menu</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
