/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'card-color': '#e7e5e9',
          'btn-red': '#ff0000',
      }
    },
  },
  plugins: [],
}