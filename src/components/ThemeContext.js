import { createContext, useContext } from "react";

// Create a theme context
export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

// Custom hook for using theme
export const useTheme = () => useContext(ThemeContext);
