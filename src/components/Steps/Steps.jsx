import React from "react";
import step from "../../assets/step.gif";
import step2 from "../../assets/step2.gif";
import step3 from "../../assets/step3.gif";
import { Heading } from "../Heading";
import { Container } from "../Container";

const titleText = "We do the hard work for you";
const descriptionText =
  "In the world of job hunting, the struggle has been all too real. Hours upon hours spent each day on painstaking job applications, leaving individuals exhausted and unmotivated. So, we reimagined it all. Our solution?";
export const Steps = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-16 lg:gap-32 px-6">
        <Heading
          title={titleText}
          description={descriptionText}
          alignment="center"
          className="flex"
        />
        <div className="flex flex-col gap-14 lg:gap-10">
          <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-3 lg:gap-24">
            <div className="hidden lg:flex">
              <img src={step} alt="Step 1" />
            </div>
            <div className="flex flex-col lg:py-10 lg:py-40 gap-6 w-80 lg:w-stepContainer items-start">
              <h1 className="font-sans font-bold text-3xl tracking-wide text-dark-purple">
                Smart Job Matching
              </h1>
              <div className="lg:hidden flex">
                <img src={step2} alt="Step 1" />
              </div>
              <p className="font-sans font-bold text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                We do the hard work for you.
              </p>
              <p className="lg:pt-4 font-sans font-normal text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                Why waste time scrolling through endless job boards? Our
                tailored approach guarantees that each candidate is delivered
                job opportunities that fit like a glove.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-3 lg:gap-24">
            <div className="flex flex-col lg:py-40 gap-6 w-80 lg:w-stepContainer items-start">
              <h1 className="font-sans font-bold text-3xl tracking-wide text-dark-purple">
                Job Autoapply
              </h1>
              <div className="lg:hidden flex">
                <img src={step} alt="Step 2" />
              </div>
              <p className="font-sans font-bold text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                Job Hunting on Easy Mode.
              </p>
              <p className="lg:pt-4 font-sans font-normal text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                Take the work out of job hunting so you can focus on what truly
                matters.
              </p>
            </div>
            <div className="hidden lg:flex">
              <img src={step2} alt="Step 2" />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-3 lg:gap-24">
              <div className="hidden lg:flex">
                <img src={step3} alt="Step 3" />
              </div>
              <div className="flex flex-col lg:py-40 gap-6 w-80 lg:w-stepContainer items-start">
                <h1 className="font-sans font-bold text-3xl tracking-wide text-dark-purple">
                Personalized Outreach
                </h1>
                <div className="lg:hidden flex">
                  <img src={step3} alt="Step 3" />
                </div>
                <p className="font-sans font-bold text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                It's the smart way to stand out.
                </p>
                <p className="lg:pt-4 font-sans font-normal text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                But it's not just about applying—it's about getting noticed. 
                That's why we offer personalized outreach. 
                From within Gigshub, users can send tailored follow-ups, 
                message recruiters, and build important connections, all without leaving the platform. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
