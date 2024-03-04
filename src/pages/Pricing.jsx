import React from "react";
import { useState } from "react";
import { Heading } from "../components/Heading/Heading";
import { Container } from "../components/Container";
import { PricingCard } from "../components/PricingCard";
import { SocialProof } from "../components/SocialProof";
import { CardGallery } from "../components/CardGallery";
import { CtaBanner } from "../components/CtaBanner";
import { Faq } from "../components/Faq";
import ctaImage from "../assets/pricing-cta-banner.png";

export default function Pricing() {
  const [isBillingAnnual, setIsBillingAnnual] = useState(false);

  // Insert info of each plan here
  const plans = [
    {
      name: "Basic Plan",
      monthlyPrice: "19",
      annualPrice: "228",
      features: [
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
      ],
    },
    {
      name: "Standard Plan",
      monthlyPrice: "29",
      annualPrice: "348",
      features: [
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
      ],
    },
    {
      name: "Unlimited Plan",
      monthlyPrice: "49",
      annualPrice: "588",
      features: [
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
      ],
    },
  ];

  const handleBillingSelection = () => {
    setIsBillingAnnual((prev) => !prev);
  };
  return (
    <div className="flex flex-col w-full gap-14 lg:gap-40 mb-12 bg-off-white items-center">
      <Container>
        <div className="flex flex-col items-center py-20 lg:py-28 gap-6">
          <Heading
            title="Pricing plans"
            titleSize="lg:text-7xl text-4xl"
            description="Simple, transparent pricing that grows with you."
            descriptionSize="lg:text-lg text-sm"
            alignment="center"
          />
          <div className="flex items-center justify-between">
            <div className="isolate inline-flex -space-x-px rounded-md shadow-sm items-center">
              <button
                onClick={handleBillingSelection}
                className={`${
                  !isBillingAnnual
                    ? "text-off-white bg-dark-purple"
                    : "text-dark-purple bg-off-white"
                } inline-flex items-center rounded-l-md px-6 py-3 ring-1 ring-inset ring-dark-purple hover:bg-pale-purple hover:text-dark-purple focus:z-20 focus:outline-offset-0 w-pricingButtons h-12`}
              >
                Monthly billing
              </button>

              <button
                onClick={handleBillingSelection}
                className={`${
                  isBillingAnnual
                    ? "text-off-white bg-dark-purple"
                    : "text-dark-purple bg-off-white"
                } inline-flex items-center rounded-r-md px-6 py-3 text-dark-purple ring-1 ring-inset ring-dark-purple hover:bg-pale-purple hover:text-dark-purple focus:z-20 focus:outline-offset-0 w-pricingButtons h-12`}
              >
                Annual billing
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 lg:px-0 lg:flex-row gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              planName={plan.name}
              planPrice={isBillingAnnual ? plan.annualPrice : plan.monthlyPrice}
              billingType={isBillingAnnual ? "annual" : "monthly"}
              planFeatures={plan.features}
            />
          ))}
        </div>
      </Container>
      <SocialProof />
      <CardGallery />
      <Faq />
      <CtaBanner className="bg-purple" image={ctaImage} />
    </div>
  );
}
