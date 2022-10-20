/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "1200px" },
    },
    extend: {
      fontFamily: {
        primary: "primary",
        secondary: "secondary",
      },
      colors: {
        "semi-gray": "#0a2540",
        "stripe-blue": "#635bff",
        "stripe-sky-blue": "#00d4ff",
        "stripe-deco-blue": "#02bcf5",
        "stripe-semi-violet": "#7a73ff",
      },
      padding: {
        mobile: "2rem",
      },
    },
  },
  plugins: [],
};
