import React from "react";
import { Container } from "../components/Container";
import thai from "../assets/thai.jpg";
import ali from "../assets/ali.jpg";
import aboutUsImg from "../assets/aboutus-image.png";
import aboutUsImg2 from "../assets/aboutus-image2.png";
import { Heading } from "../components/Heading/Heading";
import { TeamMember } from "../components/TeamMember";

export default function AboutUs() {
  const team = [
    {
      fullName: "Thiago Braz",
      jobTitle: "CTO",
      description:
        "Thiago, a 28-year-old Brazilian-born driven by a passion for automating processes with innovative tech solutions, AI, and entrepreneurship, he loves solving complex challenges with simple solutions. When he's not behind a screen, you'll find him exploring new cultures and traveling the world",
      linkedInProfile: "https://www.linkedin.com/in/thain%C3%A1-braz/",

      imageMember: thai,
    },
    {
      fullName: "Ali",
      jobTitle: "CMO",
      description:
        "Ali, a 24-year-old Somali-born, London-raised marketer, is driven by a passion for solving problems and a love for all things digital. When he's not tackling marketing challenges, he's enduring the ups and downs of being a Chelsea fan or playing his favourite video games.",
      linkedInProfile: "https://www.linkedin.com/",

      imageMember: ali,
    },
  ];
  return (
    <div className="flex flex-col w-full py-16 gap-20 mb-12 bg-white items-center">
      <Container className="flex flex-col gap-20 items-center">
        <div className="flex flex-row gap-20 items-center max-xl:flex-wrap max-xl:justify-center">
          <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wider text-balance text-center max-sm:text-3xl">
            <span className="text-light-purple">About us</span> at Jobbyo
          </div>
          <div className="flex flex-col w-full justify-center text-balance text-center max-xl:px-32 max-md:px-14 max-sm:px-7 max-sm:text-left">
            {/* Added 'max-sm:text-left' to align text to the left on smaller screens */}
            <div className="font-sans text-lg font-normal text-dark-blue text-justify">
              Jobbyo emerged from a shared{" "}
              <span className="font-semibold">frustration </span> among us and
              countless peers—an exasperation with the tedious, soul-draining
              dance of traditional job hunting. We felt the burnout, the{" "}
              <span className="font-semibold">endless applications</span>, and
              the struggle to stand out in a sea of candidates.
              <br />
              <br />
              As we navigated these challenges ourselves, the idea for Jobbyo
              began to take shape. What if there was a{" "}
              <span className="font-semibold">better way?</span> What if job
              seekers could find the{" "}
              <span className="font-semibold">right opportunities</span> without
              the endless applications and rejections? Fueled by this collective
              experience, we knew our mission was clear: to revolutionise the
              job search process for the modern world.
              <br />
              <br />
              Our goal is to build the world's first{" "}
              <span className="font-semibold">
                candidate-first recruiting platform
              </span>{" "}
              by creating a streamlined, intelligent platform that centralises
              and optimises every step from{" "}
              <span className="font-semibold">
                first application to final interview.
              </span>
            </div>
            <div className="font-sans text-lg font-normal text-dark-blue text-justify mt-6"></div>
          </div>
        </div>
        <div className="flex px-10">
          <div className="font-sans text-3xl font-medium text-dark-blue text-center tracking-wider leading-aboutUsBanner py-10">
            “In the world of job hunting, the struggle has been all too real.
            Hours upon hours spent each day on painstaking job applications,
            leaving individuals exhausted and unmotivated. So, we reimagined it
            all. Our solution? ”
          </div>
        </div>
      </Container>
      <div className="flex w-full h-aboutUsBanner bg-pale-purple">
        <Container className="flex flex-row gap-28 justify-center items-center">
          <div className="flex flex-col gap-28 max-sm:gap-14">
            <div className="flex flex-col gap-6 w-full">
              <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider text-center max-xl:px-32 max-md:px-14 max-sm:px-7 leading-20">
                How we’re making{" "}
                <span className="hidden lg:block">a difference</span>
                <span className="lg:hidden">a difference.</span>
              </div>
            </div>
            <div className="flex flex-col gap-10 items-center max-sm:gap-5 max-sm:-5">
              <div className="flex flex-row gap-15 justify-center max-sm:flex-col max-sm:gap-7">
                <div className="flex flex-col gap-2 w-72 max-sm:w-auto max-sm:text-center">
                  <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider max-sm:text-3xl">
                    $30m
                  </div>
                  <div className="max-sm:text-center">Customer savings</div>
                </div>
                <div className="hidden max-sm:block max-sm:w-full max-sm:h-[1px] max-sm:bg-black max-sm:opacity-20"></div>
                <div className="flex flex-col gap-2 max-sm:text-center">
                  <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider max-sm:text-3xl">
                    10m+
                  </div>
                  <div>Hours saved</div>
                </div>
                <div className="hidden max-sm:block max-sm:w-full max-sm:h-[1px] max-sm:bg-black max-sm:opacity-20"></div>
              </div>
              <div className="flex flex-row gap-15 justify-center max-sm:flex-col max-sm:gap-7">
                <div className="flex flex-col gap-2 w-72 max-sm:w-auto max-sm:text-center">
                  <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider max-sm:text-3xl">
                    200%
                  </div>
                  <div>Year on year growth</div>
                </div>
                <div className="hidden max-sm:block max-sm:w-full max-sm:h-[1px] max-sm:bg-black max-sm:opacity-20"></div>
                <div className="flex flex-col gap-2 max-sm:text-center">
                  <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider max-sm:text-3xl">
                    5k+
                  </div>
                  <div>Downloads</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="max-xl:hidden"
            src={aboutUsImg2}
            alt="Female-looking individual working on a laptop"
          />
        </Container>
      </div>
    </div>
  );
}
