import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../../utils/classNames.js";
import { ReactComponent as ArrowDownPurpleIcon } from "../../../assets/arrow-down-icon.svg";
import { ReactComponent as ArrowDownWhiteIcon } from "../../../assets/arrow-down-white-icon.svg";

/**
 * @param { isMainNavbar: "true" | "false" }
 * @returns
 */

const pageLinks = [
  {
    label: "About Us",
    path: "/about-us",
  },
/*  {
    label: "Community",
    path: "/community",
  },
  {
    label: "Blog",
    path: "/blog/view-all",
  },
  
  {
    label: "Pricing",
    path: "/pricing",
  },*/ 
  {
    label: "Contact Us",
    path: "/contact-us",
  },
];
const menuItems = [
  {
    label: "Freelancers",
    to: "/freelancers",
  },
  { label: "Job Seekers", to: "/job-seekers" },
];

const SubDropDownMenu = ({ isMainNavbar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => handleToggle()}
        className={`flex flex-row items-center`}
        role="button"
      >
        <div
          className={`font-sans font-bold leading-6 gap-6 ${
            isMainNavbar ? "text-xl text-dark-purple" : "text-sm text-off-white"
          }`}
        >
          Find a Job
        </div>
        <button
          className={classNames(
            "duration-200 ease-in-out transition-transform",
            isOpen && "rotate-180"
          )}
        >
          {isMainNavbar ? (
            <ArrowDownPurpleIcon />
          ) : (
            <ArrowDownWhiteIcon className="w-6 h-6" />
          )}
        </button>
      </div>
      <div
        className={classNames(
          "max-h-0 overflow-hidden duration-200 invisible ease-out",
          isOpen && "max-h-screen !visible duration-200 ease-in"
        )}
      >
        <div
          className={`flex flex-col py-4 gap-4 font-sans font-normal text-justify ${
            isMainNavbar
              ? "text-dark-purple text-base"
              : "text-off-white text-sm"
          }`}
        >
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              isDropDown={isOpen}
              to={item.to}
              className="block"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

const NavMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
      onMouseLeave={handleClose}
    >
      <Menu.Button
        className="flex flex-row text-dark-purple cursor-pointer"
        onMouseOver={handleOpen}
        onClick={handleToggle}
      >
        {children}
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-dark-purple"
          aria-hidden="true"
        />
      </Menu.Button>

      <Menu.Items
        static
        className={classNames(
          "absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-auto",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="py-1">
          {menuItems.map((item, index) => (
            <Menu.Item key={index}>
              <NavLink
                onClick={handleClose}
                to={item.to}
                className="block px-4 py-2 text-sm"
              >
                {item.label}
              </NavLink>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export const NavBar = ({ dropDownIsOpen, isMainNavbar }) => {
  return (
    <ul
      className={`${
        isMainNavbar && "hidden "
      } lg:flex lg:flex-row lg:font-normal lg:gap-12 lg:text-base flex flex-col gap-4 ${
        dropDownIsOpen && "w-full !flex flex-col gap-6"
      }`}
    >
      <li>
        {dropDownIsOpen ? (
          <SubDropDownMenu isMainNavbar={isMainNavbar} />
        ) : (
          <NavMenu>Find a Job</NavMenu>
        )}
      </li>
      {pageLinks.map((link, index) => (
        <NavLink
          dropDownIsOpen={dropDownIsOpen}
          to={link.path}
          key={index}
          kind={isMainNavbar ? "primary" : "inverted"}
        >
          {link.label}
        </NavLink>
      ))}
    </ul>
  );
};
