import React from "react";
import webflowLogo from "../../assets/webflow-logo.png";
import relumeLogo from "../../assets/relume-logo.png";
import { Container } from "../Container";

export const SocialProof = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-5">
        <p className="font-sans text-lg font-normal leading-7 text-dark-purple">
          Trusted by the world's best companies
        </p>
        <div className="flex flex-row gap-12">
          <img src={webflowLogo} alt="People laughing with pcs" />
          <img src={relumeLogo} alt="People laughing with pcs" />
          <img src={webflowLogo} alt="People laughing with pcs" />
          <img src={relumeLogo} alt="People laughing with pcs" />
          <img src={webflowLogo} alt="People laughing with pcs" />
          <img src={relumeLogo} alt="People laughing with pcs" />
        </div>
      </div>
    </Container>
  );
};
