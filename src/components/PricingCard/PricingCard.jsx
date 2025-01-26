import React from "react";
import checkMark from "../../assets/check-icon2.svg";

export const PricingCard = () => {

  const redirect = () => {
    window.open("https://app.jobbyo.ai", "_blank");
  };
  
  return (
    <section className="py-12 bg-white">
      {/* Top Section Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Choose From The Most Popular Plans
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Satisfaction promised with a 100% money‑back guarantee
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Free Plan */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
            $5 monthy
            </h3>
          
            <hr className="my-6" />
            <h4 className="text-4xl font-bold text-gray-900">Starter</h4>
          </div>
          <div className="mt-6">
            <button
              onClick={redirect}
              className="
                w-full
                px-6 py-3
                border border-[#3F33C0]
                text-[#3F33C0]
                font-semibold
                rounded-md
                hover:bg-[#3F33C0]
                hover:text-white
                transition-colors
              "
            >
              Get started
            </button>
            <div className="mt-3 flex items-center justify-center gap-2">
              <img src={checkMark} alt="Check icon" className="w-5 h-5" />
              <span className="text-sm text-gray-600">
                100% money‑back guarantee
              </span>
            </div>
            {/* Features List */}
            <ul className="mt-5 space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                AI Custom Resume Generation 5/day
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                AI Resume Builder Enhancement 5/day
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                Access to Largest Job Board
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                AI Job Matching
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Pro Plan (Highlighted with new gradient) */}
        <div className="
          rounded-lg
          p-6
          flex flex-col
          justify-between
          text-white
          bg-gradient-to-r
          from-[#3F33C0]
          to-[#9077F6]
        ">
          <div>
            <h3 className="text-xl font-semibold">$15 Monthly</h3>
           
            <hr className="my-6 border-white/20" />
            <h4 className="text-4xl font-bold">Growth</h4>
          </div>
          <div className="mt-6">
            <button
              onClick={redirect}  
              className="
                w-full
                px-6 py-3
                bg-white
                text-[#3F33C0]
                font-semibold
                rounded-md
                hover:bg-gray-100
                transition-colors
              "
            >
              Get started
            </button>
            <div className="mt-3 flex items-center justify-center gap-2">
              <img src={checkMark} alt="Check icon" className="w-5 h-5" />
              <span className="text-sm text-white/90">
                100% money‑back guarantee
              </span>
            </div>

            {/* Features List */}
            <ul className="mt-5 space-y-2">
              <li className="flex items-start gap-2 text-white">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                AI Custom Resume Generation 15/day
              </li>
              <li className="flex items-start gap-2 text-white">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                AI Resume Builder Enhancement 15/day
              </li>
              <li className="flex items-start gap-2 text-white">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                Access to Largest Job Board
              </li>
              <li className="flex items-start gap-2 text-white">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                AI Job Matching
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3: Lifetime Plan */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              $50 monthly
            </h3>
           
            <hr className="my-6" />
            <h4 className="text-4xl font-bold text-gray-900">Premium</h4>
          </div>
          <div className="mt-6">
            <button
              onClick={redirect}
              className="
                w-full
                px-6 py-3
                border border-[#3F33C0]
                text-[#3F33C0]
                font-semibold
                rounded-md
                hover:bg-[#3F33C0]
                hover:text-white
                transition-colors
              "
            >
              Get started
            </button>
            <div className="mt-3 flex items-center justify-center gap-2">
              <img src={checkMark} alt="Check icon" className="w-5 h-5" />
              <span className="text-sm text-gray-600">
                100% money‑back guarantee
              </span>
            </div>

            {/* Features List */}
            <ul className="mt-5 space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                AI Custom Resume Generation Unlimited
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                AI Resume Builder Enhancement Unlimited
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                Access to Largest Job Board
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <img src={checkMark} alt="Check icon" className="w-5 h-5 mt-[2px]" />
                AI Job Matching
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
