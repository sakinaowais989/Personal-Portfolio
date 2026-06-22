/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-navy': '#031826',
        'neon-cyan': '#00C2FF',
        'electric-blue': '#008DFF',
        'soft-aqua': '#59D8FF',
        'pink-cta': '#FF2E88',
        'text-light': '#A9B7C6',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 25px #00C2FF',
        'neon-lg': '0 0 50px #00C2FF',
        'neon-pink': '0 0 25px #FF2E88',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}