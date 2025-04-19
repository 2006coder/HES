import React, { useState, useEffect } from "react";
import "../styles/LocationInput.css";

function LocationInput({ setLocation }) {
  const [manualLocation, setManualLocation] = useState("");
  const [usingCurrentLocation, setUsingCurrentLocation] = useState(false);

  useEffect(() => {
    // trying to get user's current location.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            description: "Current Location"
          });
          setUsingCurrentLocation(true);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    }
  }, [setLocation]);

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (manualLocation.trim()) {
      setLocation({
        description: manualLocation,
        lat: 0,
        lng: 0
      });
      setUsingCurrentLocation(false);
    }
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            description: "Current Location"
          });
          setUsingCurrentLocation(true);
          setManualLocation("");
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    }
  };

  return (
    <div className="location-container">
      {usingCurrentLocation ? (
        <div className="current-location">
          <span>Using your current location</span>
          <button 
            className="change-location-btn"
            onClick={() => setUsingCurrentLocation(false)}
          >
            Change
          </button>
        </div>
      ) : (
        <form className="location-form" onSubmit={handleLocationSubmit}>
          <div className="location-input-group">
            <input
              type="text"
              placeholder="Enter your location"
              value={manualLocation}
              onChange={(e) => setManualLocation(e.target.value)}
              className="location-input"
            />
            <button type="submit" className="location-submit-btn">
              Set
            </button>
          </div>
          <button 
            type="button" 
            className="current-location-btn"
            onClick={handleUseCurrentLocation}
          >
            Use Current Location
          </button>
        </form>
      )}
    </div>
  );
}

export default LocationInput;