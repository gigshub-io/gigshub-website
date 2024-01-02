import React from "react";
import { Container } from "../components/Container";
import aboutUsImg from "../assets/aboutus-image.png";
import aboutUsImg2 from "../assets/aboutus-image2.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full py-16 gap-20 mb-12 bg-off-white items-center">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-row justify-between items-center">
          <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wider">
            A little bit <span className="text-light-purple">about</span> us at
            GigsHub
          </div>
          <div className="flex flex-col">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              varius faucibus massa sollicitudin amet augue. Nibh metus a semper
              purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
              scelerisque ac adipiscing velit non nulla in amet pellentesque.
            </div>
            <div>
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis
              consectetur eget commodo vitae. Amet pellentesque sit pulvinar
              lorem mi.
            </div>
          </div>
        </div>
        <img src={aboutUsImg} alt="About Us" />
        <div>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis.”
        </div>
      </Container>
      <div className="flex w-full h-aboutUsBanner bg-pale-purple">
        <Container className="flex flex-row gap-28 justify-between items-center">
          <div className="flex flex-col gap-6 w-textContainer">
            <div className="font-sans text-5xl font-bold text-dark-purple tracking-wider">
              How we're making a difference, daily.
            </div>
            <p className="font-sans text-lg font-normal text-dark-purple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <img src={aboutUsImg2} alt="Hero" />
        </Container>
      </div>
    </div>
  );
}
