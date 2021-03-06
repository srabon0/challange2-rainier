/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FF9494",
          secondary: "#FF797B",
          accent: "#FF7C65",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=coffee]"],
          primary: "#FF9494",
          secondary: "#FF797B",
          accent: "#FF7C65",
          neutral: "#3D4451",
         
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
         
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};