import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import avatarImage from "../../assets/avatar-image.png";
import { Heading } from "../Heading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-style.css";
import { Container } from "../Container";

const slides = [
  {
    testimonial: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."`,
    avatar: avatarImage,
    name: "Name 1",
    description: "Position, Company",
  },
  {
    testimonial: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."`,
    avatar: avatarImage,
    name: "Name 2",
    description: "Position, Company",
  },
  {
    testimonial: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."`,
    avatar: avatarImage,
    name: "Name 3",
    description: "Position, Company",
  },
  {
    testimonial: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."`,
    avatar: avatarImage,
    name: "Name 4",
    description: "Position, Company",
  },
  {
    testimonial: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."`,
    avatar: avatarImage,
    name: "Name 5",
    description: "Position, Company",
  },
  {
    testimonial: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."`,
    avatar: avatarImage,
    name: "Name 6",
    description: "Position, Company",
  },
];

export const TestimonialCarousel = () => {
  const titleText = "Join thousands of satisfied customers";
  const descriptionText =
    "Don't just take our word for it. Hear what our customers have to say about their experience with Gigs Hub.";
  return (
    <section className="overflow-hidden">
      <Container>
        <div className="flex flex-col items-center gap-32">
          <Heading
            title={titleText}
            titleSize="text-3xl lg:text-5xl"
            description={descriptionText}
            descriptionSize="text-sm text-lg"
            alignment="center"
            className="mb-10"
          />
        </div>
      </Container>
      <Swiper
        spaceBetween={44}
        slidesPerView={"auto"}
        loop
        centeredSlides
        navigation
        normalizeSlideIndex
        observer
        threshold={3}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="my-0 -mx-24"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!w-testimonialContainer">
            <div className="bg-pale-purple rounded-2xl py-20 px-36">
              <div className="flex flex-col gap-11 items-center">
                <p className="text-center font-sans font-bold text-dark-purple text-lg leading-7 tracking-wide">
                  {slide.testimonial}
                </p>
                <div className="flex flex-row gap-4">
                  <img src={slide.avatar} alt={slide.name} />
                  <div className="flex flex-col items-center">
                    <p className="font-sans font-bold mt-4">{slide.name}</p>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
