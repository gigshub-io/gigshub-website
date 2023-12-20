import React from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "../Navigation/components/NavLink";
import { useState } from "react";
import { Button } from "../Button/Button";

export const Footer = () => {
  const [emailSubs, setEmailSubs] = useState("");

  const handleInputChange = (entry) => {
    const value = entry.target.value;
    setEmailSubs(value);
  };

  return (
    <div className="flex flex-col items-center gap-16 max-w-screen mx-auto bg-dark-purple py-20">
      <div className="flex flex-row w-container justify-between">
        <div className="flex flex-col gap-8">
          <Logo kind="inverted" />
          <ul className="flex flex-row flex-start font-sans font-normal leading-6 rounded-lg gap-8 text-base">
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
        <div className="flex flex-col gap-4 text-sm">
          <label className="text-off-white">Subscribe</label>
          <div className="flex flex-row gap-4">
            <input
              type="text"
              value={emailSubs}
              onChange={handleInputChange}
              className="rounded-full w-60 h-14 pl-6 pr-3 py-3 text-dark-grey text-base font-normal font-sans"
              placeholder="Enter your email"
            ></input>
            <Button kind="transparent">Send</Button>
          </div>
          <text className="text-off-white text-xs font-normal font-sans">
            By subscribing you agree with our{" "}
            <a className="underline" href>
              Privacy Policy
            </a>
          </text>
        </div>
      </div>
      <div className="flex flex-col w-container gap-8">
        <hr />
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-6">
            <a
              className="underline text-off-white text-sm font-normal font-sans"
              href
            >
              Privacy Policy
            </a>
            <a
              className="underline text-off-white text-sm font-normal font-sans"
              href
            >
              Terms of Service
            </a>
            <a
              className="underline text-off-white text-sm font-normal font-sans"
              href
            >
              Cookies Settings
            </a>
          </div>
          <p className="text-off-white text-sm font-normal font-sans">
            © 2023 GigsHub. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
