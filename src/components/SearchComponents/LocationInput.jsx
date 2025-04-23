import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';
import "./LocationInput.css";

function LocationInput({ setLocation }) {
  const [manualLocation, setManualLocation] = useState("");
  const [displayedLocation, setDisplayedLocation] = useState("");
  const [isInputMode, setIsInputMode] = useState(true);
  const [usingCurrentLocation, setUsingCurrentLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    tryGetCurrentLocation();
  }, []);

  const tryGetCurrentLocation = () => {
    setLocationError(null);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            description: "Current Location"
          });
          setUsingCurrentLocation(true);
          setIsInputMode(false);
        },
        (error) => {
          handleGeolocationError(error);
        },
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 300000
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser");
    }
  };

  const handleGeolocationError = (error) => {
    console.error("Error getting current location:", error);
    
    let errorMessage;
    switch(error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "Location access was denied. Please enable location services or enter your location manually.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "Location information is unavailable. Please try again or enter your location manually.";
        break;
      case error.TIMEOUT:
        errorMessage = "Location request timed out. Please try again or enter your location manually.";
        break;
      default:
        errorMessage = "An unknown error occurred. Please enter your location manually.";
    }
    
    setLocationError(errorMessage);
    setUsingCurrentLocation(false);
    setIsInputMode(true);
  };

  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
      );
      
      if (!response.ok) {
        throw new Error('Geocoding failed');
      }
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        return {
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
          description: address
        };
      } else {
        throw new Error('Location not found');
      }
    } catch (error) {
      console.error('Geocoding error:', error);
      throw error;
    }
  };

  const handleLocationSubmit = async (e) => {
    e.preventDefault();
    if (manualLocation.trim()) {
      setLocationError(null);
      
      try {
        const locationData = await geocodeAddress(manualLocation);
        setLocation(locationData);
        setDisplayedLocation(manualLocation);
        setUsingCurrentLocation(false);
        setIsInputMode(false);
      } catch (error) {
        setLocationError("Couldn't find that location. Please try a different address.");
      }
    }
  };

  const handleChangeLocation = () => {
    setIsInputMode(true);
  };

  const handleUseCurrentLocation = () => {
    tryGetCurrentLocation();
  };

  return (
    <div className="location-container">
      {locationError && (
        <div className="location-error">
          {locationError}
        </div>
      )}
      
      {!isInputMode ? (
        <div className="current-location">
          <span>
            {usingCurrentLocation ? "Using your current location" : `Using location: ${displayedLocation}`}
          </span>
          <button 
            className="change-location-btn"
            onClick={handleChangeLocation}
          >
            Change
          </button>
        </div>
      ) : (
        <div className="search-container location-search-container">
          <form onSubmit={handleLocationSubmit}>
            <div className="glass-effect">
              <FaMapMarkerAlt className="location-icon" />
              <input
                type="text"
                placeholder="Enter your location"
                value={manualLocation}
                onChange={(e) => setManualLocation(e.target.value)}
                className="search-input"
              />
              <button 
                type="submit" 
                className="search-button"
              >
                Set
              </button>
            </div>
            <div className="location-options">
              <button 
                type="button" 
                className="current-location-btn"
                onClick={handleUseCurrentLocation}
              >
                Use Current Location
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default LocationInput;