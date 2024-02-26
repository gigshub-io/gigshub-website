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
          ? `lg:text-base hover:text-purple font-sans lg:font-normal font-bold leading-7 ${
              isDropDown
                ? "text-sm text-light-purple"
                : "text-xl text-dark-purple"
            }`
          : `hover:text-washed-purple font-sans font-normal leading-7 ${
              isDropDown
                ? "text-sm text-washed-purple"
                : "text-sm text-off-white"
            }`,
        className
      )}
    >
      {children}
    </Link>
  );
};
