import React from "react";
/**
 *
 * @param alignment "start" | "center" | "end"
 * @returns
 */
export const Heading = ({
  title,
  description,
  titleSize,
  descriptionSize,
  className,
  gap = "6",
  alignment,
}) => {
  return (
    <div className={`flex ${className} items-${alignment}`}>
      <div
        className={`flex flex-col gap-${gap} w-headingMobileContainer lg:w-headingContainer p-4`}
      >
        <p
          className={`font-sans font-bold leading-10 text-dark-purple lg:leading-headingCardsContainer tracking-wide ${titleSize} text-${alignment}`}
        >
          {title}
        </p>
        <p
          className={`font-sans text-sm lg:text-lg font-normal leading-7 text-dark-purple tracking-wide ${descriptionSize} text-${alignment}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
