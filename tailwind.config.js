/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'cold': '#E0F7FA',
          'cool': '#B3E0F2',
          'mild': '#FFF9C4',
          'warm': '#FFCCBC',
          'hot': '#FFAB91',
        },
        animation: {
          'weather-fade': 'weatherFade 0.5s ease-in-out',
        },
        keyframes: {
          weatherFade: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          }
        }
      },
    },
    plugins: [],
  }