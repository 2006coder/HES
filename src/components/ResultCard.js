import React from "react";
import "../styles/ResultCard.css";

function ResultCard({ facility }) {
  const {
    name,
    address,
    phoneNumber,
    specialties,
    rating,
    distance,
    openNow
  } = facility;

  return (
    <div className="result-card">
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