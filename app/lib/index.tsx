import React from "react";

import { ExampleTinyFrontendProps } from "../../contract/src/props";
import ResultsPage from "../components/ResultsPage/ResultsPage";
import { ResultsProvider } from "../context/ResultsContext";
import styles from "./index.module.css";

const ExampleTinyFrontend: React.FC<ExampleTinyFrontendProps> = ({
  results,
  onResultSelected,
  onResultsFetch,
}) => {
  return (
    <div>
      <ResultsProvider>
        <ResultsPage
          results={results}
          onResultSelected={onResultSelected}
          onResultsFetch={onResultsFetch}
        />
      </ResultsProvider>
    </div>
  );
};

export default ExampleTinyFrontend;
