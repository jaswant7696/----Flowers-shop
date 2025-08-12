/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "gilroy":"gilroy_med"
      },
colors:{
black:{
  black_header:"#121212",
},
white:{
  white_color:"#FFFFFF",
},
gray:{
  gray_color:"#808080",
  lightgray_color: "#D2D2D7",
  darkgray_color:"#424245",
  extralight_color:"#F5F5F7"
},


}


    },
  },
  plugins: [],


}
