import React from "react";
import { Container } from "../../Container";
import logoIcon from "../../../assets/logoIcon.png";
import engineIcon from "../../../assets/engine-icon.png";
import appVector from "../../../assets/appVector.png";
import adminIcon from "../../../assets/adminIcon.png";
import saveIconFilled from "../../../assets/saveIconFilled.png";
import homepageIcon from "../../../assets/homepageIcon.png";
import closeIcon from "../../../assets/closeIcon.png";
import copyIcon from "../../../assets/copyIcon.png";
import magicWandIcon from "../../../assets/magicWandIcon.png";
import airbnb from "../../../assets/airbnb.svg";

export const MessageHR = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-10 relative">
        <div className="w-card1 h-cardHRMessage flex flex-col rounded-2xl rounded-b-3xl shadow-lg shadow-card-1 shadow-card-2 text-black bg-white relative ">
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
                <span className="text-sm text-purple">AIRBNB CEO</span>
                <span className="text-lg font-semibold text-dark-blue">
                  Brian Chesky
                </span>
              </div>
            </div>
            <div className="flex-grow flex justify-end">
              <img src={closeIcon} className="w-6 h-6" alt="Save Icon" />
            </div>
          </div>

          {/* Description Section */}
          <div className="w-textBox h-textBoxHRMessage rounded-2xl mt-5 mx-auto px-2 shadow-custom-inner shadow-custom-drop relative">
            <div className="flex justify-between items-center pt-4 px-4">
              <p className="text-xs text-light-liliac text-left font-light">
                Generating cover letter...
              </p>
              <img src={copyIcon} className="h-4 w-4" alt="Copy Icon" />
            </div>
            <img
              src={magicWandIcon}
              className="h-14 w-14 absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
              alt="Magic Wand Icon"
            />
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
