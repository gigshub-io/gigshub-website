import React, { memo, useMemo } from "react";
import Avatar from "@mui/material/Avatar";
import { Container } from "../Container";

// Example images (replace these with your own, compressed versions if possible)
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";
import t5 from "../../assets/t5.png";
import avatarImage from "../../assets/avatar-image.png";

/**
 * 1) Moved reviews array outside the component to prevent recreation on each render.
 * 2) Consider pagination or virtualization if handling a large number of reviews.
 */
const reviewsData = [
  {
    name: "Emily Johnson",
    avatar: t4,
    stars: 5,
    text: `Jobbyo transformed my job search! As a busy professional looking to switch careers, I was overwhelmed by the sheer number of applications. The smart job matching and one-click apply features saved me hours every week.`,
  },
  {
    name: "Michael Smith",
    avatar: avatarImage,
    stars: 5,
    text: `Finding the right job was always a struggle until I started using Jobbyo. The personalized job matches were spot on.`,
  },
  {
    name: "Sophia Brown",
    avatar: t5,
    stars: 5,
    text: `Jobbyo made my job search so much easier! As a recent grad, I was overwhelmed with where to start. With its tailored job matches and automation, I finally felt in control and saved myself from a lot of headaches and burnout.`,
  },
  {
    name: "James Wilson",
    avatar: t1,
    stars: 5,
    text: `Jobbyo’s automated application process changed the game for me. No more repetitive, tedious tasks—just one click, and my applications were sent. It felt like magic.`,
  },
  {
    name: "Oliver Martinez",
    avatar: t3,
    stars: 5,
    text: `Thanks to Jobbyo, I found my dream job in a fraction of the time it usually takes. The platform’s user-friendly interface and personalized job recommendations were exactly what I needed. I can’t imagine job hunting any other way.`,
  },
  {
    name: "Liam Davis",
    avatar: t2,
    stars: 5,
    text: `Jobbyo was a game changer for me. The smart job-matching algorithm not only saved me time but also helped me find roles that were a perfect fit for my skills and experience. The process was so seamless and stress-free.`,
  },
];

/**
 * Memoized StarIcon to avoid re-declaring the same SVG inline.
 */
const StarIcon = memo(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-orange-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.257 3.867a1 1 0 00.95.69h4.065c.969 0 1.371 1.24.588 1.81l-3.289 2.39a1 1 0 00-.364 1.118l1.257 3.868c.3.92-.755 1.688-1.54 1.118l-3.29-2.389a1 1 0 00-1.176 0l-3.288 2.389c-.785.57-1.84-.198-1.54-1.118l1.257-3.868a1 1 0 00-.364-1.118l-3.29-2.39c-.782-.57-.38-1.81.589-1.81h4.065a1 1 0 00.95-.69l1.257-3.867z" />
    </svg>
  );
});

/**
 * Separate component for star rating, also memoized.
 */
const StarRating = memo(function StarRating({ count }) {
  const starsArray = useMemo(() => Array(count).fill(0), [count]);

  return (
    <div className="flex">
      {starsArray.map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
});

/**
 * Individual Review Card, memoized to prevent unnecessary re-renders.
 */
const ReviewCard = memo(function ReviewCard({ review }) {
  return (
    <div
      className="
        bg-white
        rounded-lg
        shadow-md
        p-5
        flex
        flex-col
        gap-3
        h-full
      "
    >
      <div className="flex items-center gap-3">
        {/* Lazy-load the Avatar image using imgProps */}
        <Avatar
          src={review.avatar}
          alt={review.name}
          sx={{ width: 48, height: 48 }}
          imgProps={{ loading: "lazy" }}
        />
        <div className="flex flex-col">
          <p className="font-semibold text-gray-900">{review.name}</p>
          {/* Star rating */}
          <StarRating count={review.stars} />
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
    </div>
  );
});

/**
 * The main SocialProof component, also memoized.
 */
export const SocialProof = memo(function SocialProof() {
  // Memoize the reviews data in case the parent re-renders frequently.
  const reviews = useMemo(() => reviewsData, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#3F33C0] to-[#9077F6] py-16">
      <Container>
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Trusted by thousands of users worldwide.
          </h2>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row justify-around items-center mb-12 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">160,000+</p>
            <p className="text-gray-100">Total Users</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">Interview Rate</p>
            <p className="text-gray-100">5x more</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">Avg. User Review</p>
            <p className="text-gray-100">8.95/10</p>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </Container>
    </div>
  );
});
