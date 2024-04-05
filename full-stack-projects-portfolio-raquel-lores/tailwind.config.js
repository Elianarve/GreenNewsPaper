/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light blue':'#243cff',
        'azul-oscuro':'#0d1b3e',
      }
    },
  },
  plugins: [require('@tailwind/forms'),],
}