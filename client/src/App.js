import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import FoodShowcase from './components/FoodShowcase';
import Location from './components/Location';
import DoorDash from './components/DoorDash';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <div>
      <Hero />
      <DoorDash />
      <About />
      <Menu />
      <FoodShowcase />
      <About />
      <Location />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
