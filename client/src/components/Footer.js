import React from 'react';
import './Footer.css'; // Include the corresponding CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section with Restaurant Logo */}
        <div className="footer-left">
          <img src={require('./icons/restaurant_logo.png')} alt="Restaurant Logo" className="footer-logo" />
        </div>

        {/* Navigation Links (Center Section) */}
        <div className="footer-center">
          <h3><a href="#home">Home</a></h3>
          <h3><a href="#menu">Our Menus</a></h3>
          <h3><a href="#about">About Us</a></h3>
          <h3><a href="https://www.facebook.com/profile.php?id=100070616634664">Facebook</a></h3>
        </div>

        {/* Contact Information (Right Section) */}
        <div className="footer-right">
          <p>(415) 424-7167</p>
          <p>dumplinghcloud3@gmail.com</p>
          <p>1200 Market St, San Francisco, US</p>
        </div>
      </div>

      {/* Bottom Social and Legal Links */}
      <div className="footer-bottom">
        <p className="copyright">© 2011 Dumpling House. All rights reserved.</p>
      </div>

      {/* Illustration Image (Barrel) */}
      <img src={require('./icons/barrel.png')} alt="Barrel Illustration" className="footer-illustration" />
    </footer>
  );
};

export default Footer;
