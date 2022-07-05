/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'projectRed': '#F55A5A',
        'projectBlack': '#2B283A',
        'projectGrey': '#918E9B'
      },
      fontFamily:{
        'font-inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
