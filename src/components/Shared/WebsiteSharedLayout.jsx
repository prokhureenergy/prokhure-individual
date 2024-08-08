import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import {Footer} from "./Footer";

export const WebsiteSharedLayout =()=>{
    return(<>
    <div className="h-screen font-prokhure">
    <div className="bg-white">
          <NavBar value="website" />
        </div>
        <div className="bg-[#F6F8FA]"><Outlet/></div>  
        <div>
          <Footer />
        </div>
    </div>
    </>)
}