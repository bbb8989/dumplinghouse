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
          <a href="#about">About Us</a>
          <a href="#menu">Menu</a>
          <a href="#order">Order Online</a>
          <a href="#contact">Contact</a>
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
            <a href="#about" onClick={toggleMenu}>About Us</a>
            <a href="#menu" onClick={toggleMenu}>Menu</a>
            <a href="#order" onClick={toggleMenu}>Order Online</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
