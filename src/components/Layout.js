import React from "react";
import logoImg from "../assets/HorizontalLogo.svg";
import { Outlet } from "react-router-dom";
import { Button } from "./Button";
import { Navigation } from "./Navigation/Navigation";

const Footer = () => {
  return <footer style={{ backgroundColor: "#1E1E53" }}>FOOTER</footer>;
};

export default function Layout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
