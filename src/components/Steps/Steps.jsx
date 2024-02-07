import React from "react";
import step from "../../assets/step.png";
import { Heading } from "../Heading";
import { Container } from "../Container";

const titleText = "A better way to job search";
const descriptionText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.";

export const Steps = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-16 lg:gap-32">
        <Heading
          title={titleText}
          description={descriptionText}
          alignment="center"
          className="flex"
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-3 lg:gap-24">
            <div className="hidden lg:flex">
              <img src={step} alt="Step 1" />
            </div>
            <div className="flex flex-col py-10 lg:py-40 gap-6 w-80 lg:w-stepContainer items-start">
              <h1 className="font-sans font-bold text-3xl tracking-wide text-dark-purple">
                Step 1
              </h1>
              <div className="lg:hidden flex">
                <img src={step} alt="Step 1" />
              </div>
              <p className="font-sans font-bold text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <p className="lg:pt-4 font-sans font-normal text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-3 lg:gap-24">
              <div className="flex flex-col py-10 lg:py-40 gap-6 w-80 lg:w-stepContainer items-start">
                <h1 className="font-sans font-bold text-3xl tracking-wide text-dark-purple">
                  Step 2
                </h1>
                <div className="lg:hidden flex">
                  <img src={step} alt="Step 2" />
                </div>
                <p className="font-sans font-bold text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <p className="lg:pt-4 font-sans font-normal text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                  Duis cursus, mi quis viverra ornare, eros dolor interdum
                  nulla, ut commodo diam libero vitae erat.
                </p>
              </div>
              <div className="hidden lg:flex">
                <img src={step} alt="Step 2" />
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col lg:flex-row items-center lg:justify-start gap-3 lg:gap-24">
                <div className="hidden lg:flex">
                  <img src={step} alt="Step 3" />
                </div>
                <div className="flex flex-col py-10 lg:py-40 gap-6 w-80 lg:w-stepContainer items-start">
                  <h1 className="font-sans font-bold text-3xl tracking-wide text-dark-purple">
                    Step 3
                  </h1>
                  <div className="lg:hidden flex">
                    <img src={step} alt="Step 3" />
                  </div>
                  <p className="font-sans font-bold text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                  <p className="lg:pt-4 font-sans font-normal text-sm lg:text-lg tracking-wide leading-7 text-dark-purple">
                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
