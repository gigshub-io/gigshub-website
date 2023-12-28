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
        kind === "primary" ? "text-dark-purple" : "text-off-white",
        "hover:bg-pale-purple",
        className
      )}
    >
      {children}
    </Link>
  );
};
