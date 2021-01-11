import React, { createContext, useContext, useState } from "react";

const GlobalLoadingContext = createContext(null);
const GlobalLoadingActionsContext = createContext(null);

export const GlobalLoadingContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <GlobalLoadingContext.Provider value={loading}>
      <GlobalLoadingActionsContext.Provider value={setLoading}>
        {children}
      </GlobalLoadingActionsContext.Provider>
    </GlobalLoadingContext.Provider>
  );
};

export const useGlobalLoadingContext = () => {
  const context = useContext(GlobalLoadingContext);
  if (context === undefined) {
    throw new Error(
      `useGlobalLoadingContext must be called within GlobalLoadingContextProvider`
    );
  }
  return context;
};

export const useGlobalLoadingActionsContext = () => {
  const context = useContext(GlobalLoadingActionsContext);
  if (context === undefined) {
    throw new Error(
      `useGlobalLoadingActionsContext must be called within GlobalLoadingContextProvider`
    );
  }
  return context;
};
