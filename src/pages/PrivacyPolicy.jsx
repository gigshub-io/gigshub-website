import React from "react";
import { classNames } from "../utils/classNames";
import { TextDisplay } from "../components/TextDisplay/TextDisplay";
import { Container } from "../components/Container";

export default function PrivacyPolicy() {
  return (
    <Container className="flex py-20 flex-col gap-60">
      <div className="flex flex-row justify-between ">
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
        <div>
          <div className="flex flex-col gap-6 w-blogCategoriesMenu sticky top-10">
            <div className="font-sans text-2xl font-bold text-dark-purple">
              Table of contents
            </div>
            <ul className="flex flex-col">
              <li
                className={classNames(
                  "flex py-3 font-sans text-lg font-normal rounded-md text-dark-purple",
                  ""
                )}
                role="button"
              >
                <a href="#heading1">Heading 1</a>
              </li>
              <li
                className={classNames(
                  "flex py-3 font-sans text-lg font-normal rounded-md text-dark-purple",
                  "ml-6"
                )}
                role="button"
              >
                <a href="#heading2">Heading 2</a>
              </li>
              <li
                className={classNames(
                  "flex py-3 font-sans text-lg font-normal rounded-md text-dark-purple",
                  "ml-12"
                )}
                role="button"
              >
                <a href="#heading3">Heading 3</a>
              </li>
              <li
                className={classNames(
                  "flex py-3 font-sans text-lg font-normal rounded-md text-dark-purple",
                  "ml-24"
                )}
                role="button"
              >
                <a href="#heading4">Heading 4</a>
              </li>
              <li
                className={classNames(
                  "flex py-3 font-sans text-lg font-normal rounded-md text-dark-purple",
                  "ml-32"
                )}
                role="button"
              >
                <a href="#heading5">Heading 5</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-headingContainer">
          <TextDisplay headingType={1} id="heading1" />
          <TextDisplay headingType={2} id="heading2" />
          <TextDisplay headingType={3} id="heading3" />
          <TextDisplay headingType={4} id="heading4" />
          <TextDisplay headingType={5} id="heading5" />
        </div>
      </div>
    </Container>
  );
}
