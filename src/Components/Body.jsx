import { About,SideBar,Navigation } from "../../index";
import { Outlet } from "react-router-dom";

function Body() {
  return <main>
  <Navigation/>
  <SideBar/>
<About/>

  </main>;
}

export default Body;
