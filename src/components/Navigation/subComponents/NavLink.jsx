// subComponents/NavLink.js
import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../utils/classNames";

/**
 * @param { kind: "primary" | "inverted" }
 * @returns
 */

export const NavLink = ({
  children,
  to,
  kind = "primary",
  isDropDown,
  className,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      to={to}
      className={classNames(
        kind === "primary"
          ? `
            lg:text-sm
            hover:text-[#9A8AF0]  /* lighter purple on hover */
            font-sans lg:font-normal
            font-bold leading-7
            ${
              isDropDown
                ? "text-sm text-[#D3FFB9]" /* if in dropdown, use brand green? */
                : "text-xl text-[#3F33C0]"
            }
          `
          : `
            hover:text-[#9A8AF0]
            font-sans font-normal
            leading-7
            ${
              isDropDown
                ? "text-sm text-[#9A8AF0]"
                : "text-sm text-white"
            }
          `,
        className
      )}
    >
      {children}
    </Link>
  );
};
