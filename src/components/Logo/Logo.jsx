import { Link } from "react-router-dom";
import logoPrimary from "../../assets/HorizontalLogo.svg";
import logoInverted from "../../assets/logo-pale-purple.svg";

/**
 * @param { kind: "primary" | "inverted" }
 * @returns
 */
export const Logo = ({ kind = "primary" }) => (
  <Link to="/">
    <img
      src={kind === "primary" ? logoPrimary : logoInverted}
      className="h-8"
      alt="GigsHub Logo"
    />
  </Link>
);
