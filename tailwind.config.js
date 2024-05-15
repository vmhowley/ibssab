/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: ['selector'],
  presets: [keepPreset],
  theme: {
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
