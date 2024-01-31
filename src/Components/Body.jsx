import About from "../pages/About";
import "../styles//destination.css";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function Body() {
  return <main>
  <SideBar/>
<About/>

  </main>;
}

export default Body;
