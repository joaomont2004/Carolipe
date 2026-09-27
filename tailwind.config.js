/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1CA7E0',
          50: '#EAF8FE',
          100: '#D2EFFC',
          200: '#A6DFFA',
          300: '#79CFF7',
          400: '#4DBEF2',
          500: '#1CA7E0',
          600: '#1585B4',
          700: '#0F6488',
          800: '#0A425C',
          900: '#052130'
        },
        secondary: {
          DEFAULT: '#0B3B60',
          light: '#134D7C',
          dark: '#062A45'
        },
        accent: {
          DEFAULT: '#E94F7B',
          dark: '#C93862'
        },
        ink: '#0E2A3B'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(11, 59, 96, 0.18)',
        card: '0 8px 24px -10px rgba(11, 59, 96, 0.15)'
      },
      borderRadius: {
        xl2: '20px'
      }
    },
  },
  plugins: [],
}
