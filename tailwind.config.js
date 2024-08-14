/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#1e0533',
        'custom-dark': '#110a1f',
      },
    },
  },
  plugins: [],
}

