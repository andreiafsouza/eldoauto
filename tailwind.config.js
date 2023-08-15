/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue: "#003153",
        accent: {
          500: "#8BD8F8",
          opacity: "#8bd8f8b3",
        },
        gray: "#e6e6e9",
        shadow: "#24212440",
        light: "#ffffff26",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
