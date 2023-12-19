/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#F3F3FF",
        purple: "#3C3C8E",
        "pale-purple": "#D0D0FF",
        white: "#ffffff",
      },
      padding: {
        button: "30px 10px",
        "30.89px": "30.89px",
        "9.67px": "9.67px",
      },
      border: {
        "5px": "5px",
      },
      boxShadow: {
        button: "0 0 5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
