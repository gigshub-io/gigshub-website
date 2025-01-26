import React, { useState } from "react";
import { Container } from "../Container";
import { Accordion } from "./subComponents";

// Updated FAQ data with paraphrased content
const faqData = [
  {
    question: "How is jobbyo different from other job platforms like LinkedIn?",
    answer:
      "Unlike typical sites where you’re largely on your own, jobbyo acts like a hands-on career coach, guiding you toward your next dream position. We also automate key steps of the job search, saving you hours and delivering a highly personalized experience.",
    isOpen: false,
  },
  {
    question: "Is jobbyo free to use?",
    answer:
      "Yes! Our core features are available at no cost to all users. However, certain high-demand tools, such as AI-driven resume enhancements, might have daily usage limits. For those seeking unrestricted access, we offer a paid plan with unlimited usage.",
    isOpen: false,
  },
  {
    question: "Where do jobbyo's job listings come from?",
    answer:
      "We primarily source openings from the official career pages of numerous companies, giving you extensive options. Additionally, we aggregate fresh postings from prominent job boards, so there’s no need to jump between multiple sites. We constantly remove any suspicious listings to provide a trustworthy experience.",
    isOpen: false,
  },
  {
    question: "How secure is my personal information when using jobbyo?",
    answer:
      "We treat data protection as a top priority. jobbyo relies on encrypted connections, regular security audits, and robust privacy standards to ensure your personal information remains safe and confidential.",
    isOpen: false,
  },
  {
    question: "I have more questions!",
    answer:
      "Feel free to email us at thiago@jobbyo.ai or join our Discord community (https://discord.com/invite/Vm5xVXFU). We welcome any inquiries or feedback and look forward to helping you get the most out of jobbyo.",
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
            have doubts that can be addressed here.
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
