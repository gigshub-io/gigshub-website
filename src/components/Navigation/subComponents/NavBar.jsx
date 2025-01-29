import React from "react";
import { NavLink } from "./NavLink";
// We no longer need headlessui Menu, arrow icons, or SubDropDownMenu
// because we're removing "Find a Job" dropdown
// import { Menu } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { classNames } from "../../../utils/classNames.js";
// import { ReactComponent as ArrowDownPurpleIcon } from "../../../assets/arrow-down-icon.svg";
// import { ReactComponent as ArrowDownWhiteIcon } from "../../../assets/arrow-down-white-icon.svg";

/**
 * @param { isMainNavbar: "true" | "false" }
 * @returns
 */
const redirect = () => {
  window.open("https://app.jobbyo.ai", "_blank");
};


// Updated pageLinks array
const pageLinks = [
  
  {
    label: "Pricing",
    path: "/pricing",
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
  {
    label: "Community",
    path: "https://discord.gg/Vm5xVXFU",
    target: "_blank", // Open in a new tab
  },
];

export const NavBar = ({ dropDownIsOpen, isMainNavbar }) => {
  return (
    <ul
      className={`${
        isMainNavbar ? "hidden" : ""
      } lg:flex lg:flex-row lg:font-normal lg:gap-12 lg:text-base
        flex flex-col gap-4
        ${dropDownIsOpen ? "w-full !flex flex-col gap-6" : ""}
      `}
    >
      {pageLinks.map((link, index) => (
        <NavLink
          dropDownIsOpen={dropDownIsOpen}
          to={link.path}
          key={index}
          kind={isMainNavbar ? "primary" : "inverted"}
          target={link.target || "_self"} 
        >
          {link.label}
        </NavLink>
      ))}
    </ul>
  );
};
