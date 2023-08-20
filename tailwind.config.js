/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue: "#003153",
        accent: {
          opacity: "#8bd8f8b3",
        },
        gray: "#e6e6e9",
        shadow: "#24212440",
        light: "#ffffff26",
      },
      dropShadow: {
        text: "2px 3px 4px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
