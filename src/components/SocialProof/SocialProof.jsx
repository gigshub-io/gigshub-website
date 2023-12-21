import React from "react";
import webflowLogo from "../../assets/webflow-logo.png";
import relumeLogo from "../../assets/relume-logo.png";

export const SocialProof = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-10">
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
  );
};
