import React, { useState } from "react";
import { Container } from "../Container";
import { Accordion } from "./subComponents";

const faqData = [
  {
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    isOpen: false,
  },
  {
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    isOpen: false,
  },
  {
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    isOpen: false,
  },
  {
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    isOpen: false,
  },
  {
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    isOpen: false,
  },
  {
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    isOpen: false,
  },
];
export const Faq = () => {
  const [faQuestions, setFaQuestions] = useState(faqData);

  const handleChange = (questionIndex) => {
    const updatedFaQuestions = faQuestions.map((faQuestion, index) => ({
      ...faQuestion,
      isOpen: questionIndex === index ? !faQuestion.isOpen : false,
    }));
    setFaQuestions(updatedFaQuestions);
  };

  const handleKeyDown = (event) => {
    if (event.key === " " || event.key === "Enter") {
      handleChange();
    }
  };

  return (
    <Container>
      <div className="flex flex-col px-6 lg:px-0 lg:flex-row justify-between gap-20">
        <div className="flex flex-col gap-6 lg:w-heroImage">
          <div className="font-sans font-semibold text-dark-purple text-3xl lg:text-5xl tracking-wide lg:leading-headingCardsContainer">
            Frequently asked questions
          </div>
          <div className="font-sans font-normal text-dark-purple text-lg tracking-wide leading-7">
            Frequently asked questions ordered by popularity. Remember that if
            the visitor has not committed to the call to action, they may still
            have questions (doubts) that can be answered.
          </div>
        </div>
        <div>
          {faQuestions.map((faquestion, index) => (
            <Accordion
              isOpen={faquestion.isOpen}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
              key={index}
              questionIndex={index}
              title={faquestion.question}
            >
              {faquestion.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </Container>
  );
};
