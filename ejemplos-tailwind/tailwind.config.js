const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        orange: colors.orange, 
      },
    }
  },
  variants: {
    opacity: ['responsive','hover', 'focus', 'disabled'],
    // scale: ['hover'],
    // rotate:['responsive'],
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
}
