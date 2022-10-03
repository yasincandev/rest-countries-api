/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkModeElements: "hsl(209, 23%, 22%)",
      darkModeBg: "hsl(207, 26%, 17%)",
      lightModeText: "hsl(200, 15%, 8%)",
      lightModeInput: "hsl(0, 0%, 52%)",
      lightModeBg: "hsl(0, 0%, 98%)",
      lightModeElements: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
