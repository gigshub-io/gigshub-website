// Navigation.js
import React, { useState } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { NavBar } from "./subComponents";

export const Navigation = () => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  const handleDropDownMenu = () => {
    setDropDownIsOpen((prev) => !prev);
  };
  const closeDropDownMenu = () => setDropDownIsOpen(false);

  return (
    <Container>
      <div
        className={dropDownIsOpen && "fixed z-10 w-full inset-0 bg-off-white"}
      >
        <nav className="flex flex-wrap lg:flex-row py-6 px-6 gap-12 bg-off-white lg:items-center justify-between">
          <Logo onClickFunction={closeDropDownMenu} />
          <button
            className={"lg:hidden w-8 h-8 flex items-center justify-center"}
            onClick={handleDropDownMenu}
          >
            {!dropDownIsOpen ? (
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.47461H19"
                  stroke="#1E1E53"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 7.47461H19"
                  stroke="#1E1E53"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 13.4746H19"
                  stroke="#1E1E53"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.0343 1.8916L15.7622 14.6195"
                  stroke="#1E1E53"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.0343 14.6191L15.7622 1.89122"
                  stroke="#1E1E53"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
          <NavBar
            dropDownIsOpen={dropDownIsOpen}
            closeDropDownMenu={closeDropDownMenu}
          />
          <Button
            size="small"
            padding="longText"
            kind="primary"
            className="hidden lg:flex"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </Container>
  );
};
