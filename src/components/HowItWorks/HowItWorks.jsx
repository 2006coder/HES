// src/components/HowItWorks/HowItWorks.jsx
import React from 'react';
import '../HowItWorks/HowItWorksStyle.css'; // スタイルは同じものを使う
import stepOneImg from '../../assets/healthcare-search.png';
import stepTwoImg from '../../assets/insurance-tracking.png';
import ecLogoImg from '../../assets/earlhamCollege-logo.png';
import feedbackImg from '../../assets/feedback.png';
// import { FaCloud, FaHospital } from "react-icons/fa";
// import { FaHouseMedicalCircleExclamation } from "react-icons/fa6";
// import { BsQuestionCircle } from "react-icons/bs";


const HowItWorks = () => {
  return (
      <section id="how-it-works" className="subcategory-section">
           <div className='side-menu-bar'>
            <h1>MENU</h1>
              <ul className='side-menu-list'>
                <li className='side-menu-item'><a href="/when-and-where" className="btn"> WHEN to go </a></li>
                <li className='side-menu-item'><a href="/coming-soon" className="btn">Insurance General</a></li>
                <li className='side-menu-item'><a href="/coming-soon" className="btn"> Earlham Insurance</a></li>
                <li className='side-menu-item side-menu-item-last'><a href="/coming-soon" className="btn">Tell Us What You Want To Learn!!</a></li>
              </ul>
          </div>
              <h2>Learn about how HES works.</h2>
              <p className="page-abstract">Understanding the <a href="/coming-soon" className="btn">WHAT</a>(what’s going on with my health?), <a href="/coming-soon" className="btn">WHEN</a> (when is it necessary to seek medical help?), <a href="/coming-soon" className="btn">WHERE</a> (where is the best place to go for care?), and <a href="/coming-soon" className="btn">HOW</a> (how can I access the care I need?) when dealing with an acute illness or injury can help you get timely treatment, avoid confusion in the healthcare system, and prevent unnecessary costs during your college years.</p>
              <div className="category-container">
                  <div className="service-card">
                      <img src={stepOneImg} alt="Step One" />
                      <h3>Understand when to go to where</h3>
                      <p>Not sure what to do when you’re feeling off? We’ll help you figure out when to wait, when to visit health services, and when to head to urgent care or the ER—so you can feel confident in your next step.</p>
                      <a href="/when-and-where" className="btn">
                          Read more
                      </a>
                  </div>
                  <div className="service-card">
                      <img src={stepTwoImg} alt="Step Two" />
                      <h3>Insurance General</h3>
                      <p>Confused by health insurance? You’re not alone. We’ll break it down simply so you can understand how it works, why it matters, and how it protects you.</p>
                      <a href="/insurance-general" className="btn">
                          Read more
                      </a>
                  </div>
                  <div className="service-card">
                      <img src={ecLogoImg} alt="Step Three" />
                      <h3>Earlham Insurance</h3>
                      <p>Wondering what’s actually covered by your Earlham insurance? We’ve got the answers—so you can make the most of your plan without the guesswork.</p>
                      <a href="/earlham-insurance" className="btn">
                          Read more
                      </a>
                  </div>
                  <div className="service-card">
                      <img src={feedbackImg} alt="Step Three" />
                      <h3>Tell Us What You Want to Learn</h3>
                      <p>If there’s something else you’re curious about, just let us know—we value your feedback and want to make this guide as helpful as possible for you.</p>
                      <a href="/coming-soon" className="btn">
                          Read more
                      </a>
                  </div>
              </div>
          </section>
  );
};

export default HowItWorks;
