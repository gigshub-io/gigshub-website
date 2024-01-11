import React, { useState } from "react";
import { classNames } from "../utils/classNames";
import { TextDisplay } from "../components/TextDisplay/TextDisplay";
import { Container } from "../components/Container";

const privacYPolicyText = [
  {
    heading: "Heading 1",
    type: 1,
    children: [
      {
        heading: "Heading 2",
        type: 2,
        children: [
          {
            heading: "Heading 3",
            type: 3,
            children: [
              {
                heading: "Heading 4",
                type: 4,
                children: [
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading: "Heading 6", type: 6 },
                      { heading: "Heading 6", type: 6 },
                    ],
                  },
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                ],
              },
              {
                heading: "Heading 4",
                type: 4,
                children: [
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            heading: "Heading 3",
            type: 3,
            children: [
              {
                heading: "Heading 4",
                type: 4,
                children: [
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                ],
              },
              {
                heading: "Heading 4",
                type: 4,
                children: [
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading: "Heading 6", type: 6 },
                      { heading: "Heading 6", type: 6 },
                    ],
                  },
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "Heading 2",
        type: 2,
        children: [
          {
            heading: "Heading 3",
            type: 3,
            children: [
              {
                heading: "Heading 4",
                type: 4,
                children: [
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading: "Heading 6", type: 6 },
                      { heading: "Heading 6", type: 6 },
                    ],
                  },
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                ],
              },
              {
                heading: "Heading 4",
                type: 4,
                children: [
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                ],
              },
            ],
          },
          {
            heading: "Heading 3",
            type: 3,
            children: [
              {
                heading: "Heading 4",
                type: 4,
                children: [
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                ],
              },
              {
                heading: "Heading 4",
                type: 4,
                children: [
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading: "Heading 6", type: 6 },
                      { heading: "Heading 6", type: 6 },
                    ],
                  },
                  {
                    heading: "Heading 5",
                    type: 5,
                    children: [
                      { heading6: "Heading 6" },
                      { heading6: "Heading 6" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <Container className="flex py-20 flex-col gap-60">
      <div className="flex flex-row justify-between">
        <div className="font-sans text-7xl font-bold text-dark-purple">
          Privacy Policy
        </div>
        <div className="flex flex-col font-sans text-lg font-normal text-dark-purple w-paragraph">
          <span className="font-bold mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue.
          </span>
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
          eget commodo vitae. Amet pellentesque sit pulvinar lorem mi.
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-6 w-blogCategoriesMenu">
          <div className="font-sans text-2xl font-bold text-dark-purple">
            Table of contents
          </div>
          <ul className="flex flex-col">
            <li
              className={classNames(
                "flex py-3 font-sans text-base font-normal rounded-md hover:text-washed-purple",
                "text-semi-dark-purple"
              )}
              // onClick={(event) => handleClick(type)}
              role="button"
            >
              Heading 1
            </li>
            <li
              className={classNames(
                "flex py-3 font-sans text-base font-normal rounded-md hover:text-washed-purple",
                "text-semi-dark-purple ml-6"
              )}
              // onClick={(event) => handleClick(type)}
              role="button"
            >
              Heading 2
            </li>
            <li
              className={classNames(
                "flex py-3 font-sans text-base font-normal rounded-md hover:text-washed-purple",
                "text-semi-dark-purple ml-12"
              )}
              // onClick={(event) => handleClick(type)}
              role="button"
            >
              Heading 3
            </li>
            <li
              className={classNames(
                "flex py-3 font-sans text-base font-normal rounded-md hover:text-washed-purple",
                "text-semi-dark-purple ml-24"
              )}
              // onClick={(event) => handleClick(type)}
              role="button"
            >
              Heading 4
            </li>
            <li
              className={classNames(
                "flex py-3 font-sans text-base font-normal rounded-md hover:text-washed-purple",
                "text-semi-dark-purple ml-32"
              )}
              // onClick={(event) => handleClick(type)}
              role="button"
            >
              Heading 5
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 w-headingContainer">
          <TextDisplay headingType={1} />
          <TextDisplay headingType={2} />
          <TextDisplay headingType={3} />
          <TextDisplay headingType={4} />
          <TextDisplay headingType={5} />
        </div>
      </div>
    </Container>
  );
}
