/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a172a',
          lighter: '#0a192f',
          card: 'rgba(10, 25, 47, 0.7)',
        },
        accent: {
          indigo: '#6366f1',
          violet: '#8b5cf6',
          teal: '#64FFDA',
        },
        typography: {
          lightest: '#CCD6F6',
          slate: '#A8B2D1',
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}