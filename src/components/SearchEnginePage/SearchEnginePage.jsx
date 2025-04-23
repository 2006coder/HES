import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './SearchEnginePageStyles.css';

// Import components
import SearchBar from '../SearchComponents/SearchBar';
import ResultsList from '../SearchComponents/ResultsList';
import LocationInput from '../SearchComponents/LocationInput';
import Header from '../SearchComponents/Header';

const SearchEnginePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [location, setLocation] = useState(null);
  const [searchStatus, setSearchStatus] = useState("idle");
  const [error, setError] = useState(null);

  const getLoadingMessage = () => {
    switch (searchStatus) {
      case "analyzing":
        return "Analyzing your symptoms...";
      case "searching":
        return "Finding suitable medical facilities near you...";
      default:
        return "Searching for medical facilities...";
    }
  };

  return (
    <div className="search-engine-page">
      <Navbar />
      <div className="app-container">
        <Header />
        
        <div className="search-section">
          <SearchBar 
            setSearchResults={setSearchResults} 
            location={location} 
            setSearchStatus={setSearchStatus}
            setError={setError}
          />
          <LocationInput setLocation={setLocation} />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        {searchStatus !== "idle" && searchStatus !== "complete" ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>{getLoadingMessage()}</p>
          </div>
        ) : (
          <ResultsList results={searchResults} />
        )}
      </div>
    </div>
  );
};

export default SearchEnginePage;