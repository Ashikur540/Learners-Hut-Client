/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#20B486",

          "secondary": "#047857",

          "accent": "#FFFAF5",

          "neutral": "#251825",

          "base-100": "#F6F7F7",

          "info": "#86B0F3",

          "success": "#29BC9A",

          "warning": "#BD6405",

          "error": "#e11d48",

        },
      },
      {
        dark: {

          "primary": "#20B486",

          "secondary": "#047857",

          "accent": "#FFFAF5",

          "neutral": "#251825",

          "base-100": "#F6F7F7",

          "info": "#86B0F3",

          "success": "#29BC9A",

          "warning": "#BD6405",

          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}
