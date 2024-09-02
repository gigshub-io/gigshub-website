import React from "react";
import freelancersHeroImg from "../assets/freelancers-hero-image.png";
import freelancersSubHeroImg from "../assets/freelancers-subhero-image.png";
import checkIcon from "../assets/check-icon.png";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { CardGallery } from "../components/CardGallery";
import { TestimonialCarousel } from "../components/TestimonialCarousel/TestimonialCarousel";
import adminIcon from "../assets/adminIcon.png";
import successIcon from "../assets/successIcon.svg";
import calendar from "../assets/calendar.svg";

export default function Freelancers() {
  return (
    <div className="flex flex-col w-full py-16 gap-32 mb-12 bg-off-white items-center">
      <Container>
        <div className="flex flex-row justify-between items-center w-full max-xl:flex-col max-xl:items-center px-8 max-sm:px-3">
          <div className="flex flex-col w-1/2 max-xl:w-full gap-6 w-textContainer max-xl:w-full max-xl:flex max-xl:items-center max-sm:text-left max-sm:items-start max-sm:justify-start max-lg:text-left max-lg:items-start max-lg:justify-start">
            <div className="bg-pale-purple p-2 rounded-full font-sans text-base font-semibold leading-7 text-dark-purple max-w-56 text-center">
              GigsHub for Freelancers
            </div>
            <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wider max-md:text-left max-sm:text-left max-sm:text-4xl">
              <span className="text-light-purple">Find Your Next </span> Project
              Faster with Gigshub
            </div>
            <div>
              <img
                src={freelancersHeroImg}
                alt="Hero"
                className="max-lg:block lg:hidden"
              />
            </div>
            <p className="font-sans text-lg font-normal leading-7 text-dark-purple max-md:text-left max-sm:text-left">
              Streamline Your Job Search, Automate Applications, and Land More
              Gigs Effortlessly with Gigshub.
            </p>
            <div className="flex pt-4 max-md:justify-start max-sm:justify-start">
              <Button>Get Hired</Button>
            </div>
          </div>
          <div className="max-lg:hidden">
            <img src={freelancersHeroImg} alt="Hero" />
          </div>
        </div>
      </Container>
      <Container className="flex flex-col items-center w-screen max-xl:px-32 max-lg:px-7 max-sm:px-7">
        <div className="flex flex-col bg-pale-purple rounded-2xl py-12 px-20 items-center gap-12 w-full max-sm:px-6">
          <div className="font-sans font-bold text-5xl text-dark-purple tracking-wider max-sm:text-center max-lg:text-center">
            Let the stats do the talking
          </div>
          <div className="flex flex-row justify-around gap-24 flex-wrap">
            <div className="flex flex-col gap-4">
              <div className="flex items-center font-sans font-semibold text-4xl text-purple tracking-wider max-lg:text-center">
                <span>150K</span>
                <img
                  src={adminIcon}
                  className="h-12 w-12 ml-2"
                  alt="Users Icon"
                />
              </div>
              <div className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Number of Active Users
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center font-sans font-semibold text-4xl text-purple tracking-wider max-lg:text-center">
                <span>250K</span>
                <img
                  src={successIcon}
                  className="h-12 w-12 ml-2"
                  alt="Successful Hires Icon"
                />
              </div>
              <div className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Successful Hires
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center font-sans font-semibold text-4xl text-purple tracking-wider max-lg:text-center">
                <span>10 Days</span>
                <img
                  src={calendar}
                  className="h-12 w-12 ml-2"
                  alt="Calendar Icon"
                />
              </div>
              <div className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Average Time to Hire
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex flex-row gap-24 items-center">
        <img
          src={freelancersSubHeroImg}
          alt="SubHero Main"
          className="w-stepContainer h-auto hidden lg:block"
        />
        <div className="flex flex-col gap-6 w-full">
          <div
            className="font-sans text-5xl font-semibold text-dark-purple leading-textHero tracking-wide
          max-lg:text-center max-lg:items-start max-lg:justify-start max-lg:px-7
          max-sm:text-center max-sm:items-start max-sm:justify-start max-sm:px-7"
          >
            Helping <span className="text-light-purple">freelancers</span>
          </div>

          <div className="flex flex-col gap-10 pt-7 max-xl:px-32 max-sm:px-7">
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-3xl font-bold text-dark-purple">
                  Tailored project matches
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-3xl font-bold text-dark-purple">
                  Automated proposals
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-3xl font-bold text-dark-purple">
                  Direct Outreach
                </div>
              </div>
            </div>
            <div className="flex">
              <Button>Get Hired</Button>
            </div>
            <img
              src={freelancersSubHeroImg}
              alt="SubHero Sm"
              className="w-stepContainer h-auto block lg:hidden"
            />
          </div>
        </div>
      </div>
      <CardGallery />
      <TestimonialCarousel />
    </div>
  );
}
