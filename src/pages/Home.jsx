// Home.js
import React from "react";
import { CardGallery } from "../components/CardGallery";
import { Steps } from "../components/Steps";
import { TestimonialCarousel } from "../components/TestimonialCarousel/TestimonialCarousel.jsx";
import { CtaBanner } from "../components/CtaBanner/CtaBanner.jsx";
import { Hero } from "../components/Hero/Hero.jsx";
import { SocialProof } from "../components/SocialProof/SocialProof.jsx";
import ctaImage from "../assets/cta-banner.png";

const Home = () => {
  return (
    <div className="flex flex-col w-full py-16 gap-16 mb-12 bg-white">
      <Hero />
      <CardGallery />
      <SocialProof />
      <Steps />
      
      {/* <TestimonialCarousel /> */}
       <CtaBanner  />
      
    </div>
  );
};

export default Home;
