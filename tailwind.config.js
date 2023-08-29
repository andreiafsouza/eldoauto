/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue: "#003153",
        bg: "rgb(8 47 73 )",
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
      boxShadow: {
        card: "2px 5px 5px rgba(36,36,36,0.25)",
      },
      fontFamily: {
        sans: ["source-sans-pro", "Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        "clamp-title": "clamp(2rem, 8vw, 6rem)",
        "clamp-sub": "clamp(1rem, 4vw, 3rem)",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
};
