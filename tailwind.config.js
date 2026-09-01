/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'], // For large oversized typography, we'll use heavy weights and tight tracking
      },
      colors: {
        brand: {
          dark: '#030303',      // Deepest charcoal
          black: '#000000',
          grey: '#111111',      // Darkest grey
          surface: '#1c1c1e',   // Premium dark surface
          lightGrey: '#f5f5f7', // Apple soft grey
          white: '#ffffff',
          primary: '#ff2a70',   // Magenta
          accent: '#e61b5c',    // Deep Magenta
        }
      },
      boxShadow: {
        'premium': '0 20px 40px -10px rgba(0,0,0,0.05)',
        'premium-hover': '0 30px 50px -12px rgba(255,42,112,0.1)',
        'peak': '0 35px 70px -12px rgba(255,42,112,0.15)',
        'premium-dark': '0 30px 60px -15px rgba(0,0,0,0.6)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'neon': '0 0 20px 0 rgba(255,42,112, 0.3)',
      },
      letterSpacing: {
        tighter: '-.04em',
        tightest: '-.06em',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
      }
    },
  },
  plugins: [],
}
