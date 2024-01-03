import React from "react";

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
      <div className="flex flex-col w-full py-8">
        <div>
          <div>Includes</div>
          <ul>
            {planFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
