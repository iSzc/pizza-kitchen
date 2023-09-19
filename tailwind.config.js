/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      w1800: { max: "1800px" },
      w1440: { max: "1440px" },
      w1280: { max: "1280px" },
      w1240: { max: "1240px" },
      w1024: { max: "1024px" },
      w960: { max: "960px" },
      w768: { max: "768px" },
      w640: { max: "640px" },
      w600: { max: "600px" },
      w550: { max: "550px" },
      w480: { max: "480px" },
      w425: { max: "425px" },
      w375: { max: "375px" },
      w320: { max: "320px" },
    },
    fontFamily: {
      Overpass: ['"Overpass"', "sans-serif"],
    },
    extend: {
      colors: {
        blackTheme: "#121417",
      },
      boxShadow: {
        customShadow: "0 3px 30px -15px rgba(0, 0, 0, 0.3)",
        customShadowBox: "0 1px 30px 10px rgba(0, 0, 0, .5)",
      },
      backgroundImage: {
        footerLight: "url('./src/assets/images/ingredients-light.png')",
        footerDark: "url('./src/assets/images/ingredients-dark.png')",
        aboutUsImg: "url('./src/assets/images/about-us-img.jpg')",
      },
    },
  },
  plugins: [],
};
