import { Link } from "react-router-dom";

/**
 * @param { kind: "primary" | "inverted" }
 * @returns
 */

export const NavLink = ({ children, to, kind = "primary" }) => {
  return (
    <Link
      to={to}
      className={kind === "primary" ? "text-dark-purple" : "text-off-white"}
    >
      {children}
    </Link>
  );
};
