module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': { 'raw': '(min-width: 1440px)'},
      },
      boxShadow: {
          'light-neumorphism-2xl': '-12px -12px 24px rgba(255, 255, 255, 1), 12px 12px 24px rgba(206, 212, 219, 1)',
          'light-neumorphism-xl': '-9px -9px 18px rgba(255, 255, 255, 1), 9px 9px 18px rgba(200, 207, 216, 0.9)',
          'light-neumorphism-l': '-4px -4px 8px rgba(255, 255, 255, 1), 4px 4px 8px rgba(200, 207, 216, 0.9)',
          'light-inner-neumorphism-l': 'inset -2px -2px 4px rgba(255, 255, 255, 1), inset 2px 2px 4px rgba(200, 207, 216, 0.9)',
          'light-inner-neumorphism-xl': 'inset -4px -4px 8px rgba(255, 255, 255, 1), inset 4px 4px 8px rgba(200, 207, 216, 0.9)',
          'dark-neumorphism-2xl': '-12px -12px 24px rgba(20, 30, 55, 1), 12px 12px 24px rgba(11, 15, 26, 0.9)',
          'dark-neumorphism-xl': '-9px -9px 18px rgba(20, 30, 55, 1), 9px 9px 18px rgba(11, 15, 26, 0.9)',
          'dark-neumorphism-l': '-4px -4px 8px rgba(20, 30, 55, 1), 4px 4px 8px rgba(11, 15, 26, 0.9)',
          'dark-inner-neumorphism-l': 'inset -2px -2px 4px rgba(20, 30, 55, 1), inset 2px 2px 4px rgba(11, 15, 26, 0.9)',
          'dark-inner-neumorphism-xl': 'inset -4px -4px 8px rgba(20, 30, 55, 1), inset 4px 4px 8px rgba(11, 15, 26, 0.9)',
          
      },
    },
  },
  plugins: [],
}
