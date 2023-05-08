/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        "regal-blue": "#7c3aed",
        "black-grey": "#4b5563",
        "white-shade": "#f5f3ff",
      },
    },

    plugins: [],
  },
};
