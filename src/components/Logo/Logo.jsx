import { Link } from "react-router-dom";
import logoImg from "../../assets/HorizontalLogo.svg";

export const Logo = () => (
  <Link to="/">
    <img src={logoImg} className="h-8" alt="Logo" />
  </Link>
);
