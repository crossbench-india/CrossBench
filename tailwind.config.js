/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#084D16',         // Deep forest green from 'CROSS'
          'green-light': '#0F7324',
          'green-dark': '#05340E',
          'green-soft': '#EAF6EC',  // Soft pastel green for chips
          pink: '#EA005C',          // Vibrant magenta/pink from 'BENCH'
          'pink-hover': '#D00052',
          'pink-soft': '#FDF2F7',   // Soft pastel pink for chips
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Devanagari"', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
        'hindi-display': ['"Rozha One"', '"Noto Sans Devanagari"', 'serif'],
        'hindi-heading': ['"Mukta"', '"Noto Sans Devanagari"', 'sans-serif'],
        'hindi-serif': ['"Martel"', '"Noto Sans Devanagari"', 'serif'],
      },
      boxShadow: {
        'card': '0 2px 12px -2px rgba(0, 0, 0, 0.06), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 24px -4px rgba(8, 77, 22, 0.08), 0 8px 16px -4px rgba(234, 0, 92, 0.06)',
      }
    },
  },
  plugins: [],
}
