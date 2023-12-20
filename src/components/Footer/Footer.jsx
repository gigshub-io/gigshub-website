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
    <div className="flex flex-col items-center gap-16 max-w-screen mx-auto bg-dark-purple ">
      <div className="flex flex-row gap-64 w-container py-20">
        <div className="flex flex-col gap-8">
          <Logo kind="inverted" />
          <ul className="flex flex-row font-sans font-normal leading-6 rounded-lg gap-6 text-sm">
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
        <div>
          <div className="flex flex-col gap-4 text-sm">
            <label className="text-off-white">Subscribe</label>
            <div className="flex flex-row gap-4">
              <input
                type="text"
                value={emailSubs}
                onChange={handleInputChange}
                className="rounded-full w-60 h-14 "
                placeholder="Your email here"
              ></input>
              <Button kind="transparent">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
