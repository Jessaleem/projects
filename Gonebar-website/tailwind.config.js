/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/App.jsx', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: { max: '475px' },
        xsm: { max: '639px' },
      },
      backgroundImage: {
        hero: "url('./public/excavator-action-resized.jpg')",
      },
    },
  },
  plugins: [],
};
