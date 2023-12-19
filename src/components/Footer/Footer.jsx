import React from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "../Navigation/components/NavLink";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-16 max-w-screen mx-auto bg-dark-purple ">
      <div className="w-container py-20">
        <div className="flex flex-col gap-8">
          <Logo kind="inverted" />
          <ul className="flex flex-row font-sans font-normal leading-6 rounded-lg gap-7 text-sm">
            <li>
              <NavLink kind="inverted">Find a job</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs" kind="inverted">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" kind="inverted">
                Community
              </NavLink>
            </li>
            <li>
              <NavLink to="/employers" kind="inverted">
                Employers
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" kind="inverted">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactUs" kind="inverted">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};
