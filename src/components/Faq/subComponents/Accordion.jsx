import React, { useState } from "react";
import arrowDownIcon from "../../../assets/arrow-down-icon.svg";
import { classNames } from "../../../utils/classNames";

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
    <div className="flex flex-col w-accordion border-b border-purple">
      <div
        onClick={handleChange}
        onKeyDown={handleKeyDown}
        className={`flex flex-row py-5 justify-between`}
        role="button"
      >
        <div className="font-sans font-semibold text-lg text-dark-purple tracking-wide">
          {title}
        </div>
        <img
          className={classNames(
            "duration-200 ease-in-out transition-transform",
            open && "rotate-180"
          )}
          src={arrowDownIcon}
          alt="Arrow down"
        />
      </div>
      <div
        className={classNames(
          "max-h-0 overflow-hidden duration-200 invisible ease-out",
          open && "max-h-screen !visible duration-200 ease-in"
        )}
      >
        <div className="flex py-6 font-sans font-normal text-dark-purple text-base text-justify">
          {children}
        </div>
      </div>
    </div>
  );
};
