import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-gray-200 shadow-md z-50">
      <Link to="/" className="text-xl font-bold">MultiTheme App</Link>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="p-2 rounded-md"
      >
        <option value="theme1">Theme 1 - Minimal</option>
        <option value="theme2">Theme 2 - Dark</option>
        <option value="theme3">Theme 3 - Colorful</option>
      </select>
    </header>
  );
};
