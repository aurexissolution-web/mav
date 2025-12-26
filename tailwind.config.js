/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.{ts,tsx,js,jsx}',
    './index.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0f172a',
          blue: '#2563eb',
          light: '#eff6ff',
          accent: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
};
