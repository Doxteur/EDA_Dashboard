/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
