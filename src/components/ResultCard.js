/* 
Update note: change fake place holder of "open now" into actual function to check the open state using "hours" from the database.
We use the exported function from timeUtils.js in Utils folder to check if the facilities are open or not.
Also we create a severity indicator and create a new script to sort the severity.
*/
import React from "react";
import "../styles/ResultCard.css";
import { isCurrentlyOpen } from "../utils/timeUtils.js";

function ResultCard({ facility }) {
  const {
    name,
    address,
    phoneNumber,
    specialties,
    rating,
    distance,
    hours
  } = facility;

  // Check if the facility is open now or not ;)
  const openNow = isCurrentlyOpen(hours);

  return (
    <div className="result-card">
      <div className={`severity-indicator severity-${facility.severity || 5}`}>
        {facility.severity === 1 ? "Emergency" : 
         facility.severity === 2 ? "Urgent" : 
         facility.severity === 3 ? "Standard" : 
         facility.severity === 4 ? "Routine" : 
         "General"
         }
      </div>
      <div className="facility-header">
        <h3>{name}</h3>
        <div className="rating">
          <span className="stars">{'★'.repeat(Math.round(rating))}</span>
          <span className="rating-value">{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="facility-details">
        <p className="address">{address}</p>
        <p className="phone">{phoneNumber}</p>
        <p className="distance">{distance ? `${distance.toFixed(1)} miles away` : ''}</p>
        <div className="status">
          {openNow ? (
            <span className="open">Open Now</span>
          ) : (
            <span className="closed">Closed</span>
          )}
        </div>
        <div className="hours-info">
          {typeof hours === 'string' ? (
            <p>{hours}</p>
          ) : (
            <details>
              <summary>Hours</summary>
              <ul className="hours-list">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <li key={day}>
                    <span className="day">{day}:</span> {hours[day] || 'Closed'}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>
      
      <div className="specialties">
        {specialties.map((specialty, index) => (
          <span key={index} className="specialty-tag">
            {specialty}
          </span>
        ))}
      </div>
      
      <div className="action-buttons">
        <a // throw to google maps. Convert address to a link (utf 8) before throwing to goole maps :)
          href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="directions-btn"
        >
          Get Directions
        </a>
        <a 
          href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
          className="call-btn"
        >
          Call
        </a>
      </div>
    </div>
  );
}

export default ResultCard;
