# 🌗 Multi-Theme Switcher App

A responsive React + TypeScript web application that demonstrates a fully functional **theme switcher** with three distinct UI themes. It uses Context API for global theme management, Tailwind CSS for styling, and React Router for multi-page support.

### 🔗 Live Demo

👉 [https://multi-theme-switcher-app-henna.vercel.app/](https://multi-theme-switcher-app-henna.vercel.app/)

---

## 🚀 Features

- 🌈 **Three Themes**:
  - **Theme 1 (Minimal)** – Light background, sans-serif font
  - **Theme 2 (Dark)** – Dark mode layout with serif font
  - **Theme 3 (Colorful)** – Card-based grid with playful cursive font
- Fully responsive and mobile-friendly design
- Seamless theme switching with smooth animation
- Theme **persists across reload** using `localStorage`
- API integration using [FakeStore API](https://fakestoreapi.com/)
- Global theme management with **Context API**
- Built with **Vite** for fast performance
- Uses only utility-first CSS (no large UI libraries)
- Multi-page app using **React Router** (Home, About, Contact)
- Secure frontend (no inline scripts, type-safe)

---

## 🛠️ Tech Stack

- React + TypeScript
- Tailwind CSS
- React Router v6
- Axios
- FakeStore API
- Context API
- localStorage
- CSS Variables

---

## 📁 Folder Structure
```
src/
├── components/ # Reusable components (Header, etc.)
├── context/ # ThemeContext with localStorage
├── pages/ # Home, About, Contact pages
├── routes/ # AppRouter setup
├── App.tsx # Main app layout
├── main.tsx # Entry point
└── index.css # Tailwind + theme styles
  ```
---

## 📦 Getting Started

### 1. Clone the repository
```
git clone https://github.com/Divyanshi2408/Multi-Theme-Switcher-App.git
cd multi-theme-switcher-app
```

### 2. Install dependencies
  ```
npm install
```

### 3. Run locally
```
npm run dev
```
The app will be available at http://localhost:5173


Build Command: npm run build

Output Directory: dist
