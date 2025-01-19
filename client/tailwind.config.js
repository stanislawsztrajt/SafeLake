/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      bgPri: "#F9F7F7",
      bgSec: "#DBE2EF",
      pri: "#3F72AF",
      sec: "#112D4E"
    },
    extend: {},
  },
  plugins: [],
}

