import React, { useState } from "react";
import { Heading } from "../components/Heading/Heading";
import { Container } from "../components/Container";
import { PricingCard } from "../components/PricingCard";
import { SocialProof } from "../components/SocialProof";
import { CardGallery } from "../components/CardGallery";
import { CtaBanner } from "../components/CtaBanner";
import { Faq } from "../components/Faq";
import ctaImage from "../assets/pricing-cta-banner.png";
import aboutUsImg from "../assets/aboutus-image.png";

export default function Pricing() {
  const [isBillingAnnual, setIsBillingAnnual] = useState(false);

  const handleBillingSelection = () => {
    setIsBillingAnnual((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full gap-40 mb-12  items-center">
      <Container>
      

 

        {/* Pricing Card Section */}
        <div className="flex flex-col gap-3 justify-center items-center md:flex-row px-4 md:px-10">
            <PricingCard/>
        </div>
      </Container>

      <Faq />

      <Container>
        <div className="flex flex-col items-center gap-6 py-8">
          <h2 className="text-4xl font-bold text-dark-purple">
            Compare Our Plans
          </h2>
          <p className="text-lg text-dark-purple text-center max-w-2xl">
            Below is a quick look at what's included in each of our plans—whether
            you're on the Free Plan or you’ve upgraded to Starter, Growth, or Premium.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto w-full mt-6">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-pale-purple text-dark-purple">
                <tr>
                  <th className="p-3 text-left border border-dark-purple"></th>
                  <th className="p-3 text-left border border-dark-purple">
                    Free Plan
                  </th>
                  <th className="p-3 text-left border border-dark-purple">
                    Starter
                  </th>
                  <th className="p-3 text-left border border-dark-purple">
                    Growth
                  </th>
                  <th className="p-3 text-left border border-dark-purple">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-dark-purple">
                    AI Custom Resume Generation
                  </td>
                  <td className="p-3 border border-dark-purple">1/day</td>
                  <td className="p-3 border border-dark-purple">5/day</td>
                  <td className="p-3 border border-dark-purple">15/day</td>
                  <td className="p-3 border border-dark-purple">Unlimited</td>
                </tr>

                {/* AI Resume Builder Enhancement */}
                <tr>
                  <td className="p-3 border border-dark-purple">
                    AI Resume Builder Enhancement
                  </td>
                  <td className="p-3 border border-dark-purple">1/day</td>
                  <td className="p-3 border border-dark-purple">5/day</td>
                  <td className="p-3 border border-dark-purple">15/day</td>
                  <td className="p-3 border border-dark-purple">Unlimited</td>
                </tr>

                {/* Instant Job Alerts */}
                <tr>
                  <td className="p-3 border border-dark-purple">
                    Instant Job Alerts
                  </td>
                  <td className="p-3 border border-dark-purple">✖</td>
                  <td className="p-3 border border-dark-purple">✖</td>
                  <td className="p-3 border border-dark-purple">✖</td>
                  <td className="p-3 border border-dark-purple">Unlimited</td>
                </tr>

                {/* Exclusive Career Coach Support */}
                <tr>
                  <td className="p-3 border border-dark-purple">
                    Exclusive Career Coach Support (1-1 monthly)
                  </td>
                  <td className="p-3 border border-dark-purple">✖</td>
                  <td className="p-3 border border-dark-purple">✖</td>
                  <td className="p-3 border border-dark-purple">✖</td>
                  <td className="p-3 border border-dark-purple">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>

    </div>
  );
}
