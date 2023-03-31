/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "green-1": "#59d986",
      "green-2": "#3dd372",
      "yellow-1": "#ffcc4dff",
      "dark-1": "#313940",
      "dark-2": "#49555f",
      "dark-3": "#636c74",
      "light-1": "#fff",
      "light-2": "#f0f2f2",
      "light-3": "#d3d3d3",
      "light-4": "#e3e3e3",
      white: "#fff",
    },
  },
  plugins: [],
};
