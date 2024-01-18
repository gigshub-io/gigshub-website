import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../../utils/classNames.js";
import arrowDownIcon from "../../../assets/arrow-down-icon.svg";

/**
 * @param { kind: "mobile" | "browser" }
 * @returns
 */

const menuItems = [
  {
    label: "Freelancers",
    to: "/freelancers",
  },
  { label: "Job Seekers", to: "/jobSeekers" },
];

const SubDropDownMenu = ({ closeDropDownMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => handleToggle()}
        className={`flex flex-row gap-2 items-center`}
        role="button"
      >
        <div className="font-sans font-bold leading-6 gap-6 text-xl text-dark-purple">
          Find a Job
        </div>
        <button
          className={classNames(
            "duration-200 ease-in-out transition-transform",
            isOpen && "rotate-180"
          )}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
              fill="#1E1E53"
            />
          </svg>
        </button>
      </div>
      <div
        className={classNames(
          "max-h-0 overflow-hidden duration-200 invisible ease-out",
          isOpen && "max-h-screen !visible duration-200 ease-in"
        )}
      >
        <div className="flex flex-col py-4 gap-4 font-sans font-normal text-dark-purple text-base text-justify">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              onClick={closeDropDownMenu}
              to={item.to}
              className="block"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
    // </div>
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

export const NavBar = ({ dropDownIsOpen, closeDropDownMenu, kind }) => {
  const pageLinks = [
    {
      label: "About Us",
      path: "/aboutUs",
    },
    {
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
    },
    {
      label: "Contact Us",
      path: "/contactUs",
    },
  ];
  return (
    <ul
      className={`bg-off-white ${
        dropDownIsOpen &&
        "w-full !flex flex-col font-sans font-bold leading-6 gap-6 text-xl text-dark-purple"
      } hidden lg:flex lg:flex-row lg:font-normal lg:gap-12 lg:text-base`}
    >
      <li>
        {dropDownIsOpen ? (
          <SubDropDownMenu closeDropDownMenu={closeDropDownMenu} />
        ) : (
          <NavMenu>Find a Job</NavMenu>
        )}
      </li>
      {pageLinks.map((link, index) => (
        <NavLink
          closeDropDownMenu={closeDropDownMenu}
          dropDownIsOpen={dropDownIsOpen}
          to={link.path}
          key={index}
        >
          {link.label}
        </NavLink>
      ))}
    </ul>
  );
};
