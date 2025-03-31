import React from "react";
import ResultCard from "./ResultCard";
import "../styles/ResultsList.css";

function ResultsList({ results }) {
  if (!results || results.length === 0) {
    return null;
  } // check if there are stuffs to show :)
  // create a grid layout 
  // Maps through each facility in the results array
  // key: provides React with a unique identifier for each item
  // facility={facility}: throw the entire object to the ResultCard component
  return (
    <div className="results-container">
      <h2>Medical Facilities Near You</h2>
      <div className="results-grid">
        {results.map(facility => (
          <ResultCard key={facility.id} facility={facility} />
        ))}
      </div>
    </div>
  );
}

export default ResultsList;