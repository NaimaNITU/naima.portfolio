/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables 'dark:' variants based on class
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#15803d", // your green theme color
      },
    },
  },
  plugins: [require("daisyui")], // only if you're using daisyui
};
