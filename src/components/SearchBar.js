import React, { useState } from "react";
import { analyzeSymptoms } from "../services/nlpService";
import { findMedicalFacilities } from "../firebase_integration";
import "../styles/SearchBar.css";

function SearchBar({ setSearchResults, location, setIsLoading, setError }) {
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
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Translate natural language to medical keywords
      // we have already exported the function analyzeSymptoms from nlpService.js
      // So we can use it here.
      const medicalKeywords = await analyzeSymptoms(query);

      // we have already exported the function findMedicalFacilities from firebase_integration.js
      // Use keywords to find relevant facilities
      const facilities = await findMedicalFacilities(medicalKeywords, location);
      
      if (facilities.length === 0) {
        setError("No medical facilities found matching your criteria. Try different symptoms or location.");
      }
      
      setSearchResults(facilities);
    } catch (error) {
      console.error("Search error:", error);
      setError("Sorry, we couldn't complete your search. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <div className="glass-effect">
        <input
          type="text"
          placeholder="Describe your symptoms (e.g., 'my legs hurt so much')"
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