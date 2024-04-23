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
      <div className="flex flex-row justify-between gap-20 w-full max-xl:flex-col max-xl:items-center">
        <div className="flex flex-col gap-6 w-1/2 max-xl:w-full max-xl:justify-center">
          <div className="font-sans font-semibold text-dark-purple text-5xl tracking-wide leading-headingCardsContainer max-xl:text-center">
            Frequently asked questions
          </div>
          <div className="font-sans font-normal text-dark-purple text-lg tracking-wide leading-7 max-xl:text-center max-xl:px-32 max-md:px-14 max-sm:px-7">
            Frequently asked questions ordered by popularity. Remember that if
            the visitor has not committed to the call to action, they may still
            have questions (doubts) that can be answered.
          </div>
        </div>
        <div className="w-1/2 max-xl:w-full max-xl:px-32 max-md:px-14 max-sm:px-7">
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
