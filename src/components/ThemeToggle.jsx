import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "./ThemeContext.js";

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="px-2 rounded-full transition-transform duration-300 hover:scale-105 hover:text-accent"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
};
