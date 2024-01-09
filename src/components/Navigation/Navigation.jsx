// Navigation.js
import React, { useState } from "react";
import { Button } from "../Button";
import { NavLink } from "./subComponents/NavLink.jsx";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../utils/classNames.js";

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

export const Navigation = () => {
  return (
    <Container>
      <nav className="w-full h-20 flex items-center justify-between">
        <Logo />
        <div className="items-center justify-between">
          <ul className="flex flex-row font-sans font-normal leading-6 rounded-lg gap-16 text-base bg-off-white">
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
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button size="small" padding="longText" kind="primary">
            Get Started
          </Button>
        </div>
      </nav>
    </Container>
  );
};
