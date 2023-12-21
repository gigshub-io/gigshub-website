import React from "react";
import step from "../../assets/step.png";

export const Steps = () => {
  return (
    <div className="flex flex-col items-center gap-32 pb-20">
      <div className="flex flex-col gap-6 w-headingContainer">
        <p className="font-sans text-5xl font-normal leading-7 text-dark-purple leading-headingCardsContainer text-center tracking-wider">
          A better way to job search
        </p>
        <p className="font-sans text-lg font-normal leading-7 text-dark-purple text-center tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
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
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
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
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
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
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
