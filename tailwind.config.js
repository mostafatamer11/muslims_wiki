/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      noto_arabic: "Noto Kufi Arabic",
    },
    colors: {
      white: "#fff",
      green: {
        100: "#387855D",
        200: "#175442",
        300: "#053527",
      },
      brown: {
        100: "#673600",
        200: "#B27632",
      },
    },
    fontSize: {
      "5xl": "5.062rem",
      "4xl": "4rem",
      "3xl": "3.2rem",
      "2xl": "2.5rem",
      xl: "2rem",
      lg: "1.562rem",
      md: "1.25rem",
      sm: "1rem",
      xs: "0.8rem",
    },
    extend: {
      borderRadius: {
        8: "8px",
      },
    },
  },
  plugins: [],
};
