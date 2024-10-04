  import React from "react";
  import chrome from "../../assets/chrome.png";
  import { Button } from "../Button";
  import { Container } from "../Container";
  import { CompanyInfoCard } from "./subComponents/CompanyInfoCard";
  import { JobSummaryCard } from "./subComponents/JobSummaryCard";
  import { MessageHR } from "./subComponents/MessageHR";
  import airbnbimg1 from "../../assets/airbnbimg1.png";
  import airbnbimg2 from "../../assets/airbnbimg2.png";
  import airbnbimg3 from "../../assets/airbnbimg3.png";

  export const Hero = () => {
    return (
      <div
        className="h-full bg-pink-700"
        style={{
          background:
            "linear-gradient(180deg, #F3F3FF 33.44%, rgba(173, 173, 255, 0.3) 63.65%, rgba(138, 138, 255, 0.3) 80.67%, #F3F3FF 94.92%)",
        }}
      >
        <Container>
          <div className="flex flex-col gap-6 w-full text-center mx-auto px-8">
            <div className="font-sans text-5xl xs:text-5xl lg:text-7xl font-bold text-dark-purple leading-textHero2 xs:leading-textHero2 lg:leading-textHero tracking-wider">
              More interviews,
              <br className="xs:hidden" />
              <span className="text-light-purple xs:block">No applications</span>
            </div>
            <div className="flex flex-col items-center">
              <p
                className="font-sans text-lg font-normal leading-7 text-dark-purple xs:leading-7 xs:items-start xs:text-left
              md:text-center lg:text-center"
              >
                We Automate Applications, Tailor CVs, and Ensure Ideal Matches, So
                You Can Focus on What Truly Matters <br /> - acing Interviews.
              </p>

              <div className="flex pt-12 xs:pt-12 lg:pt-16 xs:text-lg">
                <Button>
                  <div className="flex items-center gap-2 xs:text-base"
                  onClick={() => window.open("https://chromewebstore.google.com/detail/autofill-extension/koohbndpkdkgpfokglpjlbfnaodkgkbj?authuser=0&hl=en", "_blank")}>
                    <img
                      src={chrome}
                      alt="Chrome logo"
                      className="w-5 h-5 xs:w-8 xs:h-8"
                    />
                    <span>Add to Chrome</span>
                  </div>
                </Button>
              </div>
            </div>
            {/* Ensure grid items shrink but never stack */}
            <div className="grid grid-cols-3 gap-2 xs:gap-2 md:gap-12 lg:gap-28 mt-6 lg:mt-12">
              {/* Set min-width to prevent shrinking below a certain size */}
              <div className="self-start" style={{ minWidth: "100px" }}>
                <img
                  src={airbnbimg1}
                  alt="Company Info Card"
                  className="w-card1 h-auto"
                />
              </div>
              <div className="self-start" style={{ minWidth: "100px" }}>
                <img
                  src={airbnbimg2}
                  alt="Job Summary Card"
                  className="w-card1 h-auto"
                />
              </div>
              <div className="self-start" style={{ minWidth: "100px" }}>
                <img
                  src={airbnbimg3}
                  alt="HR Message"
                  className="w-card1 h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  };
