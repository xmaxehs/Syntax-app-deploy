/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html" , "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryWhite: "#e9e7e8",
        graySecondary: "#e9e7e850",
        primaryPurple: "#5e59f7",
        navbarColor: "#7d7e8f",
        cardColor: "#2b3054",
        mainBg: "#1f1f1f"
      },
      fontFamily: {
        "main" : ['DM Sans', 'sans-serif'],
      },
    },
    screens:{
      "xs": {"max" : "480px"},
      "sm": {"max" : "620px"},
      "md": {"max" : "768px"},
      "lg": {"max" : "1200px"},
    }
  },
  plugins: [],
}

