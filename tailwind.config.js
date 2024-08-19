/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,PDF}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],
        play: ['Playwrite PE', 'serif']
      },
    },
  },
  plugins: [],
}