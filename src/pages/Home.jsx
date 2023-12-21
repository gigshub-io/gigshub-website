// Home.js
import React from "react";
import firstImage from "../assets/first-image.svg";
import secondImage from "../assets/second-image.png";
import thirdImage from "../assets/third-image.png";
import fourthImage from "../assets/fourth-image.svg";
import relumeLogo from "../assets/relume-logo.png";
import webflowLogo from "../assets/webflow-logo.png";
import { CardGallery } from "../components/CardGallery";
import { Button } from "../components/Button/Button";
import { Steps } from "../components/Steps.jsx/Steps";
import { Container } from "../components/Container";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col w-full py-16 gap-24">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-6 w-textContainer mt-16">
            <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wide">
              Turbocharge your job search with{" "}
              <span className="text-light-purple">GigsHub</span>
            </div>
            <p className="font-sans text-lg font-normal leading-7 text-dark-purple">
              We automate applications, tailor CVs, and ensure ideal matches, so
              you can focus on what truly matters - nailing interviews.
            </p>
            <div className="flex pt-4">
              <Button>Get Hired</Button>
            </div>
          </div>
          <div className="flex flex-row gap-2.5">
            <div className="flex flex-col gap-2.5">
              <img
                src={firstImage}
                alt="Purple rectangle"
                className="h-imageContainer w-imageContainer"
              />
              <img
                src={thirdImage}
                alt="Girl laughing with pc"
                className="h-imageContainer w-imageContainer"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <img
                src={secondImage}
                alt="People laughing with pcs"
                className="h-imageContainer w-imageContainer"
              />
              <img
                src={fourthImage}
                alt="Purple rectangle"
                className="h-imageContainer w-imageContainer"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 py-10">
          <p className="font-sans text-lg font-normal leading-7 text-dark-purple">
            Trusted by the world's best companies
          </p>
          <div className="flex flex-row gap-12">
            <img src={webflowLogo} alt="People laughing with pcs" />
            <img src={relumeLogo} alt="People laughing with pcs" />
            <img src={webflowLogo} alt="People laughing with pcs" />
            <img src={relumeLogo} alt="People laughing with pcs" />
            <img src={webflowLogo} alt="People laughing with pcs" />
            <img src={relumeLogo} alt="People laughing with pcs" />
          </div>
        </div>
        <CardGallery />
        <Steps />
      </div>
    </Container>
  );
};

export default Home;
