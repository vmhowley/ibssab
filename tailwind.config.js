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
      animation: {
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        }
      }
    },
  },
  variants: {
    extend: {
        opacity: ['disabled'],
    },
},
  plugins: [
    require('@tailwindcss/forms')
  ]
}
