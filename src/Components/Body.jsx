import { About,SideBar,Navigation,Resume } from "../../index";
import { Outlet } from "react-router-dom";

function Body() {
  return <main>
  <Navigation/>
  <SideBar/>
<Resume/>
  </main>;
}

export default Body;
