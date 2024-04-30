import React from "react";
import { Card } from "./subComponents/Card";
import { Container } from "../Container";

const cardsContent = [
  {
    heading: "Smart Job Matching",
    paragraph:
      "Our AI, the cupid of job hunting, sifts through CVs, preferences, and job requirements to ensure you meet your match in the job market. It's like having your own job-seeking genie, increasing your chances of finding that dream job.", 
  },
  {
    heading: "Custom CV's",
    paragraph:
      " Ever wanted your CV to have a bit of personality? We make it easy! Our platform lets you create CVs as unique as you are, showcasing your skills and experiences like a superstar. Say goodbye to cookie-cutter resumes and hello to CVs that truly stand out.      ",
  },
  {
    heading: "Job Co-pilot",
    paragraph:
      " Meet your trusty sidekick, the Job Co-pilot! It's your secret weapon for navigating the hiring landscape. No need for hours of research; it serves up key details about companies, like their culture, employee reviews, and salary insights. Think of it as your in-flight entertainment on this job-seeking journey!",
  },
  {
    heading: "Job Auto Apply",
    paragraph:
      "Ever wished you could clone yourself to fill out job applications? We can't do that, but we can automate the tedious stuff. This feature frees you up to focus on the strategic aspects of your job search. It's like having a personal assistant, minus the coffee runs.",
  },
  {
    heading: "Dashboard",
    paragraph:
      "Your mission control for job applications! Dive into analytics, spot which companies are actively hiring (and choose your targets), and track your progress. It's like having a GPS for your job search.",
  },
  {
    heading: "Community",
    paragraph:
      "Join forces with other job seekers in our thriving hub. Track your applications, receive real-time updates on your progress, and stay as organised as a freshly alphabetized bookshelf. It's like a virtual job seekers' support group, where tips, tricks and success stories are shared over digital coffee.",
  },
];

export const CardGallery = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-10 p-6">
        <p className="flex flex-col lg:flex-row lg:gap-4 justify-center font-sans text-5xl font-bold leading-7 text-dark-purple leading-headingCardsContainer text-center tracking-wider max-md:text-3xl">
          What makes us <span className="text-light-purple">unique</span>at
          GigsHub
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
