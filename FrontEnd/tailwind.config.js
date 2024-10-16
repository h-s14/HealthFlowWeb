/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-background": "#8b8b8b",
        "dark-background": "#2E073F",
        "dark-gradient-1": "#2a384c",
        "dark-gradient-2": "#4f6485",
        "dark-gradient-3": "#333333",
        "nav-bar-bg-light": "#F8F9FA",
        "nav-bar-bg-dark": "#F8F9FA",
        "nav-bar-btn-grad-light-start": "#007BFF",
        "nav-bar-btn-grad-light-end": "#5B9BD5",
        "nav-bar-btn-light-txt": "#FFFFFF",
        "nav-bar-btn-grad-light-hover-start": "#007BFF",
        "nav-bar-btn-grad-light-hover-end": "#5B9BD5",
        "nav-bar-btn-grad-dark-start": "#007BFF",
        "nav-bar-btn-grad-dark-end": "#5B9BD5",
        "nav-bar-btn-grad-dark-hover-start": "#007BFF",
        "nav-bar-btn-grad-dark-hover-end": "#5B9BD5",
        "nav-bar-bg-hover-light": "#FFFFFF",
        "nav-bar-bg-hover-dark": "#000000",
        "nav-bar-link-light": "#000000",
        "nav-bar-link-dark": "#000000",
        "nav-bar-link-hover-light": "#000000",
        "nav-bar-link-hover-dark": "#000000",
        "nav-bar-text-light": "#000000",
        "nav-bar-text-dark": "#FFFFFF",
        "nav-bar-text-hover-light": "#000000",
        "nav-bar-text-hover-dark": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
