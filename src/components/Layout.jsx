import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer";

export default function Layout() {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const handleDropDownMenu = () => setDropDownIsOpen((prev) => !prev);
  const closeDropDownMenu = () => setDropDownIsOpen(false);
  return (
    <div className="bg-off-white">
      <Navigation
        dropDownMenu={{ dropDownIsOpen, handleDropDownMenu, closeDropDownMenu }}
      />
      {!dropDownIsOpen && (
        <div>
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}
