import { SearchResult } from "../context/ResultsContext";

export interface ExampleTinyFrontendProps {
  results?: SearchResult[];
  onResultSelected: (url: string) => void;
  onResultsFetch?: (results: SearchResult[]) => void;
}
