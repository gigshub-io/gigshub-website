// Navigation.js
import React from "react";
import { Button } from "../Button";
import { NavLink } from "./subComponents/NavLink.jsx";
import { Container } from "../Container";
import { Logo } from "../Logo";

export const Navigation = () => {
  return (
    <Container>
      <nav className="w-full h-20 flex items-center justify-between">
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
    </Container>
  );
};
