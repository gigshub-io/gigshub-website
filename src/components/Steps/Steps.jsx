import React, { useState } from "react";
import { Container } from "../Container";

// Replace these with your actual image imports
import custom_cv from "../../assets/custom_cv.png";
import resume_builder from "../../assets/resume_builder.png";
import job_search from "../../assets/job_search.png";

// UPDATED step data
const stepsData = [
  {
    title: "Custom CV",
    subtitle: "Tailored to Each Job Posting",
    description:
      "Effortlessly adapt your CV to match each job’s requirements. From role-specific keywords to dynamic bullet points, our AI ensures you always stand out from the crowd.",
    image: custom_cv,
  },
  {
    title: "Resume Builder",
    subtitle: "Easiest Way to Create Your CV with AI Assistance",
    description:
      "No guesswork needed! Our intuitive Resume Builder helps you craft an ATS-friendly CV step-by-step. Simply focus on your content; we’ll handle the formatting and optimization.",
    image: resume_builder,
  },
  {
    title: "Job Search",
    subtitle: "Curated Opportunities from the Entire Web",
    description:
      "Say goodbye to endless scrolling. Our advanced algorithm surfaces job openings that perfectly align with your skills, experience, and preferences—all in one place.",
    image: job_search,
  },
];

// Main heading text
const bigHeading = "It's never been easier to land a job";
const highlightedHeading = "Features developed to get you hired";
const buttonText = "Create Free Resume";

export const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Destructure current step data
  const { title, subtitle, description, image } = stepsData[activeStep];
  const redirect = () => {
    window.open("https://app.jobbyo.ai", "_blank");
  };
  
  return (
    <section className="bg-white py-12">
      <Container>
        {/* Top headings, left-aligned */}
        <div className="flex flex-col items-start gap-4 mb-12 px-4">
          {/* Smaller label text in brand color */}
          <p className="text-base font-semibold text-[#3F33C0]">
            {bigHeading}
          </p>

          {/* Main heading: match Hero style */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {/* Split the highlighted heading so one part is styled */}
            <span className="mr-2">
              {highlightedHeading.split(" ")[0]}
            </span>
            <span className="text-[#3F33C0]">
              {highlightedHeading.split(" ")[1]}
            </span>
            <span className="ml-2">
              {highlightedHeading.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          {/* CTA Button: match Hero style */}
          <button
            onClick={redirect}
            className="
              mt-4 
              px-8 
              py-3 
              bg-[#3F33C0] 
              text-white 
              font-semibold 
              rounded-md
              hover:bg-[#352aa6]
              transition
            "
          >
            {buttonText}
          </button>
        </div>

        {/* Main content: left side (image) & right side (steps list) */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 px-4">
          {/* Left side: shows active step's image and description */}
          <div className="flex-1 flex flex-col items-start gap-6">
            {/* Image wrapper with modern hover/transition effects */}
            <div className="w-full max-w-lg">
              <img
                src={image}
                alt={`Step ${activeStep + 1}`}
                className="
                  w-full 
                  h-auto 
                  rounded-md 
                  shadow
                  transition-transform 
                  transform 
                  hover:scale-105 
                  hover:shadow-xl 
                  cursor-pointer
                "
              />
            </div>
            {/* Description box */}
            <div className="mt-4 p-4 bg-gray-50 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>

          {/* Right side: vertical list of steps */}
          <div className="w-full max-w-sm relative self-start">
            {/* Vertical highlight bar: brand color (#3F33C0) */}
            <div
              className="absolute left-0 top-0 w-1 bg-[#3F33C0] transition-all duration-300"
              style={{
                height: `${(100 / stepsData.length).toFixed(2)}%`,
                transform: `translateY(${
                  activeStep * (300 / stepsData.length)
                }%)`,
              }}
            />

            {/* Step buttons */}
            <div className="flex flex-col pl-4 border-l border-gray-200 space-y-8">
              {stepsData.map((item, index) => {
                const isActive = index === activeStep;
                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveStep(index)}
                    className={`
                      text-left transition-colors
                      ${isActive ? "text-[#3F33C0]" : "text-gray-800"}
                    `}
                  >
                    <p className="text-lg md:text-xl font-bold mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      {item.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
