// Navigation.js
import React from "react";
import { Button } from "../Button";
import { NavLink } from "./subComponents/NavLink.jsx";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const menuItems = [
  {
    label: "ddd",
    to: "/skdjnskj",
  },
];

const NavMenu = ({ children }) => {
  return (
    <Menu as="div" className="relative inline-block text-left group">
      <Menu.Button className="flex flex-row text-dark-purple cursor-pointer">
        {children}
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-dark-purple"
          aria-hidden="true"
        />
      </Menu.Button>

      <Menu.Items
        static
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-hover:block hidden"
      >
        <div className="py-1">
          {menuItems.map((item) => (
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={item.to}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {item.label}
                </NavLink>
              )}
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
          <ul className="flex flex-row font-sans font-normal leading-6 rounded-lg gap-9 text-base bg-off-white">
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
              <NavLink to="/employers">Employers</NavLink>
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
