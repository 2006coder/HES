import React from 'react';
import './MainSectionStyles.css';
import backgroundImage from '../../assets/background-image.jpg';
import VerticalCarousel from '../VerticalCarousel/VerticalCarousel'; // Adjust path as needed

const MainSection = () => {
  return (
    <section id="main" className="main-section">
      <div className="background">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="overlay">
        <div className="text-block">
          <h1>Health for Every Student</h1>
          <h2>Healthcare at our fingertips</h2>
        </div>
      </div>
      <div className="carousel-container">
        <VerticalCarousel />
      </div>
    </section>
  );
};

export default MainSection;