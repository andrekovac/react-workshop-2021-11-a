import React from "react";

type LimitContextT = {
  limit: number;
  setLimit: (limit: number) => void;
};

const LimitContext = React.createContext<LimitContextT>({
  limit: 0,
  setLimit: () => null,
});

// ---------------------------------------------------
// Custom Hooks Organization: Consumer + Provider hook
// ---------------------------------------------------

// consumer hook
export const useLimit = () => {
  return React.useContext(LimitContext);
};

// provider hook
export const useLimitProvider = () => {
  const [limit, setLimit] = React.useState<LimitContextT["limit"]>(0);

  const value = {
    limit,
    setLimit,
  };

  const LimitProvider = LimitContext.Provider;

  return [LimitProvider, value] as const;
};
