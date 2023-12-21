// Home.js
import React from "react";
import { CardGallery } from "../components/CardGallery";
import { Steps } from "../components/Steps.jsx";
import { Container } from "../components/Container";
import { TestimonialCarousel } from "../components/TestimonialCarousel/TestimonialCarousel.jsx";
import { CtaBanner } from "../components/CtaBanner/CtaBanner.jsx";
import { Hero } from "../components/Hero/Hero.jsx";
import { SocialProof } from "../components/SocialProof/SocialProof.jsx";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col w-full py-16 gap-24">
        <Hero />
        <SocialProof />
        <CardGallery />
        <Steps />
        <TestimonialCarousel />
        <CtaBanner />
      </div>
    </Container>
  );
};

export default Home;
