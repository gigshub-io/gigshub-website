import { Link } from "react-router-dom";
import logoPrimary from "../../assets/HorizontalLogo.svg";
import logoInverted from "../../assets/logo-pale-purple.svg";
import { classNames } from "../../utils/classNames";

/**
 * @param { kind: "primary" | "inverted" }
 * @returns
 */
export const Logo = ({ kind = "primary", className, onClickFunction }) => (
  <Link to="/">
    <img
      src={kind === "primary" ? logoPrimary : logoInverted}
      className={classNames("h-logo", className)}
      alt="Jobbyo Logo"
      onClick={onClickFunction}
    />
  </Link>
);
