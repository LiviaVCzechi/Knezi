/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#d9e2f5',
          200: '#b5c7eb',
          300: '#839fdc',
          400: '#5a7ccf',
          500: '#3a5fc5',
          600: '#2e4aa3',
          700: '#263c85',
          800: '#1E3A8A', // primary
          900: '#192d69',
        },
        burgundy: {
          50: '#fdf2f6',
          100: '#fce7ee',
          200: '#f9cfdd',
          300: '#f6a6c1',
          400: '#f07ba5',
          500: '#e54c81',
          600: '#d22d61',
          700: '#b01d49',
          800: '#9F1239', // secondary
          900: '#7d1230',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Merriweather"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};