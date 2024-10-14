/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
    },
    colors:{
      'name-orange': '#E37E21',
      'white': '#ffffff',
      'black': '#000000',
    }
  },
  },
  plugins: [],
}

