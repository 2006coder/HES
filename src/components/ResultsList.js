import React from "react";
import ResultCard from "./ResultCard";
import SortOptions from "./SortOptions";
import "../styles/ResultsList.css";

function ResultsList({ results }) {
  const [sortOption, setSortOption] = useState("severity-desc");
  const [sortedResults, setSortedResults] = useState([]);
  
  useEffect(() => {
    if (!results || results.length === 0) {
      setSortedResults([]);
      return;
    }
    
    // create a copy of results to avoid modifying the original array
    const resultsCopy = [...results];
    
    // basic switch function to sort :)
    switch(sortOption) {
      case "severity-asc":
        resultsCopy.sort((a, b) => (b.severity || 5) - (a.severity || 5));
        break;
      case "severity-desc":
        resultsCopy.sort((a, b) => (a.severity || 5) - (b.severity || 5));
        break;
      case "rating-desc":
        resultsCopy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // default: the results are sorted in the order of most servere first.
        resultsCopy.sort((a, b) => (a.severity || 5) - (b.severity || 5));
    }
    
    setSortedResults(resultsCopy);
  }, [results, sortOption]);
  
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

      <SortOptions 
        sortOption={sortOption}
        setSortOption={setSortOption} 
      />
    
      <div className="results-grid">
        {results.map(facility => (
          <ResultCard key={facility.id} facility={facility} />
        ))}
      </div>
    </div>
  );
}

export default ResultsList;
