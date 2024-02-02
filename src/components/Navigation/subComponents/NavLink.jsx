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
  className,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      to={to}
      className={classNames(
        kind === "primary"
          ? "lg:text-sm text-dark-purple hover:text-purple font-sans lg:font-normal font-bold leading-7 text-xl"
          : "text-off-white hover:text-washed-purple font-sans font-normal leading-7 text-sm",

        className
      )}
    >
      {children}
    </Link>
  );
};
