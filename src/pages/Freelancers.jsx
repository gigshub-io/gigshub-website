import React from "react";
import freelancersHeroImg from "../assets/freelancers-hero-image.png";
import freelancersSubHeroImg from "../assets/freelancers-subhero-image.png";
import checkIcon from "../assets/check-icon.png";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { CardGallery } from "../components/CardGallery";
import { TestimonialCarousel } from "../components/TestimonialCarousel/TestimonialCarousel";

export default function Freelancers() {
  return (
    <div className="flex flex-col w-full py-16 gap-32 mb-12 bg-off-white items-center">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-6 w-textContainer">
            <div className="bg-pale-purple p-2 rounded-full font-sans text-base font-semibold leading-7 text-dark-purple max-w-56 text-center">
              Gigs Hub for Job Seekers
            </div>
            <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wider">
              <span className="text-light-purple">Freelancing</span> just got
              easier with us
            </div>
            <p className="font-sans text-lg font-normal leading-7 text-dark-purple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="flex pt-4">
              <Button>Get Hired</Button>
            </div>
          </div>
          <div>
            <img src={freelancersHeroImg} alt="Hero" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col bg-pale-purple rounded-2xl py-12 px-40 items-center gap-12">
          <div className="font-sans font-bold text-5xl text-dark-purple tracking-wider">
            Let the stats do the talking
          </div>
          <div className="flex flex-row justify-between gap-32">
            <div className="flex flex-col gap-4">
              <div className="font-sans font-semibold text-4xl text-purple tracking-wider">
                150 +
              </div>
              <div className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Suspendisse varius enim in eros lorem ipsum
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-sans font-semibold text-4xl text-purple tracking-wider">
                70K
              </div>
              <div className="font-sans font-normal text-base text-dark-purple tracking-wide">
                Suspendisse varius enim in eros lorem ipsum
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-sans font-semibold text-4xl text-purple tracking-wider">
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
        <img src={freelancersSubHeroImg} alt="SubHero" />
        <div className="flex flex-col gap-6 w-textContainer">
          <div className="font-sans text-5xl font-semibold text-dark-purple leading-textHero tracking-wide">
            Helping <span className="text-light-purple">job seekers</span>
          </div>
          <p className="font-sans text-lg font-normal leading-7 text-dark-purple">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="flex flex-col gap-10 pt-7">
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-lg font-bold text-dark-purple">
                  Job Auto Apply
                </div>
                <div className="font-sans text-base font-normal text-dark-purple">
                  Let automation do the boring bits.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-lg font-bold text-dark-purple">
                  Job Auto Apply
                </div>
                <div className="font-sans text-base font-normal text-dark-purple">
                  Let automation do the boring bits.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={checkIcon} alt="Check Icon" className="w-11 h-11" />
              <div className="flex flex-col gap-2">
                <div className="font-sans text-lg font-bold text-dark-purple">
                  Dashboard
                </div>
                <div className="font-sans text-base font-normal text-dark-purple">
                  Your job app stats at a glance.
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
