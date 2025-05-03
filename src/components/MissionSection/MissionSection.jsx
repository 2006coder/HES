import React from 'react';
import './MissionSectionStyles.css';
import missionImage from '../../assets/mission-image.jpg'; // Adjust path as needed

const MissionSection = () => {
  return (
    <section id="mission" className="mission-section">
      <h2>Our Mission</h2>
      <div className="mission-container">
        <div className="mission-text">
          <p>
            Health for Every Student (HES) is dedicated to empowering college students in the U.S. with the tools and knowledge to navigate the complexities of the American healthcare system. Our platform provides personalized resources, including an insurance tracker and simulator, a community-based healthcare provider search engine, and interactive educational content. By focusing on transparency, accessibility, and tailored support, HES aims to simplify healthcare management and promote well-informed, proactive healthcare decisions among students.
          </p>
        </div>
        <div className="mission-image">
          <img src={missionImage} alt="Our Mission" />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;