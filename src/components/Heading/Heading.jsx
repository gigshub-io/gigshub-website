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
}) => {
  return (
    <div className={`flex ${className} justify-${alignment}`}>
      <div
        className={`flex flex-col gap-6 w-headingContainer text-${alignment}`}
      >
        <p
          className={`font-sans text-5xl font-bold leading-7 text-dark-purple leading-headingCardsContainer tracking-wide`}
        >
          {title}
        </p>
        <p className="font-sans text-lg font-normal leading-7 text-dark-purple tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};
