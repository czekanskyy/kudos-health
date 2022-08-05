/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        starter: {
          500: 'hsl(195, 90%, 60%)',
          600: 'hsl(195, 90%, 50%)',
        },
        standard: {
          500: 'hsl(205, 90%, 60%)',
          600: 'hsl(205, 90%, 50%)',
        },
        pro: {
          500: 'hsl(215, 90%, 60%)',
          600: 'hsl(215, 90%, 50%)',
        },
        premium: {
          500: 'hsl(225, 90%, 60%)',
          600: 'hsl(225, 90%, 50%)',
        },
      },
      backgroundImage: {
        hero: 'url(/images/hero-image.webp)',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      dongle: ['Dongle', 'sans-serif'],
      gloria: ['Gloria Hallelujah', 'cursive'],
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
  },
  plugins: [],
};
