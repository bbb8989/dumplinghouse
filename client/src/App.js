import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Location from './components/Location';
import DoorDash from './components/DoorDash';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import MenuPage from './components/Menupage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <DoorDash />
            <About />
            <MenuSection />
            <Location />
            <Testimonials />
            <Footer />
          </>
        } />
        <Route path="/menu" element={<MenuPage />} /> {/* Full menu page */}
      </Routes>
    </Router>
  );
}

export default App;