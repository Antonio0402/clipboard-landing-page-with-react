/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'xl': '1440px',
      },
      fontFamily: {
        'sans': ['var(--ff-primary)', ... defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          dark: 'hsl(var(--primary-dark) / <alpha-value>)',
          light: 'hsl(var(--primary-light) / <alpha-value>)',
        },
        grayish: {
          DEFAULT: 'hsl(var(--grayish-blue) / <alpha-value>)',
          blue: 'hsl(var(--dark-grayish-blue) / <alpha-value>)',
        },
      },
      letterSpacing: {
        'tight-100': '-0.01em',
        'tight-75': '-0.0075em',
        'normal-50': '0.005em',
        'normal-75': '0.0075em',
        'wider-30': '0.03em',
      }
    },
  },
  plugins: [],
}
