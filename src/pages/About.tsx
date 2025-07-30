// src/pages/About.tsx
import React from "react";

export default function About() {
  return (
    <section className="pt-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">About This App</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
        This is a React + TypeScript application that demonstrates a fully functional theme-switching mechanism.
        Users can choose between three unique themes with different styles, fonts, and layouts.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Technologies used include:
      </p>
      <ul className="list-disc list-inside mt-3 text-base text-gray-700 dark:text-gray-300">
        <li>React with TypeScript</li>
        <li>Tailwind CSS for styling</li>
        <li>Context API for theme management</li>
        <li>React Router for page navigation</li>
        <li>Axios for API calls</li>
        <li>Theme persistence using localStorage</li>
      </ul>
    </section>
  );
}
