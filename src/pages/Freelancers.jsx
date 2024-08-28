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
        <div className="flex flex-row justify-between items-center w-full max-xl:flex-col max-xl:items-center px-32 max-sm:px-3">
          <div className="flex flex-col w-1/2 max-xl:w-full gap-6 w-textContainer max-xl:w-full max-xl:flex max-xl:items-center">
            <div className="bg-pale-purple p-2 rounded-full font-sans text-base font-semibold leading-7 text-dark-purple max-w-56 text-center">
              GigsHub for Freelancers
            </div>
            <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wider max-md:text-center">
              <span className="text-light-purple">Freelancers</span> Find Your
              Next Project Faster with Gigshub
            </div>
            <p className="font-sans text-lg font-normal leading-7 text-dark-purple max-md:text-center">
              Streamline Your Job Search, Automate Applications, and Land More
              Gigs Effortlessly with Gigshub.
            </p>
            <div className="flex pt-4 max-md:justify-center">
              <Button>Get Hired</Button>
            </div>
          </div>
          <div>
            <img
              src={freelancersHeroImg}
              alt="Hero"
              className="max-md:hidden"
            />
          </div>
        </div>
      </Container>
      <Container className="flex flex-col items-center w-screen max-xl:px-32 max-md:px-14 max-sm:px-7">
        <div className="flex flex-col bg-pale-purple rounded-2xl py-12 px-40 items-center gap-12 w-full max-sm:px-6">
          <div className="font-sans font-bold text-5xl text-dark-purple tracking-wider max-sm:text-center">
            Let the stats do the talking
          </div>
          <div className="flex flex-row justify-around gap-24 flex-wrap">
            <div className="flex flex-col gap-4">
              <div className="flex items-center font-sans font-semibold text-4xl text-purple tracking-wider max-md:text-center">
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
              <div className="flex items-center font-sans font-semibold text-4xl text-purple tracking-wider max-md:text-center">
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
              <div className="flex items-center font-sans font-semibold text-4xl text-purple tracking-wider max-md:text-center">
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
          alt="SubHero"
          className="w-stepContainer h-auto max-md:hidden"
        />
        <div className="flex flex-col gap-6 w-1/2 max-lg:w-full">
          <div className="font-sans text-5xl font-semibold text-dark-purple leading-textHero tracking-wide max-lg:text-center">
            Helping <span className="text-light-purple">freelancers</span>
          </div>

          <div className="flex flex-col gap-10 pt-7 max-lg:px-32 max-sm:px-14">
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-3xl font-bold text-dark-purple">
                  Job Auto Apply
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-3xl font-bold text-dark-purple">
                  Job Auto Apply
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-3xl font-bold text-dark-purple">
                  Dashboard
                </div>
              </div>
            </div>
            <div className="flex">
              <Button>Get Hired</Button>
            </div>
          </div>
        </div>
      </div>
      <CardGallery />
      <TestimonialCarousel />
    </div>
  );
}
