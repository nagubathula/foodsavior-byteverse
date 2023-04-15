/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D14D72',
        'secondary': '#FFABAB',
        'tertiary': '#FCC8D1',
        'support': '#FEF2F4',
      }
    },
  },
  plugins: [],
}