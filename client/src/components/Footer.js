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
          <h3>Home</h3>
          <h3>Our Menus</h3>
          <h3>About Us</h3>
        </div>

        {/* Contact Information (Right Section) */}
        <div className="footer-right">
          <p>(343) 454-4364</p>
          <p>dumplinghcloud3@gmail.com</p>
          <p>1200 Market St, San Francisco, US</p>
        </div>
      </div>

      {/* Bottom Social and Legal Links */}
      <div className="footer-bottom">
        <div className="social-links">
          <p>Facebook</p>
        </div>
        <div className="legal-links">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <p className="copyright">© 2012 Dumpling House. All rights reserved.</p>
      </div>

      {/* Illustration Image (Barrel) */}
      <img src={require('./icons/barrel.png')} alt="Barrel Illustration" className="footer-illustration" />
    </footer>
  );
};

export default Footer;
