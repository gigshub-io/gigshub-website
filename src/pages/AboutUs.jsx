import React from "react";
import { Container } from "../components/Container";
import teamPic from "../assets/thaipic.jpg";
import aboutUsImg from "../assets/aboutus-image.png";
import aboutUsImg2 from "../assets/aboutus-image2.png";
import { Heading } from "../components/Heading/Heading";
import { TeamMember } from "../components/TeamMember";

export default function AboutUs() {
  const team = [
    {
      fullName: "Thai Braz",
      jobTitle: "CTO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      linkedInProfile: "https://www.linkedin.com/in/thain%C3%A1-braz/",
      twitterProfile: "https://twitter.com/",
      webPage: "https://www.google.com/",
      image: teamPic
    },
    {
      fullName: "Ali",
      jobTitle: "Job Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      linkedInProfile: "https://www.linkedin.com/",
      twitterProfile: "https://twitter.com/",
      webPage: "https://www.google.com/",
      image: teamPic,
    }
    
  ];
  return (
    <div className="flex flex-col w-full py-16 gap-20 mb-12 bg-off-white items-center">
      <Container className="flex flex-col gap-20 items-center">
        <div className="flex flex-row gap-20 items-center max-xl:flex-wrap max-xl:justify-center">
          <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wider text-balance text-center max-sm:text-3xl">
            A little bit <span className="text-light-purple">about</span> us at
            GigsHub
          </div>
          <div className="flex flex-col w-full justify-center text-balance text-center max-xl:px-32 max-md:px-14 max-sm:px-7">
            <div className="font-sans text-lg font-bold text-dark-blue text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
            </div>
            <div className="font-sans text-lg font-normal text-dark-blue text-justify mt-6">
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi.
            </div>
          </div>
        </div>
        <img src={aboutUsImg} alt="About Us" />
        <div className="flex px-28">
          <div className="font-sans text-3xl font-medium text-dark-blue text-center tracking-wider leading-aboutUsBanner py-20">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis.”
          </div>
        </div>
      </Container>
      <div className="flex w-full h-aboutUsBanner bg-pale-purple">
        <Container className="flex flex-row gap-28 justify-center items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 w-full">
              <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider text-center max-xl:px-32 max-md:px-14 max-sm:px-7">
                How we're making a difference, daily.
              </div>
              <p className="font-sans text-lg font-normal text-dark-purple text-center max-xl:px-32 max-md:px-14 max-sm:px-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div className="flex flex-col gap-10 items-center">
              <div className="flex flex-row gap-15 justify-center max-sm:gap-7">
                <div className="flex flex-col gap-2 w-72 max-sm:w-auto">
                  <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider max-sm:text-3xl">
                    $30m
                  </div>
                  <div>Customer savings</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider max-sm:text-3xl">
                    10m+
                  </div>
                  <div>Hours saved</div>
                </div>
              </div>
              <div className="flex flex-row gap-15 justify-center max-sm:gap-7">
                <div className="flex flex-col gap-2 w-72 max-sm:w-auto">
                  <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider max-sm:text-3xl">
                    200%
                  </div>
                  <div>Year on year growth</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider max-sm:text-3xl">
                    5k+
                  </div>
                  <div>Downloads</div>
                </div>
              </div>
            </div>
          </div>
          <img className="max-xl:hidden" src={aboutUsImg2} alt="Hero" />
        </Container>
      </div>
      <Container className="flex flex-col gap-20 items-start max-sm:items-center">
        <Heading 
          className="flex w-full justify-center"
          title="Meet the team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className="flex flex-row w-full justify-center max-sm:flex-wrap gap-y-12">
          {team.map((teamMember, index) => (
            <TeamMember
              key={index}
              fullName={teamMember.fullName}
              jobTitle={teamMember.jobTitle}
              description={teamMember.description}
              linkedInProfile={teamMember.linkedInProfile}
              twitterProfile={teamMember.twitterProfile}
              webPage={teamMember.webPage}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
