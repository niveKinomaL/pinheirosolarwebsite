/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",

      md: "768px",

      lg: "992px",

      xl: "1280px",
    },

    extend: {
      colors: {
        bluePinheiro: "#0D3A83",
        darkBluePinheiro: "#0D1D41",
        orangePinheiro: "#F8A302",
      },
    },
    fontFamily: {
      Arimo: ["Arimo", "sans-serif"],
    },
  },
  plugins: [],
};
