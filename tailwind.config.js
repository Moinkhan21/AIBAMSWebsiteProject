/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d5ff',
          300: '#a4b8ff',
          400: '#8293ff',
          500: '#0d3d83', // Main navy blue
          600: '#0b3470',
          700: '#092b5d',
          800: '#07224a',
          900: '#051937',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#111827', // Main black
          600: '#0f1523',
          700: '#0d121e',
          800: '#0b0f1a',
          900: '#090c15',
        },
      },
    },
  },
  plugins: [],
} 