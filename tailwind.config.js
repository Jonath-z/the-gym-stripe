/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
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
      screens: {
        sm: { max: "800px" },
        md: { min: "8001px", max: "1400px" },
      },
      padding: {
        mobile: "2rem",
      },
    },
  },
  plugins: [],
};
