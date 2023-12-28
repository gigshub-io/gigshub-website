import React from "react";
import firstImage from "../../assets/first-image.svg";
import secondImage from "../../assets/second-image.png";
import thirdImage from "../../assets/third-image.png";
import fourthImage from "../../assets/fourth-image.svg";
import { Button } from "../Button";
import { Container } from "../Container";

export const Hero = () => {
  return (
    <Container>
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
        <div className="grid-cols-2 gap-2.5 col-span-3">
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
    </Container>
  );
};
