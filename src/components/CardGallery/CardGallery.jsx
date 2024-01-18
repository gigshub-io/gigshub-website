import React from "react";
import { Card } from "./subComponents/Card";
import { Container } from "../Container";

const cardsContent = [
  {
    heading: "Smart Job Matching",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
  },
  {
    heading: "Custom CV's",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
  },
  {
    heading: "Job Co-pilot",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
  },
  {
    heading: "Job Auto Apply",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
  },
  {
    heading: "Dashboard",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
  },
  {
    heading: "Community",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis.",
  },
];

export const CardGallery = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-10 p-6">
        <p className="flex flex-col lg:flex-row lg:gap-4 justify-center font-sans text-5xl font-bold leading-7 text-dark-purple leading-headingCardsContainer text-center tracking-wider">
          What makes us <span className="text-light-purple">unique</span>at
          GigsHub
        </p>

        <div className="grid grid-row lg:grid-cols-3 gap-2 lg:gap-10">
          {cardsContent.map((card, index) => (
            <Card heading={card.heading} key={index}>
              {card.paragraph}
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};
