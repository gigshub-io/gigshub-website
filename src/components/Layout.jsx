import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer";

export default function Layout() {
  return (
    <div className="bg-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
