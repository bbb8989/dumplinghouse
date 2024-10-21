import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import FoodShowcase from './components/FoodShowcase';
import Location from './components/Location';
import DoorDash from './components/DoorDash';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Header from './components/Header'; // Import Header

function App() {
  return (
    <div>
      <Header /> {/* Add Header here */}
      <Hero />
      <DoorDash />
      <About />
      <Location />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
