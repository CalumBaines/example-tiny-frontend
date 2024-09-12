import "./ResultsList.css";

import React from "react";

import { useResultsContext } from "../../context/ResultsContext";

const ResultsList: React.FC = () => {
  const { results } = useResultsContext();

  return (
    <ul className="results-list">
      {results.map((result) => (
        <li key={result.imdbId} className="result-item">
          <img
            src={result.imgPoster}
            alt={`${result.title} Poster`}
            className="result-poster"
          />
          <div className="result-details">
            <h3>
              {result.title} ({result.year})
            </h3>
            <a href={result.imdbUrl} target="_blank" rel="noopener noreferrer">
              View on IMDb
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ResultsList;
