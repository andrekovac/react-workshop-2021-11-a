import React from "react";

const initialValue = 100;

type CounterContextT = {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
  resetCount: () => void;
};

const CounterContext = React.createContext<CounterContextT>({
  count: 0,
  incrementCount: () => null,
  decrementCount: () => null,
  resetCount: () => null,
});

// -------------------------------------------------------------
// Custom Hooks Organization: Consumer hook + Provider component
// -------------------------------------------------------------

// consumer hook
export const useCounter = () => {
  return React.useContext(CounterContext);
};

// provider component
const CounterProvider: React.FC = ({ children }) => {
  const [count, setCount] = React.useState<number>(initialValue);

  const contextValue = {
    count: count,
    incrementCount: () => {
      setCount(count + 1);
    },
    decrementCount: () => {
      setCount((prevCounter) => prevCounter - 1);
    },
    resetCount: () => setCount(0),
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
