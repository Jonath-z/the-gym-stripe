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
      clipPath: {
        footer: "polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)",
        header: "polygon(0 0, 100% 0, 100% 50%, 100% 52%, 0 80%, 0 53%)",
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
  plugins: [require("tailwind-clip-path")],
};
