import React from "react";
import "./SortOptions.css";

function SortOptions({ sortOption, setSortOption }) {
  return (
    <div className="sort-options">
      <span>Sort by:</span>
      <div className="sort-buttons">
        <button 
          className={sortOption === "severity-desc" ? "active" : ""}
          onClick={() => setSortOption("severity-desc")}
        >
          Most Severe First
        </button>
        <button 
          className={sortOption === "severity-asc" ? "active" : ""}
          onClick={() => setSortOption("severity-asc")}
        >
          Mildest First
        </button>
        <button 
          className={sortOption === "rating-desc" ? "active" : ""}
          onClick={() => setSortOption("rating-desc")}
        >
          Highest Rated
        </button>
        <button 
          className={sortOption === "distance-asc" ? "active" : ""}
          onClick={() => setSortOption("distance-asc")}
        >
          Closest First
        </button>
      </div>
    </div>
  );
}

export default SortOptions;