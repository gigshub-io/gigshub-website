import { Link } from "react-router-dom";

/**
 * @param { kind: "primary" | "inverted" }
 * @returns
 */

export const NavLink = ({ children, to, kind = "primary", className }) => {
  return (
    <Link
      to={to}
      className={`${className} ${
        kind === "primary" ? "text-dark-purple" : "text-off-white"
      }`}
    >
      {children}
    </Link>
  );
};
