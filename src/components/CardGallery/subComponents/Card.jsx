import React from "react";
import checkIcon from "../../../assets/check-icon.svg";

export const Card = ({ heading, children, link }) => {
  return (
    <div className="w-card flex flex-col gap-3 h-card p-7 bg-dark-blue rounded-2xl">
      <div>
        <img src={checkIcon} alt="Check Icon" />
      </div>
      <p className="text-off-white text-lg font-sans font-bold tracking-wide">
        {heading}
      </p>
      <div className="font-sans text-off-white text-sm tracking-wide font-light leading-5">
        {children}
      </div>
      <div>
        <a
          className="font-sans underline text-off-white text-base font-bold tracking-wide"
          href={link}
        >
          Read more
        </a>
      </div>
    </div>
  );
};
