import React from "react";

export default function About() {
  return (
    <section
      className="pt-24 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto transition-all"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font)",
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">About This App</h1>

      <p className="text-lg sm:text-xl mb-4 leading-relaxed">
        This is a React + TypeScript application that demonstrates a fully functional theme-switching mechanism.
        Users can choose between three unique themes with different styles, fonts, and layouts.
      </p>

      <p className="text-lg sm:text-xl leading-relaxed">
        Technologies used include:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-base sm:text-lg">
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
