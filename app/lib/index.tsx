import React from "react";

import { ExampleTinyFrontendProps } from "../../contract/src/props";
import CounterPage from "../components/counterPage/counterPage";
import { CounterProvider } from "../context/CounterContext";

const ExampleTinyFrontend: React.FC<ExampleTinyFrontendProps> = ({
  name,
  onCounterChange,
}) => {
  return (
    <CounterProvider>
      <CounterPage name={name} onCounterChange={onCounterChange} />
    </CounterProvider>
  );
};

export default ExampleTinyFrontend;
