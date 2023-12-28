import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Community from "./pages/Community";
import Employers from "./pages/Employers";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import Freelancers from "./pages/Freelancers";
import JobSeekers from "./pages/JobSeekers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/freelancers" index element={<Freelancers />} />
        <Route path="/jobSeekers" index element={<JobSeekers />} />
        <Route path="/aboutUs" index element={<AboutUs />} />
        <Route path="/community" index element={<Community />} />
        <Route path="/employers" index element={<Employers />} />
        <Route path="/pricing" index element={<Pricing />} />
        <Route path="/contactUs" index element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
