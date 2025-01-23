import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
// import Community from "./pages/Community";
// import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import Freelancers from "./pages/Freelancers";
import JobSeekers from "./pages/JobSeekers";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/" index element={<Home />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/job-seekers" element={<JobSeekers />} />
        <Route path="/about-us" element={<AboutUs />} />
        { /* <Route path="/community" element={<Community />} />
        <Route path="/blog/*" element={<Blog />}>
          <Route path=":category" element={<Blog />} />
        </Route> */}
          <Route path="/pricing" element={<Pricing />} /> 
        <Route path="/contact-us" element={<ContactUs />} />
        
      </Route>
    </Routes>
  );
}

export default App;
