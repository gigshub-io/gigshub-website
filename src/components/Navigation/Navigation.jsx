// Navigation.js
import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { NavBar } from "./subComponents";
import { ReactComponent as HamburguerIcon } from "../../assets/hamburguer-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Close dropdown when route changes
    setDropDownIsOpen(false);
  }, [pathname]);

  const handleDropDownMenu = () => {
    setDropDownIsOpen((prev) => !prev);
  };

  const redirect = () => {
    window.open(
      "app.jobbyo.ai",
      "_blank"
    );
  };

  const closeDropDownMenu = () => setDropDownIsOpen(false);

  return (
    <Container>
      {/* If dropdown is open, apply a fixed white overlay */}
      <div className={dropDownIsOpen ? "fixed z-10 w-full inset-0 bg-white" : ""}>
        <nav className="flex flex-wrap lg:flex-row py-6 px-6 gap-12 bg-white lg:items-center justify-between">
        <div onClick={closeDropDownMenu} className="cursor-pointer">
          <h1 className="text-[#3F33C0] lg:text-3xl text-2xl font-bold font-sans">
            Jobbyo
            </h1>
          </div>
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden w-8 h-8 flex items-center justify-center"
            onClick={handleDropDownMenu}
          >
            {!dropDownIsOpen ? <HamburguerIcon /> : <CloseIcon />}
          </button>

          {/* Primary Nav */}
          <NavBar dropDownIsOpen={dropDownIsOpen} isMainNavbar={true} />
          <Button
            size="medium"
            padding="longText"
            kind="primary"
            className="hidden lg:flex"
            onClick={redirect}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </Container>
  );
};
