// Home.js
import React from "react";
import firstImage from "../assets/first-image.png";
import secondImage from "../assets/second-image.png";
import thirdImage from "../assets/thrid-image.png";
import fourthImage from "../assets/fourth-image.png";
import { Button } from "../components/Button/Button";

const Home = () => {
  return (
    <div className="flex flex-row justify-between w-full bg-off-white px-36 py-16 content-around">
      <div className="flex flex-col gap-6 w-textContainer mt-16">
        <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wide">
          Turbocharge your job search with{" "}
          <span className="text-light-purple">GigsHub</span>
        </div>
        <p className="font-sans text-lg font-normal leading-7 text-dark-purple">
          We automate applications, tailor CVs, and ensure ideal matches, so you
          can focus on what truly matters - nailing interviews.
        </p>
        <div className="flex pt-4">
          <Button>Get Hired</Button>
        </div>
      </div>
      <div className="flex gap-2.5">
        <div className="flex flex-col gap-2.5">
          <img
            src={firstImage}
            alt="Purple rectangle"
            className="ml-2 h-imageContainer w-imageContainer"
          />
          <img
            src={thirdImage}
            alt="Girl laughing with pc"
            className="ml-2 h-imageContainer w-imageContainer"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <img
            src={secondImage}
            alt="People laughing with pcs"
            className="mr-2 h-imageContainer w-imageContainer"
          />
          <img
            src={fourthImage}
            alt="Purple rectangle"
            className="mr-2 h-imageContainer w-imageContainer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
