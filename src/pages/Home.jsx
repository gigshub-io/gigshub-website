// Home.js
import React from "react";
import firstImage from "../assets/first-image.png";
import secondImage from "../assets/second-image.png";
import thirdImage from "../assets/thrid-image.png";
import fourthImage from "../assets/fourth-image.png";
import { Button } from "../components/Button/Button";

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-off-white p-32">
      <div className="flex flex-row w-container justify-between">
        <div className="flex flex-col gap-6 w-textContainer">
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
        <div className="">
          <div className="">
            <img src={firstImage} alt="Purple rectangle" className="" />
            <img src={thirdImage} alt="Girl laughing with pc" className="" />
          </div>
          <div className="">
            <img src={secondImage} alt="People laughing with pcs" />
            <img src={fourthImage} alt="Purple rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
