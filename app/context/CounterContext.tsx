import React, { createContext, ReactNode, useContext, useState } from "react";

interface CounterContextProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextProps | undefined>(
  undefined
);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
