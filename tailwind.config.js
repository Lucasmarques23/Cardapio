/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'] 
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      },
      colors: {
        'btn-green': '#5acc0a',
        'cart-red': '#ff3131',
        'color-btn': '#f6f7f8',
        'modal': '#1e1e1e',
        'menu': '#ffffff',
        'border-cart': '#c1c1c1'
      }
    },
  },
  plugins: [],
}

