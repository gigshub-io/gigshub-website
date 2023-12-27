import React from "react";

export const Heading = ({ title, description, className }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="flex flex-col gap-6 w-headingContainer">
        <p className="font-sans text-5xl font-bold leading-7 text-dark-purple leading-headingCardsContainer text-center tracking-wide">
          {title}
        </p>
        <p className="font-sans text-lg font-normal leading-7 text-dark-purple text-center tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};
