import React from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "../Navigation/subComponents/NavLink";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Container } from "../Container";

export const Footer = () => {
  const [emailSubs, setEmailSubs] = useState("");

  const handleInputChange = (entry) => {
    const value = entry.target.value;
    setEmailSubs(value);
  };

  return (
    <div className="w-full bg-dark-purple">
      <Container className="flex flex-col items-center gap-16 lg:py-20 py-10">
        <div className="flex flex-col gap-8 ml-10 lg:flex-row w-full lg:justify-between lg:ml-0">
          <div className="flex flex-col lg:gap-8 gap-10">
            <Logo kind="inverted" />
            <ul className="flex flex-col gap-2 lg:flex-row lg:gap-8 flex-start font-sans font-normal leading-6 rounded-lg text-base">
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
                className="rounded-full w-60 max-h-8 px-5 lg:py-6 py-2 text-dark-grey text-base font-normal font-sans"
                placeholder="Enter your email"
              ></input>
              <Button
                kind="transparent"
                size="medium"
                className="hidden lg:block"
              >
                Send
              </Button>
              <Button kind="transparent" size="small" className="lg:hidden">
                Send
              </Button>
            </div>
            <p className="text-off-white text-xs font-normal font-sans">
              By subscribing you agree with our{" "}
              <a className="underline" href="/privacyPolicy">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-8">
          <hr />
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-6">
              <a
                className="underline text-off-white text-sm font-normal font-sans"
                href="/privacyPolicy"
              >
                Privacy Policy
              </a>
              <a
                className="underline text-off-white text-sm font-normal font-sans"
                href="/termsOfService"
              >
                Terms of Service
              </a>
              <a className="underline text-off-white text-sm font-normal font-sans">
                Cookies Settings
              </a>
            </div>
            <p className="text-off-white text-sm font-normal font-sans">
              © 2023 GigsHub. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
