import "./SearchForm.css";

import React, { useState } from "react";

import { useResultsContext } from "../../context/ResultsContext";

const SearchForm: React.FC = () => {
  const { setResults } = useResultsContext();
  const [query, setQuery] = useState<string>("");

  // Function to handle the search when the button is clicked
  const handleSearch = async () => {
    if (!query.trim()) return; // Prevent empty queries
    try {
      const response = await fetch(
        `https://search.imdbot.workers.dev/?q=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      // Map the response data to match our SearchResult interface
      const searchResults = data.description.map((result: any) => ({
        imdbId: result["#IMDB_ID"],
        title: result["#TITLE"],
        year: result["#YEAR"],
        imdbUrl: result["#IMDB_URL"],
        imgPoster: result["#IMG_POSTER"],
      }));

      setResults(searchResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="search-component">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchForm;
