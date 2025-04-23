import React, { useState } from "react";
import { analyzeSymptoms } from "../../services/nlpService";
import { findMedicalFacilities } from "../../services/firebaseService";
import "./SearchBar.css";

function SearchBar({ setSearchResults, location, setSearchStatus, setError }) {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!query.trim()) {
      setError("Please describe your symptoms");
      return;
    }
    
    if (!location) {
      setError("Please enable location or enter your location manually");
      return;
    }
    
    setSearchStatus("analyzing");
    setError(null);
    
    try {
      // Analyze symptoms using nlpService (embeddings method)
      const medicalKeywords = await analyzeSymptoms(query);
      
      // Updating to "searching" state before finding facilities
      setSearchStatus("searching");
      
      // Use keywords to find relevant facilities, passing the user's location
      const facilities = await findMedicalFacilities(medicalKeywords, location);
      
      if (facilities.length === 0) {
        setError("No medical facilities found matching your criteria. Try different symptoms or location.");
      }
      
      setSearchResults(facilities);
      setSearchStatus("complete");
    } catch (error) {
      console.error("Search error:", error);
      setError("Sorry, we couldn't complete your search. Please try again.");
      setSearchStatus("idle");
    }
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <div className="glass-effect">
        <input
          type="text"
          placeholder="Describe your symptoms concisely and clearly (e.g. broken leg)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;