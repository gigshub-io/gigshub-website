import React from "react";
import { Button } from "../Button";
import { Container } from "../Container";

export const CtaBanner = ({ className, image }) => {
  return (
    <Container className="flex flex-col p-6">
      <div
        className={`flex flex-col gap-10 lg:flex-row rounded-ctaBanner h-ctaBanner lg:h-testimonialContainer py-14 lg:py-20 px-2 lg:px-16 relative overflow-hidden ${className}`}
      >
        <div className="flex flex-col gap-5 lg:w-shortTextContainer items-center lg:items-start text-center lg:text-left">
          <div className="font-sans lg:text-3xl text-xl font-bold text-off-white tracking-wide">
            Call to action that invites the visitor to get started
          </div>
          {window.innerWidth > 768 && (
          <p className="font-sans lg:text-lg text-sm font-normal leading-7 text-off-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>)}
          <div className="flex pt-4">
            <Button>Sign Up</Button>
          </div>
        </div>
        {window.innerWidth > 768 && (
        <img
          src={image}
          alt="Cta Banner"
          className="absolute right-0 bottom-0"
        />
      )}
      </div>
    </Container>
  );
};