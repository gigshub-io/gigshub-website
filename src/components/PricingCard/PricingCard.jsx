import React from "react";
import { Button } from "../Button/Button";

export const PricingCard = ({
  planName,
  planPrice,
  billingType,
  planFeatures,
}) => {
  return (
    <div className="flex flex-col w-pricingCard bg-pale-purple bg-opacity-50 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-start">
        <div className="bg-lime-green py-1 px-3 rounded-full font-sans text-xl font-normal leading-7 text-dark-purple">
          {planName}
        </div>
        <div className="flex flex-row items-baseline">
          <div className="font-sans text-6xl font-semibold tracking-wide text-dark-purple">
            $
          </div>
          <div className="font-sans text-6xl font-semibold tracking-wide text-dark-purple">
            {planPrice}
          </div>
          <div className="font-sans text-4xl font-semibold tracking-wide text-dark-purple mb-2">
            {billingType === "monthly" ? "/mo" : "/an"}
          </div>
        </div>
      </div>
      <hr className="border-dark-purple mt-8" />
      <div className="flex flex-col py-8">
        <div className="flex flex-col gap-6">
          <div className="font-sans text-base font-medium tracking-wide text-dark-purple">
            Includes:
          </div>
          <ul className="flex flex-col ml-6 gap-4 list-image-checkmark">
            {planFeatures.map((feature, index) => (
              <li
                className="pl-4 font-sans text-base font-normal tracking-wide text-dark-purple"
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button className="mt-12">Submit</Button>
    </div>
  );
};
