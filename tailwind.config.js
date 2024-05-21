/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      noto_arabic: "Noto Kufi Arabic",
    },
    colors: {
      white: "#fff",
      black: {
        100: "rgba(0, 0, 0, 0.6)",
        200: "rgba(0, 0, 0, 0.7)",
        300: "rgba(0, 0, 0, 0.8)",
        400: "rgba(0, 0, 0, 0.9)",
        500: "rgba(0, 0, 0, 1)",
      },
      green: {
        50: "#38785D",
        100: "#175442",
        200: "#32594E",
        300: "#223C34"
      },
      yellow: {
        100: "#F0A200"
      },
      brown: {
        100: "#3B2800",
        200: "#271A00"
      }
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
        8: "0.5rem",
        12: ".75rem",
        16: "1rem"
      },
    },
  },
  plugins: [],
};
