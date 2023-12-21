import React from "react";
import avatarImage from "../../assets/avatar-image.png";

export const TestimonialCarousel = () => {
  return (
    <div className="flex flex-col w-full items-center gap-9 pb-20">
      <div className="flex flex-col gap-6 w-headingContainer">
        <p className="font-sans text-5xl font-bold leading-7 text-dark-purple leading-headingCardsContainer text-center tracking-wide">
          Join thousands of <br />
          satisfied customers
        </p>
        <p className="font-sans text-lg font-normal leading-7 text-dark-purple text-center tracking-wide">
          Don't just take our word for it. Hear what our customers have to say
          about <br />
          their experience with Gigs Hub.
        </p>
      </div>
      <div className="flex flex-row gap-11">
        <div className="bg-pale-purple w-testimonialContainer h-testimonialContainer rounded-2xl py-20 px-36">
          <div className="flex flex-col gap-11 items-center">
            <p className="text-center font-sans font-bold text-dark-purple text-lg leading-7 tracking-wide">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero."
            </p>
            <div className="flex flex-row gap-4">
              <img src={avatarImage} />
              <div className="flex flex-col items-center">
                <p className="font-sans font-bold mt-4">Name Surname</p>
                <p>Position, Company name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-pale-purple w-testimonialContainer h-testimonialContainer rounded-2xl py-20 px-36">
          <div className="flex flex-col gap-11 items-center">
            <p className="text-center font-sans font-bold text-dark-purple text-lg leading-7 tracking-wide">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero."
            </p>
            <div className="flex flex-row gap-4">
              <img src={avatarImage} />
              <div className="flex flex-col items-center">
                <p className="font-sans font-bold mt-4">Name Surname</p>
                <p>Position, Company name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-pale-purple w-testimonialContainer h-testimonialContainer rounded-2xl py-20 px-36">
          <div className="flex flex-col gap-11 items-center">
            <p className="text-center font-sans font-bold text-dark-purple text-lg leading-7 tracking-wide">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero."
            </p>
            <div className="flex flex-row gap-4">
              <img src={avatarImage} />
              <div className="flex flex-col items-center">
                <p className="font-sans font-bold mt-4">Name Surname</p>
                <p>Position, Company name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
