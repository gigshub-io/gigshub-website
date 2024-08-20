import React from "react";
import homeHeroImg from "../../assets/home-hero-image.png";
import chrome from "../../assets/chrome.png";
import { Button } from "../Button";
import { Container } from "../Container";
import { CompanyInfoCard } from "./subComponents/CompanyInfoCard";
import { JobSummaryCard } from "./subComponents/JobSummaryCard";
import { MessageHR } from "./subComponents/MessageHR";

export const Hero = () => {
  return (
    <div
      className="w-full"
      style={{
        background:
          "linear-gradient(180deg, #F3F3FF 33.44%, rgba(173, 173, 255, 0.3) 63.65%, rgba(138, 138, 255, 0.3) 69.67%, #F3F3FF 94.92%)",
      }}
    >
      <Container>
        <div className="flex flex-col gap-6 w-full text-center h-heroContainer mx-auto px-6">
          <div className="font-sans text-5xl lg:text-7xl font-bold text-dark-purple leading-textHero2 lg:leading-textHero tracking-wider">
            Turbocharge your job <br />
            search with <span className="text-light-purple">GigsHub</span>
          </div>

          <div className="flex justify-center">
            <img
              className="lg:hidden"
              src={homeHeroImg}
              alt="Women laughing in front of computers"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-sans text-lg font-normal leading-7 text-dark-purple">
              We automate applications, tailor CVs, and ensure ideal matches, so
              you can focus on what truly matters <br /> - nailing interviews.
            </p>

            <div className="flex pt-12">
              <Button>
                <div className="flex items-center gap-2">
                  <img src={chrome} alt="Chrome logo" className="w-5 h-5" />
                  <span>Add to Chrome</span>
                </div>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
            <div className="col-span-1">
              <CompanyInfoCard />
            </div>
            <div className="col-span-2">
              <JobSummaryCard />
            </div>
            <div className="col-span-1">
              <MessageHR />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
