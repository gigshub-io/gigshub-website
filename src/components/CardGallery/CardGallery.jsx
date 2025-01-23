// CardGallery.tsx
import React from "react";
import { Card } from "./subComponents/Card";

const cardsContent = [
  {
    heading: "Smart Job Matching",
    paragraph:
      "Our AI, the cupid of job hunting, sifts through CVs, preferences, and job requirements to ensure you meet your match in the job market.",
    tags: ["be an early applicant", "automation"],
  },
  {
    heading: "Custom CV's",
    paragraph:
      "Our platform lets you create CVs as unique as you are, showcasing your skills and experiences. Say goodbye to cookie-cutter resumes and hello to CVs that truly stand out.",
    tags: ["industry match"],
  },
  {
    heading: "Job Tracking",
    paragraph:
      "Your mission control for job applications! Dive into analytics, spot which companies are actively hiring, and track your progress. It’s like having a GPS for your job search.",
      tags: ["new"],
     },
];

export const CardGallery = () => {
  return (
    <section className="bg-white py-12">
      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          What makes us{" "}
          <span className="text-[#3F33C0]">unique</span> at Jobbyo
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          We combine AI-driven features with a user-friendly approach, helping
          you stand out and land the interviews you deserve.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {cardsContent.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            tags={card.tags}
            progress={card.progress}
          >
            {card.paragraph}
          </Card>
        ))}
      </div>
    </section>
  );
};
