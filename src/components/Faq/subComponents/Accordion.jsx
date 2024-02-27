import React from "react";
import arrowDownIcon from "../../../assets/arrow-down-icon.svg";
import { classNames } from "../../../utils/classNames";

export const Accordion = ({
  children,
  title,
  isOpen,
  handleChange,
  handleKeyDown,
  questionIndex,
}) => {
  return (
    <div className="flex flex-col lg:w-accordion border-b border-purple">
      <div
        onClick={(event) => handleChange(questionIndex)}
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
            isOpen && "rotate-180"
          )}
          src={arrowDownIcon}
          alt="Arrow down"
        />
      </div>
      <div
        className={classNames(
          "max-h-0 overflow-hidden duration-200 invisible ease-out",
          isOpen && "max-h-screen !visible duration-200 ease-in"
        )}
      >
        <div className="flex py-6 font-sans font-normal text-dark-purple text-base text-justify">
          {children}
        </div>
      </div>
    </div>
  );
};
