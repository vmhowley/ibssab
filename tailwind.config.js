/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF595A'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
