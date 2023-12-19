import { Link } from "react-router-dom";

export const NavLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      style={{
        color: "#073863",
      }}
    >
      {children}
    </Link>
  );
};
