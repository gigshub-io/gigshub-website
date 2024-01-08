import React from "react";
import { Container } from "../components/Container";
import { useParams, useNavigate } from "react-router-dom";
import { CategorySection } from "../components/BlogPosts/CategorySection";

const blogCategories = [
  { id: "job-search-advice", label: "Job search advice" },
  { id: "resume-tips", label: "Resume tips" },
  { id: "career-advice", label: "Career advice" },
  { id: "education", label: "Education" },
  { id: "documentation", label: "Documentation" },
  { id: "user-guides", label: "User guides" },
];

export default function Blog() {
  const navigate = useNavigate();
  const { category } = useParams();

  const handleClick = (category) => {
    navigate(`${category}`);
  };

  return (
    <Container className="py-20 flex flex-col gap-20">
      <div className="flex flex-col gap-6">
        <div className="font-sans text-7xl font-bold text-dark-purple leading-textHero tracking-wider w-textContainer3">
          A bunch of <span className="text-light-purple">educational</span>{" "}
          material
        </div>
        <p className="font-sans text-lg font-normal leading-7 text-dark-purple w-textContainer">
          We automate applications, tailor CVs, and ensure ideal matches, so you
          can focus on what truly matters - nailing interviews.
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-6">
          <div className="font-sans text-lg font-bold text-dark-purple">
            Blog categories
          </div>
          <ul className="flex flex-col">
            {blogCategories.map((category, index) => (
              <li
                className="flex py-3 px-4 font-sans text-base font-normal text-dark-purple"
                onClick={(event) => handleClick(category.id)}
                key={index}
              >
                {category.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <CategorySection id={category} />
        </div>
      </div>
    </Container>
  );
}
