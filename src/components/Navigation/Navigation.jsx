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
    setDropDownIsOpen(false);
  }, [pathname]);

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
            {!dropDownIsOpen ? <HamburguerIcon /> : <CloseIcon />}
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
