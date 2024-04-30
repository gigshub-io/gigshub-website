import React from "react";
import freelancersHeroImg from "../assets/freelancers-hero-image.png";
import freelancersSubHeroImg from "../assets/freelancers-subhero-image.png";
import checkIcon from "../assets/check-icon.png";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { CardGallery } from "../components/CardGallery";
import { TestimonialCarousel } from "../components/TestimonialCarousel/TestimonialCarousel";

export default function JobSeekers() {
  return (
    <div className="flex flex-col w-full py-16 gap-32 mb-12 bg-off-white items-center">
      <Container>
      <div className="flex flex-row justify-between items-center w-full max-xl:flex-col max-xl:items-center px-32 max-sm:px-3">
          <div className="flex flex-col w-1/2 max-xl:w-full gap-6 w-textContainer max-xl:w-full max-xl:flex max-xl:items-center">
            <div className="bg-pale-purple p-2 rounded-full font-sans text-base font-semibold leading-7 text-dark-purple max-w-56 text-center">
              GigsHub for Job Seekers
            </div>
            <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wider max-md:text-center">
              <span className="text-light-purple">Job Seeking</span> Fast Track Your Career with Gigshub

            </div>
            <p className="font-sans text-lg font-normal leading-7 px-1 text-dark-purple max-md:text-center">
            Take your Job search to a new level. Effortless applications, personalised job matches, company insights.
            </p>
            <div className="flex pt-4 max-md:justify-center">
              <Button>Get Hired</Button>
            </div>
          </div>
          <div>
            <img src={freelancersHeroImg} alt="Hero"  className="max-md:hidden"/>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col items-center w-screen max-xl:px-32 max-md:px-14 max-sm:px-7">
        <div className="flex flex-col bg-pale-purple rounded-2xl py-12 px-40 items-center gap-12 w-full max-sm:px-6">
          <div className="font-sans font-bold text-5xl text-dark-purple tracking-wider max-sm:text-center">
            Let the stats do the talking
          </div>
          <div className="flex flex-row justify-around gap-6 flex-wrap">
            <div className="flex flex-col gap-4">
              <div className="font-sans font-semibold text-4xl text-purple tracking-wider max-md:text-center">
                150 +
              </div>
              <div className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Suspendisse varius enim in eros lorem ipsum
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-sans font-semibold text-4xl text-purple tracking-wider max-md:text-center">
                70K
              </div>
              <div className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Suspendisse varius enim in eros lorem ipsum
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-sans font-semibold text-4xl text-purple tracking-wider max-md:text-center">
                1.4B
              </div>
              <div className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Suspendisse varius enim in eros lorem ipsum
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex flex-row gap-24 items-center">
        <img src={freelancersSubHeroImg} alt="SubHero"  className="max-md:hidden"/>
        <div className="flex flex-col gap-6 w-full">
          <div className="font-sans text-5xl font-semibold text-dark-purple leading-textHero tracking-wide max-md:text-center">
            Helping <span className="text-light-purple">job seekers</span>
          </div>
          <p className="font-sans text-lg font-normal leading-7 text-dark-purple max-md:text-center">
          We hate job applications as much as you do. 


          </p>
          <div className="flex flex-col gap-10 pt-7 max-xl:px-32 max-md:px-14 max-sm:px-7">
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-lg font-bold text-dark-purple">
                Join the Job hunting revolution 
                </div>
                <div className="font-sans text-base font-normal text-dark-purple">
                Apply 15x faster using our automation toolkit. It's like a personal assistant, minus the coffee runs.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-lg font-bold text-dark-purple">
 
                One platform: Many features 


                </div>
                <div className="font-sans text-base font-normal text-dark-purple">
                Our Auto Fill automates the application process, giving you more time to focus on what truly matters
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-lg font-bold text-dark-purple">
                Apply in one click 
                </div>
                <div className="font-sans text-base font-normal text-dark-purple">
                We hate job applications as much as the next person, that's why we built Gigshub, to spare users hours in filling applications. 
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
