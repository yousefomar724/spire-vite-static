/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'],
      },
      backgroundImage: {
        logo: "url('/imgs/logo.png')",
        'home-pattern': "url('/imgs/homeBg.jpeg')",
        hero: 'url(/imgs/heroSection.png)',
      },
      backdropGrayscale: {
        50: '1',
      },
      colors: {
        blue: {
          100: 'hsla(227, 57%, 36%, .2)',
          200: 'hsla(227, 57%, 36%, .3)',
          300: 'hsla(227, 57%, 36%, .4)',
          400: 'hsla(227, 57%, 36%, .5)',
          500: 'hsla(227, 57%, 36%, .6)',
          600: 'hsla(227, 57%, 36%, .7)',
          700: 'hsla(227, 57%, 36%, .8)',
          800: 'hsla(227, 57%, 36%, .9)',
          900: 'hsla(227, 57%, 36%, 1)',
        },
        darkBlue: {
          100: 'hsla(227, 39%, 28%,.2)',
          200: 'hsla(227, 39%, 28%,.3)',
          300: 'hsla(227, 39%, 28%, .4)',
          400: 'hsla(227, 39%, 28%, .5)',
          500: 'hsla(227, 39%, 28%, .6)',
          600: 'hsla(227, 39%, 28%, .7)',
          700: 'hsla(227, 39%, 28%, .8)',
          800: 'hsla(227, 39%, 28%, .9)',
          900: 'hsla(227, 39%, 28%, 1)',
        },
      },
    },
  },
  plugins: [],
}
