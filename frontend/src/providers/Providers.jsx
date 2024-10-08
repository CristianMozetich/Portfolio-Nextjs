"use client";

import React from "react";

import { ThemeProvider } from "next-themes";

import { ContextProvider } from "@/context/useContext";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ContextProvider>{children}</ContextProvider>
    </ThemeProvider>
  );
}
