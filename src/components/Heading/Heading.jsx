import React from "react";
/**
 *
 * @param alignment "start" | "center" | "end"
 * @returns
 */
export const Heading = ({ title, description, className, gap = "6" }) => {
  return (
    <div className={`flex ${className}`}>
      <div
        className={`flex flex-col gap-${gap} w-headingMobileContainer lg:w-headingContainer`}
      >
        <p
          className={`font-sans font-bold leading-7 text-dark-purple leading-headingCardsContainer tracking-wide`}
        >
          {title}
        </p>
        <p className="font-sans text-sm lg:text-lg font-normal leading-7 text-dark-purple tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};
