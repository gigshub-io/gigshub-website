import React from "react";
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
      <Container className="flex-wrap">
        <div className="flex flex-col gap-6 w-full text-center h-heroContainer mx-auto px-6">
          {/* <div className="font-sans text-5xl lg:text-7xl font-bold text-dark-purple leading-textHero2 lg:leading-textHero tracking-wider">
            Turbocharge your job <br />
            search with <span className="text-light-purple">GigsHub</span>
          </div> */}
          <div className="font-sans text-5xl sm:text-5xl lg:text-7xl font-bold text-dark-purple leading-textHero2 sm:leading-textHero2 lg:leading-textHero tracking-wider">
            More interviews,
            <br className="sm:hidden" />
            <span className="text-light-purple sm:block">No applications</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-sans text-lg font-normal leading-7 sm:leading-7 text-dark-purple sm:items-start sm:text-left">
              We Automate Applications, Tailor CVs, and Ensure Ideal Matches, So
              You Can Focus on What Truly Matters <br /> - acing Interviews.
            </p>

            <div className="flex pt-12 sm:pt-12 lg:pt-16 sm:text-lg">
              <Button>
                <div className="flex items-center gap-2 sm:text-base">
                  <img
                    src={chrome}
                    alt="Chrome logo"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span>Add to Chrome</span>
                </div>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[14rem] mt-6 lg:mt-20">
            <div className="self-start">
              <CompanyInfoCard className="w-full sm:w-auto" />
            </div>
            <div className="self-start">
              <JobSummaryCard className="w-full sm:w-auto" />
            </div>
            <div className="self-start">
              <MessageHR className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
