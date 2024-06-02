/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
        IntegralCF: ["IntegralCF", "sans-serif"],
      },
      backgroundImage: {
        "Hero-bg": "url('/src/assets/Hero-bg.png')",
      },
    },
  },
  plugins: [],
};
