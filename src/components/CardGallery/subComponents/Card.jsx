// subComponents/Card.tsx
import React from "react";
import checkIcon from "../../../assets/check-icon.svg"; // optional icon
import { classNames } from "../../../utils/classNames";

/**
 * @param {{
 *   heading: string;
 *   children: string;
 *   tags?: string[];
 *   progress?: number;
 * }}
 */
export const Card = ({ heading, children, tags = [], progress }) => {
  // A simple function to clamp progress between 0 and 100.
  const safeProgress = Math.min(Math.max(progress || 0, 0), 100);

  return (
    <div
      className="
        flex
        flex-col
        justify-between
        gap-4
        p-5
        rounded-xl
        shadow-md
        bg-white
        w-full
        max-w-lg
       text-gray-600       /* Primary purple text */
      "
    >
      {/* Top row: optional icon + tags */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">


          {/* Tags (only if present) */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 ml-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="
                    bg-[#D3FFB9]     /* Light green accent */
                    text-[#3F33C0]   /* Purple text */
                    text-xs
                    font-semibold
                    px-2
                    py-1
                    rounded-full
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Heading */}
      <p className="text-xl font-bold">{heading}</p>

      {/* Paragraph text */}
      <p className="text-sm leading-5 font-light tracking-wide">
        {children}
      </p>
    </div>
  );
};
