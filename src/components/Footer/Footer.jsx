import React, { useState } from "react";
import { Container } from "../Container";
import { NavBar } from "../Navigation/subComponents/NavBar";

export const Footer = () => {

  return (
    // Use your primary brand purple for background
    <div className="w-full bg-[#3F33C0]">
      <Container className="flex flex-col items-center lg:gap-16 gap-10 lg:py-20 py-10">
        <div className="flex flex-col gap-12 ml-10 lg:flex-row w-full lg:justify-between lg:ml-0">
          <div className="flex flex-col lg:gap-8 gap-10">
            
            <NavBar isMainNavbar={false} dropDownIsOpen={true} />
          </div>
        </div>

        {/* Footer divider + links + rights reserved */}
        <div className="flex flex-col w-full gap-8">
          <hr className="mx-6 lg:mx-0 border-white/20" />

          <div className="flex lg:flex-row flex-col gap-2 items-center lg:justify-between">
            {/* Links */}
            <div className="flex flex-row gap-6">
              
              <a
                className="underline text-white lg:text-sm text-xs font-normal font-sans"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
              <a
                className="underline text-white lg:text-sm text-xs font-normal font-sans"
                href="/terms-of-service"
              >
                Terms of Service
              </a>
              {/* <a className="underline text-white lg:text-sm text-xs font-normal font-sans">
                Cookies Settings
              </a> */}
            </div>

            {/* Copyright */}
            <p className="text-white lg:text-sm text-xs font-normal font-sans">
              © 2025 Jobbyo. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
