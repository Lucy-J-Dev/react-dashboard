/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"],
      },
    },
    // colors: {
    //   pastel: {
    //     pink: "#fbcfe8", // Rosado pastel
    //     purple: "#e9d5ff", // Púrpura pastel
    //     yellow: "#fef9c3", // Amarillo pastel
    //     blue: "#bfdbfe", // Azul pastel
    //     green: "#bbf7d0", // Verde pastel
    //   },
    // },
  },
  plugins: [],
  darkMode: "class",
};
