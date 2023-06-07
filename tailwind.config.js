/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'icon-star': "url('./src/assets/icon-star.svg')",
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
