import React from "react";
/**
 *
 * @param alignment "start" | "center" | "end"
 * @returns
 */
export const Heading = ({
  title,
  description,
  className,
  alignment = "start",
  textSize = "5xl",
  gap = "6",
}) => {
  return (
    <div className={`flex ${className} justify-${alignment}`}>
      <div
        className={`flex flex-col gap-${gap} w-headingMobileContainer lg:w-headingContainer text-${alignment}`}
      >
        <p
          className={`font-sans text-${textSize} font-bold leading-7 text-dark-purple leading-headingCardsContainer tracking-wide max-sm:text-center`}
        >
          {title}
        </p>
        <p className="font-sans text-sm lg:text-lg font-normal leading-7 text-dark-purple tracking-wide max-sm:text-center">
          {description}
        </p>
      </div>
    </div>
  );
};
