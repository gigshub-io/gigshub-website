/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: "1200px",
    },
    extend: {
      colors: {
        "off-white": "#F3F3FF",
        purple: "#3C3C8E",
        "pale-purple": "#D0D0FF",
        white: "#ffffff",
        "dark-purple": "#1E1E53",
        "dark-grey": "#505050",
        "washed-purple": "#ADADFF",
        "light-purple": "#7575E5",
        "dark-blue": "#2C2C70",
        "lime-green": "#D7F77C",
        "semi-dark-purple": "#4D4DAB",
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
        textContainer: "550px",
        textContainer2: "800px",
        textContainer3: "830px",
        shortTextContainer: "480px",
        headingContainer: "768px",
        card: "246px",
        card1: "346px",
        card2: "200px",
        stepContainer: "528px",
        testimonialContainer: "834px",
        ctaBannerImage: "660px",
        heroImage: "500px",
        teamImage: "400px",
        socialMediaIcon: "24px",
        pricingButtons: "160px",
        pricingCard: "416px",
        accordion: "730px",
        contactUsForm: "620px",
        input: "300px",
        featuredBlogPost: "970px",
        blogPostCardVer: "470px",
        blogPostCardHor: "632px",
        blogPostCardHorImg: "300px",
        blogPostCardHorTxt: "300px",
        blogCategoriesMenu: "240px",
        arrowDownWhite: "32px",
        paragraph: "620px",
      },
      height: {
        logo: "34px",
        imageContainer: "252px",
        card: "241px",
        testimonialContainer: "400px",
        heroImage: "500px",
        aboutUsBanner: "800px",
        contactUsMessage: "180px",
        blogPostCardVer: "300px",
        blogPostCardHorImg: "250px",
        arrowDownWhite: "32px",
      },
      lineHeight: {
        textHero: "5.375rem",
        textHero2: "3.375rem",
        headingCardsContainer: "3.6rem",
        aboutUsBanner: "3rem",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        ctaBanner: "32px",
      },
      listStyleImage: {
        checkmark: 'url("assets/check-icon2.svg")',
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [],
};
