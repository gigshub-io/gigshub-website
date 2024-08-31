import React from "react";
import { Card } from "./subComponents/Card";
import { Container } from "../Container";

const cardsContent = [
  {
    heading: "Smart Job Matching",
    paragraph:
      "Our AI, the cupid of job hunting, sifts through CVs, preferences, and job requirements to ensure you meet your match in the job market.",
  },
  {
    heading: "Custom CV's",
    paragraph:
      "Our platform lets you create CVs as unique as you are, showcasing your skills and experiences. Say goodbye to cookie-cutter resumes and hello to CVs that truly stand out.",
  },
  {
    heading: "Job Co-pilot",
    paragraph:
      "Meet your trusty sidekick, the Job Co-pilot! No need for hours of research; it serves up key details about companies, like their culture, employee reviews, and salary insights.",
  },
  {
    heading: "Job Auto Apply",
    paragraph:
      "Ever wished you could clone yourself to fill out job applications? We can't do that, but we can automate the job application. This feature frees you up to focus on the strategic aspects of your job search. It's like having a personal assistant, minus the coffee runs.",
  },
  {
    heading: "Dashboard",
    paragraph:
      "Your mission control for job applications! Dive into analytics, spot which companies are actively hiring (and choose your targets), and track your progress. It's like having a GPS for your job search.",
  },
  {
    heading: "Community",
    paragraph:
      "Join forces with other job seekers in our thriving hub. Track your applications, receive real-time updates on your progress, and stay as organised. It's like a virtual job seekers' support group, where tips, tricks and success stories are shared over digital coffee.",
  },
];

export const CardGallery = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-10 p-6">
        <p className="font-sans text-5xl font-bold text-dark-purple text-center tracking-wider max-md:text-3xl">
          <span>
            What makes us <span className="text-light-purple">unique</span>
          </span>
          <span className="block">at GigsHub</span>
        </p>

        <div className="grid grid-row lg:grid-cols-3 gap-2 lg:gap-10">
          {cardsContent.map((card, index) => (
            <Card heading={card.heading} key={index}>
              {card.paragraph}
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};
