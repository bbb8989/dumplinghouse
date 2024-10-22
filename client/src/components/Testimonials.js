import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import onion from './icons/onion.png'; // Assuming you have the onion image here

const testimonialsData = [
  {
    quote: 'It is the "must order" place if you want to experience an authentic mongolian cuisine!',
    author: "Khosbayar B."
  },
  {
    quote: "Always our go to spot for good food, service and price. If you have not yet tried this location please go. Parking is hard to find and they don't serve alcohol beverages. But who needs it.",
    author: "Mary R."
  },
  {
    quote: "Dumplings are prepared fresh to order. About 20 min wait but well worth it. Best vegetable and beef dumplings ever had.",
    author: "David S."
  },
  {
    quote: "I was on my way home and in the area and I heard about this place, wow, I got the beef fried dumplings and they were so good! The service was great as well, very welcoming! The vibe was very chill inside.",
    author: "Rox P."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideProp, setSlideProp] = useState('slide-in-right'); // Manages slide class
  const [scrollPosition, setScrollPosition] = useState(0); // Scroll position for onion effect

  // Automatically move to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger slide-out
      setSlideProp('slide-out-left');
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
        // Trigger slide-in after switching the content
        setSlideProp('slide-in-right');
      }, 500); // Delay to allow slide-out before switching
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Scroll event to track the vertical movement
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only move vertically (Y-axis) based on scroll position
  const onionStyle = {
    transform: `translateY(${scrollPosition * 0.15}px)`, // Only vertical movement
    transition: 'transform 1s ease-out', // Smooth scrolling transition
  };

  return (
    <section className="testimonials">
      <div className="testimonial-container">
        <h2 className="testimonial-title">Testimonials</h2>
        <div className={slideProp}>
          <p className="testimonial-quote">“{testimonialsData[currentIndex].quote}”</p>
          <p className="testimonial-author">- {testimonialsData[currentIndex].author}</p>
        </div>
      </div>
        {/* Onion Illustration */}
        <img
          src={onion}
          alt="Onion Illustration"
          className="onion-illustration"
          style={onionStyle} // Apply the vertical scroll effect
        />
    </section>
  );
};

export default Testimonials;
