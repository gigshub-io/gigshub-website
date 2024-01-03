import React from "react";
import { useState } from "react";
import { Heading } from "../components/Heading/Heading";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pricing() {
  const [isSelected, setIsSelected] = useState(false);

  const handleBillingSelection = () => {
    setIsSelected((prev) => !prev);
  };
  return (
    <div>
      <div className="flex flex-col items-center py-28 gap-6">
        <Heading
          title="Pricing plans"
          description="Simple, transparent pricing that grows with you."
          textSize="7xl"
          alignment="center"
          gap="10"
          className=""
        />
        <div className="flex items-center justify-between">
          <div className="isolate inline-flex -space-x-px rounded-md shadow-sm items-center">
            <button
              onClick={handleBillingSelection}
              className={`${
                isSelected
                  ? "text-off-white bg-dark-purple"
                  : "text-dark-purple bg-off-white"
              } inline-flex items-center rounded-l-md px-6 py-3 ring-1 ring-inset ring-dark-purple hover:bg-dark-purple hover:text-off-white focus:z-20 focus:outline-offset-0 w-pricingButtons h-12`}
            >
              Monthly billing
            </button>

            <button
              onClick={handleBillingSelection}
              className={`${
                !isSelected
                  ? "text-off-white bg-dark-purple"
                  : "text-dark-purple bg-off-white"
              } inline-flex items-center rounded-r-md px-6 py-3 text-dark-purple ring-1 ring-inset ring-dark-purple hover:bg-dark-purple hover:text-off-white focus:z-20 focus:outline-offset-0 w-pricingButtons h-12`}
            >
              Annual billing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
