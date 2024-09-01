import React from "react";
import { Button } from "../Button";
import { Container } from "../Container";

export const CtaBanner = ({ className, image }) => {
  return (
    <Container className="flex flex-col p-6">
      <div
        className={`hidden lg:flex flex-col gap-10 lg:flex-row rounded-ctaBanner h-ctaBanner lg:h-testimonialContainer py-14 lg:py-20 px-2 lg:px-16 relative overflow-hidden ${className}`}
      >
        {/* This section is only visible on large screens (lg and above) */}
        <div className="flex flex-col gap-5 lg:w-shortTextContainer items-center lg:items-start text-center lg:text-left">
          <div className="font-sans lg:text-3xl text-xl font-bold text-off-white tracking-wide z-10">
            Take control of your job search!
          </div>
          <p className="font-sans lg:text-lg text-sm font-normal text-off-white leading-7 z-10">
            <span className="block">Get started with a free trial!</span>
            <span className="block">Centralise, automate, and land</span>
            <span className="block">your dream job faster.</span>
          </p>
          <div className="flex pt-4">
            <Button>Sign Up</Button>
          </div>
        </div>
        <img
          src={image}
          alt="Cta Banner"
          className="absolute right-0 bottom-0 z-0"
        />
      </div>

      {/* This section is only visible on small screens (xs to md) */}
      <div
        className={`flex lg:hidden flex-col rounded-ctaBanner relative overflow-hidden bg-purple-500 ${className}`}
      >
        <div className="flex flex-col gap-4 items-center text-center px-20 pt-12">
          <div className="font-sans text-xl font-bold text-white tracking-wide z-10">
            Call to action that invites the visitor to get started
          </div>
          <p className="font-sans text-sm font-normal text-white leading-7 z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="flex pt-4">
            <Button>Sign Up</Button>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <img src={image} alt="Cta Banner" className="w-full  object-cover" />
        </div>
      </div>
    </Container>
  );
};
