import "../styles/destination.css";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

function NavList({ direct, label,icon }) {
  return (
    <li>
  <Tippy content={label} placement='right'>
  <a href={direct}>
    <img src={icon}/>
    </a>
  </Tippy>
    </li>
  );
}

export default NavList;
