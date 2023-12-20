// Navigation.js
import React from "react";
import { Button } from "../Button/Button.jsx";
import { NavLink } from "./components/NavLink.jsx";
import { Logo } from "../Logo/Logo.jsx";

export const Navigation = () => {
  return (
    <nav className="w-full h-20 bg-off-white px-36 flex items-center justify-between">
      <Logo />
      <div className="items-center justify-between">
        <ul className="flex flex-row font-sans font-normal leading-6 rounded-lg gap-9 text-base bg-off-white">
          <li>
            <NavLink>Find a job</NavLink>
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
  );
};
