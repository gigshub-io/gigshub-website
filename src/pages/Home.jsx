// Home.js
import React from "react";
import TitleComponent from "../components/Title";
import firstImage from "../assets/first-image.png";
import secondImage from "../assets/second-image.png";
import thirdImage from "../assets/thrid-image.png";
import fourthImage from "../assets/fourth-image.png";
import { Button } from "../components/Button/Button";

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-off-white p-16">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col">
              <TitleComponent />
              <p className="font-sans">
                We automate applications, tailor CVs, and ensure ideal Matches,
                so you can focus on what truly matters - nailing interviews.
              </p>
              <div className="flex">
                <Button>Get Hired</Button>
              </div>
            </div>

            <div className="banner-container">
              <div className="flex flex-end image-container">
                <img src={firstImage} alt="People laughing with pcs" />
                <img src={secondImage} alt="Girls laughing with pc" />
              </div>
              <div className="flex flex-end image-container">
                <img src={thirdImage} alt="Purple rectangle" />
                <img src={fourthImage} alt="Purple rectangle" />
              </div>
            </div>
            <div className="flex flex-start image-container">
              <div className="flex flex-end image-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
