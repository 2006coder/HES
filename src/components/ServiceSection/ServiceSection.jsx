import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './ServiceSectionStyles.css';
import searchEngineImg from '../../assets/healthcare-search.png';
import insuranceImg from '../../assets/insurance-tracking.png';
import educationImg from '../../assets/educational-services.png';
import comingSoonImg from '../../assets/coming-soon.png';

const ServicesSection = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleExploreClick = (e, path) => {
    e.preventDefault();

    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate('/login', { state: { from: path } });
    }
  };

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <img src={searchEngineImg} alt="Healthcare Search Engine" />
          <h3>Search Local Care Providers</h3>
          <p>Find and connect with healthcare providers near you.</p>
          <button
            className={`btn ${!isAuthenticated ? 'btn-locked' : ''}`}
            onClick={(e) => handleExploreClick(e, '/healthcare-search')}
          >
            {isAuthenticated ? 'Explore Now' : 'Login to Explore'}
          </button>
        </div>
        <div className="service-card">
          <img src={insuranceImg} alt="Insurance Tracking" />
          <h3>Track and Estimate Your Insurance and Health Bills</h3>
          <p>Manage your insurance and health expenses effectively.</p>
          <button
            className={`btn ${!isAuthenticated ? 'btn-locked' : ''}`}
            onClick={(e) => handleExploreClick(e, '/coming-soon')}
          >
            {isAuthenticated ? 'Explore Now' : 'Login to Explore'}
          </button>
        </div>
        <div className="service-card">
          <img src={educationImg} alt="Educational Services" />
          <h3>Learn About How All Works</h3>
          <p>Understand the processes and services we offer.</p>
          <button
            className={`btn ${!isAuthenticated ? 'btn-locked' : ''}`}
            onClick={(e) => handleExploreClick(e, '/how-it-works')}
          >
            {isAuthenticated ? 'Explore Now' : 'Login to Explore'}
          </button>
        </div>
        <div className="service-card">
          <img src={comingSoonImg} alt="Coming Soon" />
          <h3>See What's Coming Soon</h3>
          <p>Discover upcoming features and services.</p>
          <button
            className={`btn ${!isAuthenticated ? 'btn-locked' : ''}`}
            onClick={(e) => handleExploreClick(e, '/coming-soon')}
          >
            {isAuthenticated ? 'Explore Now' : 'Login to Explore'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;