import React from "react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { CategorySection } from "../components/BlogPosts/CategorySection";
import { classNames } from "../utils/classNames";
import { LatestPostCard } from "../components/BlogPosts/LatestPostCard";
import blogPosts from "../components/BlogPosts/blogPosts.json";

const blogCategories = [
  { id: "view-all", label: "View all" },
  { id: "job-search-advice", label: "Job search advice" },
  { id: "resume-tips", label: "Resume tips" },
  { id: "career-advice", label: "Career advice" },
  { id: "education", label: "Education" },
  { id: "documentation", label: "Documentation" },
  { id: "user-guides", label: "User guides" },
];

const latestPosts = blogPosts
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 2);

export default function Blog() {
  const navigate = useNavigate();
  const { category = "view-all" } = useParams();

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
        <div className="flex flex-col gap-6 w-blogCategoriesMenu">
          <div className="font-sans text-lg font-bold text-dark-purple">
            Blog categories
          </div>
          <ul className="flex flex-col">
            {blogCategories.map(({ id, label }, index) => (
              <li
                className={classNames(
                  "flex py-3 px-4 font-sans text-base font-normal rounded-md hover:text-washed-purple",
                  id === category
                    ? "bg-semi-dark-purple text-off-white"
                    : "bg-transparent text-dark-purple"
                )}
                onClick={(event) => handleClick(id)}
                key={index}
                role="button"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <CategorySection id={category} />
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex flex-row justify-between">
          <div className="font-sans text-5xl font-bold text-dark-purple">
            Latest posts
          </div>
          <Button size="smal">View all</Button>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            {latestPosts.map((post, index) => (
              <LatestPostCard post={post} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
