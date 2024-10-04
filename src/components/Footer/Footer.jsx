import React, { useEffect } from "react";
import { Logo } from "../Logo/Logo";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Container } from "../Container";
import { NavBar } from "../Navigation/subComponents/NavBar";

export const Footer = () => {
  const [emailSubs, setEmailSubs] = useState("");

  const handleInputChange = (entry) => {
    const value = entry.target.value;
    setEmailSubs(value);
  };

  return (
    <div className="w-full bg-dark-purple">
      <Container className="flex flex-col items-center lg:gap-16 gap-10 lg:py-20 py-10">
        <div className="flex flex-col gap-12 ml-10 lg:flex-row w-full lg:justify-between lg:ml-0">
          <div className="flex flex-col lg:gap-8 gap-10">
            <Logo kind="inverted" />
            <NavBar isMainNavbar={false} dropDownIsOpen={true} />
          </div>
        </div>
        <div className="flex flex-col w-full gap-8">
          <hr className="mx-6 lg:mx-0" />
          <div className="flex lg:flex-row flex-col gap-2 items-center lg:justify-between">
            <div className="flex flex-row gap-6">
              <a
                className="underline text-off-white lg:text-sm text-xs font-normal font-sans"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
              <a
                className="underline text-off-white lg:text-sm text-xs font-normal font-sans"
                href="/terms-of-service"
              >
                Terms of Service
              </a>
              {/* <a className="underline text-off-white lg:text-sm text-xs font-normal font-sans">
                Cookies Settings
              </a> */}
            </div>
            <p className="text-off-white lg:text-sm text-xs font-normal font-sans">
              © 2024 GigsHub. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
