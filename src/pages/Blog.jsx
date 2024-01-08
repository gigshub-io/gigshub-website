import React from "react";
import { Container } from "../components/Container";
import { Route, Routes, useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  console.log("category", category);
  return <div>{category}</div>;
};

export default function Blog() {
  const blogCategories = [
    "View all",
    "Job search advice",
    "Resume tips",
    "Career advice",
    "Education",
    "Documentation",
    "User guides",
  ];
  return (
    <Container className="py-24 flex flex-col gap-20">
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
              <li className="flex py-3 px-4 font-sans text-base font-normal text-dark-purple">
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Routes>
            <Route path=":category" element={<Category />} />
          </Routes>
        </div>
      </div>
    </Container>
  );
}
