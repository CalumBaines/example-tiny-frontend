import React, { useEffect } from "react";

import { ExampleTinyFrontendProps } from "../../../contract/src/props";
import styles from "../../lib/index.module.css";
import ResultsList from "../ResultsList/ResultsList";
import SearchForm from "../SearchForm/SearchForm";

const ResultsPage: React.FC<ExampleTinyFrontendProps> = ({
  results,
  onResultSelected,
  onResultsFetch,
}) => {
  // const { counter, setCounter } = useCounter();

  // useEffect(() => onResultsFetch?.(counter), [counter, onCounterChange]);

  return (
    <div>
      <h1>Search Results</h1>
      <SearchForm />
      <ResultsList />
    </div>
  );
};

export default ResultsPage;
