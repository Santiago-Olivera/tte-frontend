"use client"
import React, { useState, createContext, ReactNode } from 'react';

// Create a context for the isLoggedIn state
export const IsLoggedInContext = createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

// Define the props type to include children
interface IsLoggedInProviderProps {
  children: ReactNode;
}

// Create a provider component for the context
export const IsLoggedInProvider: React.FC<IsLoggedInProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </IsLoggedInContext.Provider>
  );
};
