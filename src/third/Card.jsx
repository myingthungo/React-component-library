import React, { createContext, useContext } from "react";

// Create Context
const CardContext = createContext();

// Card Wrapper Component (Provider)
export default function Card({ children }) {
  return (
    <div className="card">
      <CardContext.Provider value={{}}>{children}</CardContext.Provider>
    </div>
  );
}
