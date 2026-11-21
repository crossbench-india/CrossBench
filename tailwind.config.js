/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parliament: {
          950: '#060B14',
          900: '#0A1120',
          850: '#0E172B',
          800: '#13213C',
          700: '#1D3055',
        },
        slate: {
          850: '#151F30',
          750: '#26354D',
        },
        gold: {
          300: '#EBD5B3',
          400: '#DEC095',
          500: '#C5A880',
          600: '#A88D66',
          700: '#8A7250',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', '"Noto Sans Devanagari"', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
