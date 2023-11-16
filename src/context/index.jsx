import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CMSModal = createContext(false);

export const CMSContext = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <CMSModal.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </CMSModal.Provider>
  );
};
