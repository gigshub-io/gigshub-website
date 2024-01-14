// Navigation.js
import React, { useState } from "react";
import { Button } from "../Button";
import { NavLink } from "./subComponents/NavLink.jsx";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../utils/classNames.js";
import dropDownIcon from "../../assets/hamburguer-icon.svg";
import closeIcon from "../../assets/close-icon.svg";

const menuItems = [
  {
    label: "Freelancers",
    to: "/freelancers",
  },
  { label: "Job Seekers", to: "/jobSeekers" },
];

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

export const Navigation = ({ dropDownMenu }) => {
  const { dropDownIsOpen, handleDropDownMenu, closeDropDownMenu } =
    dropDownMenu;
  return (
    <Container>
      <nav className="flex flex-col lg:flex-row py-6 px-6 gap-12 lg:items-center justify-between">
        <div className="flex flex-row justify-between">
          <Logo onClickFunction={closeDropDownMenu} />
          <img
            className={"lg:hidden w-8 h-8"}
            src={!dropDownIsOpen ? dropDownIcon : closeIcon}
            alt="Dropdown menu icon"
            onClick={handleDropDownMenu}
            role="button"
          />
        </div>
        <div className={dropDownIsOpen ? "flex justify-left" : "hidden"}>
          <ul
            className="flex h-full flex-col font-sans font-bold leading-6 gap-6 text-xl bg-off-white"
            onClick={closeDropDownMenu}
          >
            <li>
              <NavMenu>Find a Job</NavMenu>
            </li>
            <li>
              <NavLink to="/aboutUs">About us</NavLink>
            </li>
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/blog/view-all">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex justify-center">
          <ul className="lg:flex lg:flex-row font-sans font-normal leading-6 lg:max-xl:gap-8 gap-16 text-base bg-off-white">
            <li>
              <NavMenu>Find a Job</NavMenu>
            </li>
            <li>
              <NavLink to="/aboutUs">About us</NavLink>
            </li>
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/blog/view-all">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Button size="small" padding="longText" kind="primary">
            Get Started
          </Button>
        </div>
      </nav>
    </Container>
  );
};
