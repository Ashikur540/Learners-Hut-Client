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
          "neutral-80": "#393939",

          "base-100": "#F6F7F7",

          "info": "#86B0F3",




        },
      },
      {
        dark: {

          "primary": "#20B486",

          "secondary": "#047857",

          "accent": "#FFFAF5",

          "neutral": "#ffff",

          "neutral-80": "#EEF0F1",

          "base-100": "#0D0A21",

          "info": "#86B0F3",

        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}
