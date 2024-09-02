import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import avatarImage from "../../assets/avatar-image.png";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";
import t5 from "../../assets/t5.png";
import { Heading } from "../Heading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-style.css";
import { Container } from "../Container";

const slides = [
  {
    testimonial: `"Gigshub transformed my job search! As a busy professional looking to switch careers, I was overwhelmed by the sheer number of applications. The smart job matching and one-click apply features saved me hours every week."`,
    avatar: t4,
    name: "Emily Johnson",
    description: "Marketing Manager, TechCorp",
  },
  {
    testimonial: `"Finding the right job was always a struggle until I started using Gigshub. The personalised job matches were spot on."`,
    avatar: avatarImage,
    name: "Michael Smith",
    description: "Software Engineer, Innovatech",
  },
  {
    testimonial: `"Gigshub made my job search so much easier! As a recent grad, I was overwhelmed with where to start. With its tailored job matches and automation, I finally felt in control and saved myself from a lot of headache and burnout."`,
    avatar: t5,
    name: "Sophia Khan",
    description: "Junior Data Analyst, DataSolutions",
  },
  {
    testimonial: `"Gigshub’s automated application process changed the game for me. No more repetitive, tedious tasks—just one click, and my applications were sent. It felt like magic."`,
    avatar: t1,
    name: "James Wilson",
    description: "Operations Specialist, LogiTech",
  },
  {
    testimonial: `"Thanks to Gigshub, I found my dream job in a fraction of the time it usually takes. The platform’s user-friendly interface and personalized job recommendations were exactly what I needed. I can’t imagine job hunting any other way."`,
    avatar: t3,
    name: "Oliver Martinez",
    description: "Product Designer, CreativeWorks",
  },
  {
    testimonial: `"Gigshub was a game changer for me. The smart job-matching algorithm not only saved me time but also helped me find roles that were a perfect fit for my skills and experience. The process was so seamless and stress-free."`,
    avatar: t2,
    name: "Liam Davis",
    description: "Financial Analyst, FinTech Solutions",
  },
];

export const TestimonialCarousel = () => {
  const titleText = "Join thousands of satisfied customers";
  const descriptionText =
    "Don't just take our word for it. Hear what our customers have to say about their experience with GigsHub.";
  return (
    <section className="overflow-x-hidden w-screen">
      <Container>
        <div className="flex flex-col items-center gap-32">
          <Heading
            title={titleText}
            description={descriptionText}
            className="mb-10"
            alignment="center"
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
          <SwiperSlide
            key={index}
            className="!w-testimonialContainer !max-md:w-screen"
          >
            <div className="bg-pale-purple rounded-2xl  py-20 px-36 max-md:px-14 max-md:px-10">
              <div className="flex flex-col gap-11 items-center">
                <p className="text-center font-sans font-bold text-dark-purple text-lg leading-7 tracking-wide px-5 max-md:w-4/5 max-sm:w-1/2">
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
