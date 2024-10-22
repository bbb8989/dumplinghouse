// src/components/MenuPage.js
import React, { useEffect, useState } from 'react';
import './Menupage.css'; // Import the CSS for styling
import onion from './icons/onion.png'; // Import images
import grapefruit from './icons/grapefruit.png';
import rosemary from './icons/rosemary.png';
import green_onion from './icons/green_onion.png';
import clam from './icons/clam.png';
import berry from './icons/berry.png';

// Entree Photos
import khuushur from './food_photos/khuushur.jpg';
import naadam_khuushur from './food_photos/naadam_khuushur.avif'; 
import tsuivan from './food_photos/tsuivan.avif'; 
import goulash from './food_photos/goulash.avif'; 
import cutlet from './food_photos/cutlet.avif'; 
import huchmal from './food_photos/huchmal.avif'; 
import piroshki from './food_photos/piroshki.avif'; 
import liver from './food_photos/liver.avif'; 
import chicken from './food_photos/chicken.avif'; 
import big_momo from './food_photos/big_momo.avif'; 
import plov from './food_photos/plov.avif'; 
import small_dumpling from './food_photos/small_dumpling.avif'; 
import buuz from './food_photos/buuz.avif';

// Soup Photos
import lapsha from './food_photos/lapsha.avif'; 
import vegebeef from './food_photos/vegebeef.avif'; 
import korean_ramen from './food_photos/korean_ramen.avif'; 
import pork_belly_ramen from './food_photos/pork_belly_ramen.avif'; 
import beef_soup_dumplings from './food_photos/beef_soup_dumplings.avif'; 
import huitsaa from './food_photos/huitsaa.avif';

const MenuPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax effect for the background images
  const parallaxStyle = (speed) => ({
    transform: `translateY(${scrollPosition * speed}px)`,
    transition: 'transform 0.5s ease-out',
  });

  // Menu Sections
  const entrees = [
    { name: 'Naadam Khuushuur', description: 'A special Mongolian festival fried pastry filled with seasoned angus beef and onions.', price: '$14.99', image: naadam_khuushur },
    { name: 'Stir Fried Noodles (Tsuivan)', description: 'Choose beef, chicken, or vegetable. Mongolian stir-fried noodles with tender meat, fresh vegetables, and homemade noodles for a rich and savory flavor.', price: '$15.99', image: tsuivan },
    { name: 'Beef Goulash', description: 'A hearty stew made with tender beef chunks served with mashed potatoes, rice, and salad.', price: '$15.99', image: goulash },
    { name: 'Beef Cutlet with Egg', description: 'A savory ground beef cutlet served with salad, rice, and mashed potatoes.', price: '$15.99', image: cutlet },
    { name: 'Beef Casserole (Huchmal)', description: 'A comforting dish featuring layers of mashed potatoes, seasoned ground beef, and onions.', price: '$15.99', image: huchmal },
    { name: 'Piroshki (3 pcs)', description: 'Comes with three pieces. Choose lamb, beef, or vegetable.', price: '$9.99', image: piroshki },
    { name: 'Beef Liver', description: 'Tender Mongolian beef liver served with creamed mashed potatoes, fresh salad, and rice for a satisfying meal.', price: '$16.99', image: liver },
    { name: 'Chicken Teriyaki Bowl', description: 'Comes with rice and salad.', price: '$10.99', image: chicken },
    { name: 'Big Momo (6 piece)', description: 'Six pieces of steamed large delicious beef momos.', price: '$14.99', image: big_momo },
    { name: 'Beef Plov', description: 'Beef Plov is a savory Central Asian rice dish with beef, carrots, onions, and spices, all cooked together for a rich, flavorful meal.', price: '$13.99', image: plov },
    { name: 'Small Dumplings (20 Pieces)', description: 'Choose lamb, beef, chicken, or pork. Comes with 20 pieces.', price: '$15.99', image: small_dumpling },
    { name: 'Steamed Dumplings (Buuz)', description: 'Choose lamb, beef, or chicken. Traditional Mongolian Dumplings filled with seasoned protein and onions steamed to perfection. (10 pcs)', price: '$14.99', image: buuz },
    { name: 'Deep Fried Meat Pie (Khuushuur)', description: 'Choose angus beef or chicken. Fried Mongolian meat pies with a crispy golden exterior and a savory filling of seasoned meat and onions.', price: '$14.99', image: khuushur },
  ];

  const soups = [
    { name: 'Lapsha Soup', description: 'A comforting soup with handmade noodles, tender beef, and fresh vegetables, simmered in a savory broth for a warming meal.', price: '$15.99', image: lapsha },
    { name: 'Vegetable Beef Soup', description: 'A hearty and nutritous soup containing tender beef with a variety of fresh vegetables, creating a rich and flavorful broth.', price: '$14.99', image: vegebeef },
    { name: 'Korean Style Ramen', description: 'Choose beef, chicken, seafood, pork, or vegetable.', price: '$10.99', image: korean_ramen },
    { name: 'Spicy Pork Belly Ramen', description: 'A spicy Japanese noodle soup featuring tender pork belly and a delicious broth topped with an egg.', price: '$11.99', image: pork_belly_ramen },
    { name: 'Beef Soup with Dumplings', description: 'A savory soup featuring tender beef, vegetables, and small beef dumplings, offering a blend of comforting textures and flavors.', price: '$15.99', image: beef_soup_dumplings },
    { name: 'Huitsaa Soup', description: 'Flavorful soup featuring cabbage, green onions, fried potatoes, carrots, beef meatballs, and a side steamed buns perfect for dipping.', price: '$15.99', image: huitsaa },
  ];

  return (
    <section className="menu-page">
      {/* First set of Parallax Background Images */}
      <img src={onion} alt="Onion" className="parallax-image onion" style={parallaxStyle(-0.2)} />
      <img src={grapefruit} alt="Grapefruit" className="parallax-image grapefruit" style={parallaxStyle(-0.1)} />
      <img src={rosemary} alt="Rosemary" className="parallax-image rosemary" style={parallaxStyle(0.1)} />
      <img src={green_onion} alt="Green Onion" className="parallax-image green-onion" style={parallaxStyle(0.1)} />
      <img src={clam} alt="Clam" className="parallax-image clam" style={parallaxStyle(-0.2)} />
      <img src={berry} alt="Berry" className="parallax-image berry" style={parallaxStyle(-0.1)} />

      {/* Second set of Parallax Background Images positioned at the lower part */}
      <img src={onion} alt="Onion" className="parallax-image onion-lower" style={parallaxStyle(-0.2)} />
      <img src={grapefruit} alt="Grapefruit" className="parallax-image grapefruit-lower" style={parallaxStyle(-0.1)} />
      <img src={rosemary} alt="Rosemary" className="parallax-image rosemary-lower" style={parallaxStyle(0.1)} />
      <img src={green_onion} alt="Green Onion" className="parallax-image green-onion-lower" style={parallaxStyle(0.1)} />
      <img src={clam} alt="Clam" className="parallax-image clam-lower" style={parallaxStyle(-0.2)} />
      <img src={berry} alt="Berry" className="parallax-image berry-lower" style={parallaxStyle(-0.1)} />

      <h2 className="menu-title">Our Menu</h2>

      {/* Entrees Section */}
      <div className="menu-section">
        <h3 className="menu-section-title">Entrees</h3>
        <div className="menu-items">
          {entrees.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <div className="menu-item-text">
                <h4>{item.name} - <span className="menu-price">{item.price}</span></h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soups Section */}
      <div className="menu-section">
        <h3 className="menu-section-title">Soups</h3>
        <div className="menu-items">
          {soups.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <div className="menu-item-text">
                <h4>{item.name} - <span className="menu-price">{item.price}</span></h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default MenuPage;
