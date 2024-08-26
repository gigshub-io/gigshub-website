import React from "react";
import { Container } from "../../Container";
import engineIcon from "../../../assets/engine-icon.png";
import vector from "../../../assets/Vector.png";
import saveIcon from "../../../assets/saveIcon.png";
import locationIcon from "../../../assets/locationIcon.png";
import linkIcon from "../../../assets/linkIcon.png";
import labelIcon from "../../../assets/labelcon.png";
import appVector from "../../../assets/appVector.png";
import adminIcon from "../../../assets/adminIcon.png";
import saveIconFilled from "../../../assets/saveIconFilled.png";
import homepageIcon from "../../../assets/homepageIcon.png";
import airbnb from "../../../assets/airbnb.svg";

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
              <div>
                <img
                  src={airbnb}
                  className="w-orbitechLogo h-orbitechLogo rounded-lg flex items-center justify-center"
                  alt="Airbnb Icon"
                />
              </div>
              <span className="ml-4 text-lg font-semibold text-dark-blue">
                AIRBNB
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
          <div className="w-textBox h-textBox rounded-2xl mt-5 mx-auto px-2 shadow-custom-inner shadow-custom-drop">
            <p className="p-4 text-xs dark-purple text-left font-light">
              Airbnb is a global marketplace built on connecting people through
              hospitality and trust. Navigating the complexities of managing
              travel accommodations and crafting unique experiences, Airbnb's
              goal is to offer travelers diverse lodging options, from private
              homes to boutique hotels, and facilitate meaningful connections
              between hosts and guests worldwide.
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
              <span className="text-xs text-dark-purple">Hospitality</span>
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
                  <p className="text-xs font-semibold text-dark-purple">2008</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <p className="text-xxs text-light-liliac tracking-wide">
                    EMPLOYEES
                  </p>
                  <p className="text-xs font-semibold text-dark-purple">
                    &lt;5000
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
                    <span className="text-light-liliac">♀</span> 51%
                  </p>
                  <p className="text-xs font-semibold text-dark-purple">
                    <span className="text-light-liliac">♂</span> 49%
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
                  $10.5 billion
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
