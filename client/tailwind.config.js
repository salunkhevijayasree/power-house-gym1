/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gymDark: "#0C0D10",
        gymCard: "#1A1D24",
        gymBorder: "#2E3440",
        amberPrimary: "#FF6B00",
        goldSecondary: "#FFB800",
        textPrimary: "#F8FAFC",
        textMuted: "#94A3B8",
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        subheading: ['"Montserrat"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glow-amber': '0 0 25px -5px rgba(255, 107, 0, 0.4)',
        'glow-gold': '0 0 25px -5px rgba(255, 184, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
