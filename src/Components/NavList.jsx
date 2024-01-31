import "../styles/destination.css";
import { Link } from "react-router-dom";

function NavList({ link, label }) {
  return (
    <li>
      <Link to={link}>{label}</Link>
    </li>
  );
}

export default NavList;
