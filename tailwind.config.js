/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    './**/*.html',
  ],
  theme: {
    extend: {fontFamily:{
      'kanit': ['Kanit', 'sans-serif'],
      'noto-sans-jp': ['"Noto Sans JP"', 'sans-serif'],
    },    },
  },
  plugins: [
    require('daisyui'),
  ],
}