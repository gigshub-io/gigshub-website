import React, { useState } from "react";
import arrowDownIcon from "../../../assets/arrow-down-icon.svg";

export const Accordion = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === " " || event.key === "Enter") {
      handleChange();
    }
  };

  return (
    <div className="flex flex-col w-accordion">
      <div
        onClick={handleChange}
        onKeyDown={handleKeyDown}
        className={`flex flex-row py-5 justify-between border-b border-purple`}
        role="button"
      >
        <div className="font-sans font-semibold text-lg text-dark-purple tracking-wide">
          {title}
        </div>
        <img src={arrowDownIcon} alt="Arrow down" />
      </div>
      <div
        className={`${
          !open
            ? "max-h-0 overflow-hidden invisible"
            : "max-h-screen visible duration-500 ease-in-out"
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
