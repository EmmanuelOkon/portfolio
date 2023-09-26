/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      rose: "#BE123C",
      deepRose: "#B91C1C",
      lightGray: "#9CA3AF",
      midGray: "#666666",
      deepGray: "#111827",
      white: "#fff",
      offWhite: "#F8E7EB",
      black: "#000",
      offBlack: "#333333",
      dustBlack: "#404040",
      blue: "#041F31",
      Blue: "#02133F",
      orange: "#EF7C00",
      deepBlue: "#171930",
      fadeOrange: "#F3D1BF",
      deepOrange: "#F9A73E",
      fadeGreen: "#27B376",
      deepGreen: "#006F3C",
      offwhite: "#F1F0FA",
      lightBlue: "#E6F6FF",
      grey: "#3C4858",
      lightGrey: "#999999",
      red: "#BF212F",
    },
    fontFamily: {
      raleway: ["Raleway", "sans"],
      poppins: ["Poppins", "sans"],
      roboto: ["Roboto", "sans"],
    },
    
  },
  plugins: [],
} 