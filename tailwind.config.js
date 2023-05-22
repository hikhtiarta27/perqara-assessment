/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "cs-gray-dark": "#1E232B",
        "cs-gray": "#292E36",
      },
    },
    fontFamily: {
      sans: ["Montserrat"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};