import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import LocationInput from "./components/LocationInput";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="app-container">
      <Header />
      
      <div className="search-section">
        <SearchBar 
          setSearchResults={setSearchResults} 
          location={location} 
          setIsLoading={setIsLoading}
          setError={setError}
        />
        <LocationInput setLocation={setLocation} />
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Searching for medical facilities...</p>
        </div>
      ) : (
        <ResultsList results={searchResults} />
      )}
    </div>
  );
}

export default App;
