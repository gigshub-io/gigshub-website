import React from "react";
import step from "../../assets/step.png";
import { Heading } from "../Heading";
import { Container } from "../Container";

export const Steps = () => {
  const titleText = "A better way to job search";
  const descriptionText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.";
  return (
    <Container>
      <div className="flex flex-col items-center gap-32">
        <Heading
          title={titleText}
          description={descriptionText}
          alignment="center"
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between gap-24">
            <div>
              <img src={step} alt="Step 1" />
            </div>
            <div className="flex flex-col py-40 gap-4 w-stepContainer">
              <h1 className="font-sans font-bold text-3xl tracking-wide text-dark-purple">
                Step 1
              </h1>
              <p className="font-sans font-bold text-lg tracking-wide leading-7 text-dark-purple">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <p className="pt-4 font-sans font-normal text-lg tracking-wide leading-7 text-dark-purple">
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-24">
            <div className="flex flex-col py-40 gap-4 w-stepContainer">
              <h1 className="font-sans font-bold text-3xl tracking-wide text-dark-purple">
                Step 2
              </h1>
              <p className="font-sans font-bold text-lg tracking-wide leading-7 text-dark-purple">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <p className="pt-4 font-sans font-normal text-lg tracking-wide leading-7 text-dark-purple">
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat.
              </p>
            </div>
            <div>
              <img src={step} alt="Step 2" />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-24">
            <div>
              <img src={step} alt="Step 3" />
            </div>
            <div className="flex flex-col py-40 gap-4 w-stepContainer">
              <h1 className="font-sans font-bold text-3xl tracking-wide text-dark-purple">
                Step 3
              </h1>
              <p className="font-sans font-bold text-lg tracking-wide leading-7 text-dark-purple">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <p className="pt-4 font-sans font-normal text-lg tracking-wide leading-7 text-dark-purple">
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
