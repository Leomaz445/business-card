import React from 'react';
import Info from '../components/Info';
import About from '../components/About';
import KeyProjects from '../components/KeyProjects';
import Footer from '../components/Footer';
import '../styles/PersonCard.css'; 

function PersonCard() {
  return (
    <div className="main-container">
      <Info />
      <About />
      <KeyProjects />
      <Footer />
    </div>
  );
}

export default PersonCard;