// src/components/WhenAndWhere/WhenAndWhere.jsx

import React from 'react';
import '../WhenAndWhere/WhenAndWhereStyle.css'

const WhenAndWhere = () => {
  return (
    <section id="when-and-where">

      {/* Side menu bar */}
    <div className='side-menu-bar'>
          <h1>MENU</h1>
            <ul className='side-menu-list'>
              <li className='side-menu-item'><a href="/when-and-where" className="btn"> WHEN to go WHERE </a></li>
              <li className='side-menu-item'><a href="/insurance-general" className="btn">Insurance General</a></li>
              <li className='side-menu-item'><a href="/earlham-insurance" className="btn"> Earlham Insurance</a></li>
              <li className='side-menu-item side-menu-item-last'><a href="/coming-soon" className="btn">Tell Us What You Want To Learn!!</a></li>
            </ul>
      </div>

    <div className='main-part'>
    <hr className="divide-line"></hr>
    <h1>Pick Your Situation</h1>
      <div className='three-caregory-menu'>
        <ul className='three-menu'>
          <li><a href="#non-urgent" className="btn">Non-Urgent Symptoms </a></li>
          <li><a href="#urgent" className="btn">Urgent (but not life-threatening) Symptoms </a></li>
          <li><a href="#life-threatening" className="btn">Life-Threatening Symptoms </a></li>
        </ul>
      </div>

      <hr class="divide-line"></hr>

      <div className='body-part'>

      <div id='non-urgent' className='non-urgent'>
        <h1>1. Non-Urgent Symptoms</h1>
        <div className='non-urgent-symptoms'>
          <h2>Example of non-urgent Symptoms:</h2>
          <ul>
            <li>Runny nose</li>
            <li>Mild cough</li>
            <li>Sore throat</li>
            <li>Mild fever </li>
            <li>Mild allergies</li>
            <li>Mild headaches</li>
            <li>Minor cuts, scrapes, or bruises</li>
            <li>Minor sprains</li>
          </ul>
        </div>

        <div className='non-urgent-what-to-do'>
        <h2>What to do:</h2>
          <ul>
            <li>If symptoms are mild and not disrupting daily life, consider waiting 1–2 days to see if they improve.</li>
            <li>Many non-urgent issues can be managed at home or by visiting Earlham Health Services.</li>
            <li>Self-care: Hydration (~3 L or 100 oz of water), nutritious meals, ~8 hours of sleep, and over-the-counter medications.</li>
          </ul>
        </div>

        <div className='non-urgent-reminder'>
        <h2>Reminder:</h2>
          <p>Reevaluate symptoms frequently to catch worsening conditions.
          <span> When in doubt, see a doctor.</span></p>
        </div>
      </div>
{/* <hr class="divide-line"></hr> */}
      <div id='urgent' className='urgent'>
        <h1>2. Urgent (but not life-threatening) Symptoms</h1>
        <div className='urgent-symptoms'>
        <h2>Examples of urgent symptoms:</h2>
          <ul>
            <li>High fever (Over 102°F / 39°C)</li>
            <li>Persistent cough or wheezing</li>
            <li>Persistent vomiting</li>
            <li>Persistent diarrhea </li>
            <li>Urinary Tract Infection (UTI)</li>
            <li>Deep cut (bleeding for over 10 minutes)</li>
            <li>Possible broken bones</li>
            <li>Sprain with large swelling</li>
            <li>Prolonged dizziness</li>
            <li>Confusion</li>
          </ul>
        </div>

        <div className='urgent-what-to-do'>
        <h2>What to do:</h2>
          <ul>
            <li>Assess the severity and seek care as needed.</li>
            <li>Urgent care clinics: Handle moderate injuries/infections (usually cheaper than ER).</li>
            <li>Primary care doctors: Manage worsening but stable conditions.</li>
            <li>Manage symptoms with over-the-counter medication, hydration, rest, and basic first aid until medical help is available.</li>
          </ul>
        </div>
        <div className='urgent-important'>
          <h2>Important:</h2>
          <p>If you experience symptoms like <span>difficulty breathing, uncontrolled bleeding, </span>or <span>sudden weakness, go to the ER</span>.</p>
        </div>
      </div>

      {/* <hr class="divide-line"></hr> */}
      <div id='life-threatening' className='life-threatening'>
        <h1>3. Life-Threatening Symptoms</h1>

        <div className='life-threatening-what-to-do'>
          <h2>What to do:</h2>
          <p>Call 911 or go to the nearest emergency room immediately.</p>
        </div>

        <div className='life-threatening-symptoms'>
          <h2>Examples of life-threatening symptoms:</h2>
          <ul>
            <li>Not breathing or gasping for air</li>
            <li>Losing consciousness</li>
            <li>Head or spine injuries</li>
            <li>Severe burns </li>
            <li>Seizures</li>
            <li>Irregular heartbeat</li>
            <li>Ingesting poisonous substances</li>
            <li>Severe allergic reactions</li>
            <li>Uncontrollable bleeding</li>
          </ul>
        </div>

        <div className='life-threatening-important'>
          <h2>Important:</h2>
          <p>DO NOT HESITATE TO CALL 911</p>
        </div>
      </div>
      </div>

    </div>
    </section>
  );
};

export default WhenAndWhere;
