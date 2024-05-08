/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";

export default {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [keepPreset],
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
