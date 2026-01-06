/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: 'rgb(var(--ocean-50) / <alpha-value>)',
          100: 'rgb(var(--ocean-100) / <alpha-value>)',
          200: 'rgb(var(--ocean-200) / <alpha-value>)',
          300: 'rgb(var(--ocean-300) / <alpha-value>)',
          400: 'rgb(var(--ocean-400) / <alpha-value>)',
          500: 'rgb(var(--ocean-500) / <alpha-value>)',
          600: 'rgb(var(--ocean-600) / <alpha-value>)',
          700: 'rgb(var(--ocean-700) / <alpha-value>)',
          800: 'rgb(var(--ocean-800) / <alpha-value>)',
          900: 'rgb(var(--ocean-900) / <alpha-value>)',
          950: 'rgb(var(--ocean-950) / <alpha-value>)',
        },
        glass: {
          surface: 'rgb(var(--glass-surface) / <alpha-value>)',
          border: 'rgb(var(--glass-border) / <alpha-value>)',
          highlight: 'rgb(var(--glass-highlight) / <alpha-value>)',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--glass-border) / 0.8), 0 30px 80px -40px rgb(var(--ocean-400) / 0.45)',
        glass: '0 0 0 1px rgb(var(--glass-border) / 0.85), 0 20px 60px -40px rgb(0 0 0 / 0.45)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

