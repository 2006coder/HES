import React from "react";
import { isCurrentlyOpen } from "../../utils/timeUtils";
import "./ResultCard.css";

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

  // Check if the facility is open now
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
      </div>
      <div className="rating-block">
        <span className="stars">{'★'.repeat(Math.round(rating))}</span>
        <span className="rating-value">{rating.toFixed(1)}</span>
      </div>
      <div className="facility-details">
        <CollapsibleAddress address={address} />
        <p className="phone">{phoneNumber}</p>
        {distance !== undefined ? (
          <p className="distance">{distance.toFixed(1)} miles away</p>
        ) : (
          <p className="distance no-distance">Distance unavailable</p>
        )}
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
        <a
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

function CollapsibleAddress({ address }) {
  const [open, setOpen] = React.useState(false);
  return (
    <details className="address-details" open={open} onToggle={e => setOpen(e.target.open)}>
      <summary className="address-summary">Address</summary>
      <div className="address-content">{address}</div>
    </details>
  );
}

export default ResultCard;