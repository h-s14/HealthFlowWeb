/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-background": "#8b8b8b",

        "light-gradient-1": "#E0F7FA",
        "light-gradient-2": "#B3E5FC",
        "light-gradient-3": "#FFFFFF",

        "dark-background": "#2E073F",

        "dark-gradient-1": "#0D47A1",
        "dark-gradient-2": "#1976D2",
        "dark-gradient-3": "#1A1A1A",

        // lippu: "#333333",
        // dippu: "FFFFFF",

        // "nav-bar-bg-grad-light-1": "#E0F7FA",
        // "nav-bar-bg-grad-light-2": "#B3E5FC",
        // "nav-bar-bg-grad-light-3": "#FFFFFF",

        // "nav-bar-bg-grad-dark-1": "#007BFF",
        // "nav-bar-bg-grad-dark-2": "#007BFF",
        // "nav-bar-bg-grad-dark-3": "#007BFF",

        "nav-bar-btn-grad-light-start": "#007BFF",
        "nav-bar-btn-grad-light-end": "#5B9BD5",

        "nav-bar-btn-txt-light": "#FFFFFF",
        "nav-bar-btn-txt-dark": "#000000",

        "nav-bar-btn-grad-light-hover-start": "#007BFF",
        "nav-bar-btn-grad-light-hover-end": "#5B9BD5",
        "nav-bar-btn-grad-dark-start": "#007BFF",
        "nav-bar-btn-grad-dark-end": "#5B9BD5",
        "nav-bar-btn-grad-dark-hover-start": "#007BFF",
        "nav-bar-btn-grad-dark-hover-end": "#5B9BD5",

        "nav-bar-bg-light": "#F8F9FA",
        "nav-bar-bg-dark": "#333333",

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
  plugins: [
    // Plugin to hide scrollbars
    require("tailwind-scrollbar-hide"),
  ],
};
