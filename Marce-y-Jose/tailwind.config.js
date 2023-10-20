/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './public/'],
  theme: {
    extend: {
      screens: {
        xs: { max: '475px' },
        xsm: { max: '639px' },
        cmd: { max: '1023' },
      },
      backgroundImage: {
        hero: "url('https://res.cloudinary.com/jessaleem/image/upload/v1691374042/Marce_Jose/Flores_oeedky.jpg')",
        rsvp: "url('https://res.cloudinary.com/jessaleem/image/upload/v1691374038/Marce_Jose/bg-travel1_wwxc6a.jpg')",
        wgold:
          "url('https://res.cloudinary.com/jessaleem/image/upload/v1691374043/Marce_Jose/fondo-gold2_f8jgvw.png')",
      },
    },
  },
  plugins: [],
};
