"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { useTheme } from 'next-themes'

const Context = createContext();

export function useContexto() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    if (theme === 'system' && systemTheme !== undefined) {
      setTheme(systemTheme)
    }
  }, [theme, setTheme, systemTheme])

  const handleMenuHamburguesa = () => {
    setMenuHamburguesa(!menuHamburguesa);
  };

  return (
    <Context.Provider
      value={{
        menuHamburguesa,
        handleMenuHamburguesa,
        theme,
        setTheme
      }}
    >
      {children}
    </Context.Provider>
  );
};
