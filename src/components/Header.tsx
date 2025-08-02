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
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-md transition-colors"
      style={{ backgroundColor: "var(--header-bg)" }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold"
          style={{ color: "var(--nav-text)" }}
        >
          MultiTheme App
        </Link>

        {/* Nav + Theme */}
        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "hover:underline transition-colors",
                  location.pathname === link.path && "font-semibold underline"
                )}
                style={{ color: "var(--nav-text)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme Switcher */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            style={{
              backgroundColor: "var(--dropdown-bg)",
              color: "var(--dropdown-text)",
              border: "1px solid #ccc",
              padding: "0.5rem",
              borderRadius: "0.375rem",
              transition: "all 0.3s ease",
            }}
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
