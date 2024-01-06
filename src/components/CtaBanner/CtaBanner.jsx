import React from "react";
import { Button } from "../Button";
import { Container } from "../Container";

export const CtaBanner = ({ className, image }) => {
  return (
    <Container>
      <div
        className={`flex flex-row rounded-ctaBanner h-testimonialContainer py-20 px-16 relative overflow-hidden ${className}`}
      >
        <div className="flex flex-col gap-5 w-shortTextContainer">
          <div className="font-sans text-3xl font-bold text-off-white tracking-wide">
            Call to action that invites the visitor to get started
          </div>
          <p className="font-sans text-lg font-normal leading-7 text-off-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="flex pt-4">
            <Button>Sign Up</Button>
          </div>
        </div>
        <img
          src={image}
          alt="Cta Banner"
          className="absolute right-0 bottom-0"
        />
      </div>
    </Container>
  );
};
