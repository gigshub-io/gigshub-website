import React from "react";
import { Container } from "../../Container";
import logoIcon from "../../../assets/logoIcon.png";
import engineIcon from "../../../assets/engine-icon.png";
import saveIcon from "../../../assets/saveIcon.png";
import locationIcon from "../../../assets/locationIcon.png";
import linkIcon from "../../../assets/linkIcon.png";
import appVector from "../../../assets/appVector.png";
import adminIcon from "../../../assets/adminIcon.png";
import saveIconFilled from "../../../assets/saveIconFilled.png";
import homepageIcon from "../../../assets/homepageIcon.png";
import starsUnfilled from "../../../assets/starsUnfilled.png";
import starsFilled from "../../../assets/starsFilled.png";
import envelopIcon from "../../../assets/envelopIcon.png";
import airbnb from "../../../assets/airbnb.svg";

export const JobSummaryCard = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-10 relative">
        <div className="w-card1 h-cardJobSummary flex flex-col rounded-2xl rounded-b-3xl text-black bg-white relative">
          <div className="w-full h-cardHeader bg-dark-blue rounded-t-2xl flex items-center justify-between">
            <img
              src={logoIcon}
              className="h-logoIcon w-logoIcon ml-6"
              alt="GigsHub Logo Icon"
            />
            <img
              src={engineIcon}
              className="h-engineIcon w-engineIcon mr-6"
              alt="Engine Icon"
            />
          </div>
          <div className="flex justify-between items-start mt-5 px-6">
            <div className="flex items-center">
              <div>
                <img
                  src={airbnb}
                  className="w-orbitechLogo h-orbitechLogo rounded-lg flex items-center justify-center"
                  alt="Airbnb Icon"
                />
              </div>
              <div className="ml-4 flex flex-col text-left">
                <span className="text-sm text-purple">AIRBNB</span>
                <span className="text-lg font-semibold text-dark-blue">
                  Front-end developer
                </span>
              </div>
            </div>
            <div className="flex-grow flex justify-end">
              <img
                src={saveIcon}
                className="w-engineIcon h-engineIcon"
                alt="Save Icon"
              />
            </div>
          </div>

          <div className="flex items-center mt-5 px-5 text-light-liliac">
            <img src={locationIcon} className="h-5 w-5" alt="Location Icon" />
            <span className="ml-2 text-xs">Barcelona, Spain</span>
            <img src={linkIcon} className="h-5 w-5 ml-6" alt="Link Icon" />
            <a
              href="https://www.airbnb.com"
              className="ml-2 text-xs underline text-light-liliac"
            >
              https://www.airbnb.com
            </a>
          </div>

          {/* Horizontal Line */}
          <div className="w-full mt-5">
            <hr className="border-light-liliac opacity-20 border-t-1" />
          </div>

          {/* Description Section */}
          <div className="w-textBox h-textBoxJobSummary rounded-2xl mt-5 mx-auto px-2 shadow-custom-inner shadow-custom-drop">
            <p className="pt-4 px-4 text-xs dark-purple text-left font-light">
              Airbnb is a global leader in hospitality services.
            </p>

            <p className="px-4 mt-2 text-xs dark-purple text-left font-semibold font-light">
              Requirements:
            </p>
            <ul className="px-4 mb-4 text-xs dark-purple text-left list-disc list-inside font-light">
              <li>Bachelor's degree in Computer Science or related field</li>
              <li>Proficiency in HTML, CSS, and JavaScript</li>
              <li>Experience with React, Angular, or Vue.js</li>
              <li>Strong problem-solving skills</li>
              <li>Excellent communication and teamwork abilities</li>
            </ul>

            <p className="px-4 mt-2 text-xs dark-purple text-left font-semibold font-light">
              Benefits:
            </p>
            <ul className="px-4 pb-4 text-xs dark-purple text-left list-disc list-inside font-light">
              <li>80k EUR annual salary</li>
              <li>PTO</li>
              <li>Health insurance</li>
              <li>Gym membership</li>
            </ul>
          </div>

          {/* Apply Button Section */}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-applyButton h-applyButton mt-4 py-6 px-1 rounded-full border-2 border-soft-liliac">
              <button className="flex items-center justify-center w-applyButton h-applyButton bg-dark-blue rounded-3xl">
                <span className="mr-2 h-4 w-4">
                  <img src={starsUnfilled} alt="Stars Icon" />
                </span>
                <span className="text-xs text-white font-light">Apply</span>
              </button>
            </div>

            {/* Icons next to the Apply button */}
            <div className="flex items-center ml-3 mr-3 mt-4 relative">
              <img src={envelopIcon} alt="Envelop Icon" className="h-8 w-8" />
              <img
                src={starsFilled}
                alt="Stars Icon"
                className="h-4 w-4 absolute -right-3"
              />
            </div>
          </div>

          {/* Bottom Icons on the App Vector */}
          {/* App Vector at Bottom */}
          <div className="absolute bottom-0 w-full h-appVector">
            <img
              src={appVector}
              className="w-full h-full object-cover"
              alt="App Vector"
            />
          </div>
          <div className="absolute bottom-0 w-full h-appVector flex justify-center items-center gap-20 pb-5">
            <img
              src={homepageIcon}
              className="h-10 w-10 mr-1 -mt-4"
              alt="Homepage Icon"
            />
            <img
              src={saveIconFilled}
              className="h-7 w-7"
              alt="Save Icon Filled"
            />
            <img src={adminIcon} className="h-7 w-7" alt="Admin Icon" />
          </div>
        </div>
      </div>
    </Container>
  );
};
