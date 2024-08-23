import React from "react";
import { Container } from "../../Container";
import engineIcon from "../../../assets/engine-icon.png";
import vector from "../../../assets/Vector.png";
import { ReactComponent as PlanetIcon } from "../../../assets/planetIcon.svg";
import saveIcon from "../../../assets/saveIcon.png";
import locationIcon from "../../../assets/locationIcon.png";
import linkIcon from "../../../assets/linkIcon.png";
import labelIcon from "../../../assets/labelcon.png";
import appVector from "../../../assets/appVector.png";
import adminIcon from "../../../assets/adminIcon.png";
import saveIconFilled from "../../../assets/saveIconFilled.png";
import homepageIcon from "../../../assets/homepageIcon.png";

export const CompanyInfoCard = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-10 relative">
        <div className="w-card1 h-cardHero flex flex-col rounded-2xl rounded-b-3xl shadow-lg shadow-card-1 shadow-card-2 text-black bg-white relative ">
          <div className="w-full h-cardHeader bg-dark-blue rounded-t-2xl flex items-center justify-between">
            <img
              src={vector}
              className="h-vectorArrow w-vectorArrow ml-6"
              alt="Vector Icon"
            />
            <img
              src={engineIcon}
              className="h-engineIcon w-engineIcon mr-6"
              alt="Engine Icon"
            />
          </div>
          <div className="flex justify-between items-start mt-5 px-6">
            <div className="flex items-center">
              <div
                className="w-orbitechLogo h-orbitechLogo rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(321.34deg, #031A2D -28.32%, #0A5593 95.06%)",
                }}
              >
                <PlanetIcon className="w-10 h-10" />
              </div>
              <span className="ml-4 text-lg font-semibold text-dark-blue">
                ORBITECH
              </span>
            </div>
            <div className="flex-grow flex justify-end">
              <img
                src={saveIcon}
                className="w-engineIcon h-engineIcon"
                alt="Save Icon"
              />
            </div>
          </div>

          <div className="flex items-center mt-5 px-6 text-light-liliac">
            <img src={locationIcon} className="h-5 w-5" alt="Location Icon" />
            <span className="ml-2 text-xs">Bremen, Germany</span>
            <img src={linkIcon} className="h-5 w-5 ml-6" alt="Link Icon" />
            <a
              href="https://orbitech.com"
              className="ml-2 text-xs underline text-light-liliac"
            >
              https://orbitech.com
            </a>
          </div>

          {/* Horizontal Line */}
          <div className="w-full mt-5">
            <hr className="border-light-liliac opacity-20 border-t-1" />
          </div>

          {/* Description Section */}
          <div className="w-textBox h-textBox rounded-2xl mt-5 mx-auto px-2 shadow-custom-inner shadow-custom-drop">
            <p className="p-4 text-xs dark-purple text-left font-light">
              Orbitech is a satellite operations application built on top of the
              Leanspace platform. Navigating through the complexities of
              crafting satellite management strategies and building ground
              segment software from scratch, the goal of Orbitech is to allow
              the management of a constellation of 20 satellites, and capture
              images of specific locations on Earth.
            </p>
          </div>

          {/* Labels Section */}
          <div className="flex justify-center gap-2 mt-5 px-8">
            <div className="flex items-center justify-center bg-soft-liliac rounded-lg py-2 px-2">
              <img src={labelIcon} alt="Label Icon" className="h-4 w-4 mr-1" />
              <span className="text-xs text-dark-purple">Engineering</span>
            </div>
            <div className="flex items-center justify-center bg-soft-liliac rounded-lg py-2 px-2">
              <img src={labelIcon} alt="Label Icon" className="h-4 w-4 mr-1" />
              <span className="text-xs text-dark-purple">Space</span>
            </div>
            <div className="flex items-center justify-center bg-soft-liliac rounded-lg py-2 px-2">
              <img src={labelIcon} alt="Label Icon" className="h-4 w-4 mr-1" />
              <span className="text-xs text-dark-purple">Software</span>
            </div>
          </div>

          {/* Company Schema */}
          <div className="w-textBox rounded-2xl mt-5 mx-auto py-3 shadow-sm border border-light-liliac/20 relative">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-[calc(55%+1rem)] left-1/2 transform -translate-x-1/2 w-px bg-light-liliac/20"></div>
            <div className="grid grid-cols-2 gap-y-2 text-center relative">
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <p className="text-xxs text-light-liliac tracking-wide">
                    YEAR OF FOUNDING
                  </p>
                  <p className="text-xs font-semibold text-dark-purple">2023</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <p className="text-xxs text-light-liliac tracking-wide">
                    EMPLOYEES
                  </p>
                  <p className="text-xs font-semibold text-dark-purple">
                    &lt;10
                  </p>
                </div>
              </div>

              {/* Centered horizontal line */}
              <div className="col-span-2 mt-2">
                <hr className="border-light-liliac opacity-20" />
              </div>
              <div className="col-span-2">
                <p className="text-xxs text-light-liliac tracking-wide">
                  GENDER BREAKDOWN
                </p>
                <div className="flex justify-center gap-4">
                  <p className="text-xs font-semibold text-dark-purple">
                    <span className="text-light-liliac">♀</span> 40%
                  </p>
                  <p className="text-xs font-semibold text-dark-purple">
                    <span className="text-light-liliac">♂</span> 60%
                  </p>
                </div>
              </div>
              {/* Centered horizontal line */}
              <div className="col-span-2 mt-2">
                <hr className="border-light-liliac opacity-20" />
              </div>
              <div className="col-span-2">
                <p className="text-xxs text-light-liliac tracking-wide">
                  REVENUE
                </p>
                <p className="text-xs font-semibold text-dark-purple">
                  $50 million
                </p>
              </div>
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
