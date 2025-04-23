import React, { useState, useEffect } from "react";
import ResultCard from "./ResultCard";
import SortOptions from "./SortOptions";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./ResultsList.css";

function ResultsList({ results }) {
  const [sortOption, setSortOption] = useState("distance-asc");
  const [sortedResults, setSortedResults] = useState([]);
  const [distanceRadius, setDistanceRadius] = useState(3.2);

  useEffect(() => {
    if (!results || results.length === 0) {
      setSortedResults([]);
      return;
    }

    let resultsCopy = [...results];

    resultsCopy = resultsCopy.filter(facility => {
      if (facility.distance === undefined) return false;
      return facility.distance <= distanceRadius;
    });

    switch (sortOption) {
      case "severity-asc":
        resultsCopy.sort((a, b) => (b.severity || 5) - (a.severity || 5));
        break;
      case "severity-desc":
        resultsCopy.sort((a, b) => (a.severity || 5) - (b.severity || 5));
        break;
      case "rating-desc":
        resultsCopy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "distance-asc":
        resultsCopy.sort((a, b) => {
          if (a.distance === undefined && b.distance === undefined) {
            return (b.rating || 0) - (a.rating || 0);
          }
          if (a.distance === undefined) return 1;
          if (b.distance === undefined) return -1;

          return a.distance - b.distance;
        });
        break;
      default:
        resultsCopy.sort((a, b) => (a.severity || 5) - (b.severity || 5));
    }

    setSortedResults(resultsCopy);
  }, [results, sortOption, distanceRadius]);

  const handleRadiusChange = (e) => {
    setDistanceRadius(parseFloat(e.target.value));
  };

  const filteredOutCount = results && results.length > 0
    ? results.length - sortedResults.length
    : 0;

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="results-container">
      <h2>Medical Facilities Near You</h2>

      <div className="distance-filter">
        <div className="filter-header">
          <FaMapMarkerAlt className="filter-icon" />
          <h3>Distance Filter</h3>
        </div>
        <label htmlFor="radius-slider" className="radius-label">
          Showing facilities within <span className="radius-value">{distanceRadius.toFixed(1)}</span> miles
        </label>
        <div className="slider-container">
          <span className="range-value">0.5</span>
          <input
            id="radius-slider"
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={distanceRadius}
            onChange={handleRadiusChange}
            className="radius-slider"
          />
          <span className="range-value">5.0</span>
        </div>
        <div className="radius-info">
          <strong>{sortedResults.length}</strong> facilities found
          {filteredOutCount > 0 && (
            <span className="filtered-out-info">
              ({filteredOutCount} more available beyond this range)
            </span>
          )}
        </div>
      </div>

      <SortOptions 
        sortOption={sortOption}
        setSortOption={setSortOption} 
      />

      <div className="results-grid">
        {sortedResults.length > 0 ? (
          sortedResults.map(facility => (
            <ResultCard key={facility.id} facility={facility} />
          ))
        ) : (
          <div className="no-results-message">
            No facilities found within {distanceRadius.toFixed(1)} miles. Try increasing your search radius.
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsList;