/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // Incluye todos los archivos relevantes
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors:{
        'ColorDiscordFondo':'#1E2124',
        'SecondColorDiscord':'#141618'
      }
    },
  },
  plugins: [],
};

