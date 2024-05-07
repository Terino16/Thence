/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "Manrope": ['Manrope', 'sans-serif'],
        "Covered": ['Covered By Your Grace','sans-serif']
    } 
    },
  },
  plugins: [],
}