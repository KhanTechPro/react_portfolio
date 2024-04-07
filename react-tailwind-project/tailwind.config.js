/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#010851",
        "secondary": "#9A7Af1",
        "tartiary": "#707070",
        "green": "#00df9a" 
      }
    },
  },
  plugins: [],
}

