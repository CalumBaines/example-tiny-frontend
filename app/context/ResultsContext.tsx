import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the type for the search result based on the API response
export interface SearchResult {
  imdbId: string;
  title: string;
  year: number;
  imdbUrl: string;
  imgPoster: string;
}

// Define the type for the context value
interface ResultsContextType {
  results: SearchResult[];
  setResults: (results: SearchResult[]) => void;
}

// Create the context
const ResultsContext = createContext<ResultsContextType | undefined>(undefined);

// Custom hook to use the ResultsContext
export const useResultsContext = (): ResultsContextType => {
  const context = useContext(ResultsContext);
  if (!context) {
    throw new Error("useResultsContext must be used within a ResultsProvider");
  }
  return context;
};

// Provider component to wrap the application
export const ResultsProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<SearchResult[]>([]);

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      {children}
    </ResultsContext.Provider>
  );
};
