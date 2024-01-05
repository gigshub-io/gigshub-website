import React from "react";
import { Container } from "../Container";
import { Accordion } from "./subComponents";
export const Faq = () => {
  const FaQuestions = [
    {
      question: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    },
    {
      question: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    },
    {
      question: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    },
    {
      question: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    },
    {
      question: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    },
    {
      question: "Question text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
    },
  ];
  return (
    <Container>
      <div className="flex flex-row justify-between gap-20">
        <div className="flex flex-col gap-6 w-heroImage">
          <div className="font-sans font-semibold text-dark-purple text-5xl tracking-wide leading-headingCardsContainer">
            Frequently asked questions
          </div>
          <div className="font-sans font-normal text-dark-purple text-lg tracking-wide leading-7">
            Frequently asked questions ordered by popularity. Remember that if
            the visitor has not committed to the call to action, they may still
            have questions (doubts) that can be answered.
          </div>
        </div>
        <div>
          {FaQuestions.map((faquestion, index) => (
            <Accordion key={index} title={faquestion.question}>
              {faquestion.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </Container>
  );
};
