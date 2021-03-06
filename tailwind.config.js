const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.11ty.js',
      './src/**/*.njk'
    ],
  },
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Vollkorn', 'serif'],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 625, // not default of 700
      extrabold: 800,
      black: 900,
    },
    colors: {
      transparent: 'transparent',
      purple: colors.purple,
      gray: colors.trueGray,
      pink: colors.pink,
      black: '#14110fff',
      white: '#fafafa',
      jet: '#34312dff',
      grayWeb: '#7e7f83ff',
      almond: '#d9c5b2ff',

    },
  },
  variants: {},
  plugins: [], // if we add forms, do it here
}
