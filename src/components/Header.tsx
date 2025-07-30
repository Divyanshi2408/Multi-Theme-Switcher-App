import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          MultiTheme App
        </Link>

        {/* Nav + Theme */}
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <nav className="hidden sm:flex gap-4 text-gray-700 dark:text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                  location.pathname === link.path && "font-semibold underline"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme Switcher */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          >
            <option value="theme1">Theme 1 - Minimal</option>
            <option value="theme2">Theme 2 - Dark</option>
            <option value="theme3">Theme 3 - Colorful</option>
          </select>
        </div>
      </div>
    </header>
  );
};
