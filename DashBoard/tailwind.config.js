/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lp-bg": "#1A1B27",
        "rp-bg": "#26273A",
        "card-bg": "#2A2B3D",
        "grad-s": "#7C3AED",
        "grad-e": "#EC4899",
        "t-p": "#7C3AED",
        "t-s": "#C0C0C0",
        "t-f": "#9A4DFF",
        "t-ss": "#9A4DFF",
        "input-text": "#A8A8A8",
        "card-border": "#6E5AAE",
      },
    },
  },
  plugins: [],
};
