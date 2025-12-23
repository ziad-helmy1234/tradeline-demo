"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  // attribute="class" tells next-themes to toggle the .dark class on <html>
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>;
}