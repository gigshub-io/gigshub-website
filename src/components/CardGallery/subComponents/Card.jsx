import React, { useState } from "react";
import checkIcon from "../../../assets/check-icon.svg";

export const Card = ({ heading, children }) => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <div className="flex flex-col gap-4">
        <p className="text">{isReadMore ? `${text.slice(0, 100)}...` : text}</p>
        <button
          className="flex font-sans text-off-white text-base font-bold tracking-wide"
          onClick={toggleReadMore}
        >
          {isReadMore ? "Read more" : " Read less"}
        </button>
      </div>
    );
  };

  return (
    <div className="w-card flex flex-col gap-3 h-max p-7 bg-dark-blue rounded-2xl">
      <div>
        <img src={checkIcon} alt="Check Icon" />
      </div>
      <p className="text-off-white text-lg font-sans font-bold tracking-wide">
        {heading}
      </p>

      <div className="font-sans text-off-white text-sm tracking-wide font-light leading-5">
        <ReadMore>{children}</ReadMore>
      </div>
    </div>
  );
};
