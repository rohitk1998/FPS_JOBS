/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        orange: colors.orange,
        primary: "#a83359",
      },
    },
  },
  plugins: [],
};
export default config;
