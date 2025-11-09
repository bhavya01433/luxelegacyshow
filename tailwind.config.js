/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        goldSoft: '#ffcc00',
        dark: '#0a0a0a',
        accent: '#222222',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      keyframes: {
        fadeUpGlow: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px) scale(0.96)',
            filter: 'blur(6px) brightness(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0) brightness(1)',
          },
        },
      },
      animation: {
        fadeUpGlow: 'fadeUpGlow 0.9s ease forwards',
      },
    },
  },
  plugins: [],
  extend: {
    transitionTimingFunction: {
      'luxury': 'cubic-bezier(0.23, 1, 0.32, 1)',
    },
  }
  
};
