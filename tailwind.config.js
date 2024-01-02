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
        "dark-purple": "#1E1E53",
        "dark-grey": "#505050",
        "light-purple": "#7575E5",
        "dark-blue": "#2C2C70",
      },
      padding: {
        button: "30px 10px",
        "30.89px": "30.89px",
        "9.67px": "9.67px",
      },
      boxShadow: {
        button: "0 0 5px rgba(0, 0, 0, 0.5)",
      },
      width: {
        container: "1200px",
        textContainer: "550px",
        textContainer2: "1000px",
        shortTextContainer: "480px",
        headingContainer: "768px",
        card: "346px",
        stepContainer: "528px",
        testimonialContainer: "834px",
        ctaBannerImage: "660px",
        heroImage: "500px",
      },
      height: {
        imageContainer: "252px",
        card: "241px",
        testimonialContainer: "400px",
        heroImage: "500px",
        aboutUsBanner: "800px",
      },
      lineHeight: {
        textHero: "5.375rem",
        headingCardsContainer: "3.6rem",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        ctaBanner: "32px",
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [],
};
