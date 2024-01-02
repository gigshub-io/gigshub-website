import React from "react";
import { Card } from "./subComponents/Card";
import { Container } from "../Container";

export const CardGallery = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-10">
        <p className="font-sans text-5xl font-bold leading-7 text-dark-purple w-headingContainer leading-headingCardsContainer text-center tracking-wider">
          What makes us <span className="text-light-purple">unique</span>
          <br /> at GigsHub
        </p>

        <div className="grid grid-cols-3 gap-10">
          <Card heading="Smart Job Matching">
            {
              "Our AI, the cupid of job hunting, sifts through CVs, preferences, and job requirements to ensure you meet your..."
            }
          </Card>
          <Card heading="Custom CV's">
            {
              "Ever wanted your CV to have a bit of personality? We make it easy! Our platform lets you create CVs as unique..."
            }
          </Card>
          <Card heading="Job Co-pilot">
            {
              "Meet your trusty sidekick, the Job Co-pilot! It's your secret weapon for navigating the hiring landscape. No..."
            }
          </Card>
          <Card heading="Job Auto Apply">
            {
              "Ever wished you could clone yourself to fill out job applications? We can't do that, but we can automate the tedious..."
            }
          </Card>
          <Card heading="Dashboard">
            {
              "Your mission control for job applications! Dive into analytics, spot which companies are actively hiring..."
            }
          </Card>
          <Card heading="Community">
            {
              "Join forces with other job seekers in our thriving hub. Track your applications, receive real-time updates..."
            }
          </Card>
        </div>
      </div>
    </Container>
  );
};
