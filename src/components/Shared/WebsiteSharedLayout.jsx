import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import {Footer} from "./Footer";
import { useSelector } from "react-redux";
import { PaymentModal } from "../Modal/PaymentModal";

export const WebsiteSharedLayout =()=>{
    const isOpenPaymentModal = useSelector((state)=>state.userState.isOpenPaymentModal );

    return(<>
    <div className="font-prokhure">
        {isOpenPaymentModal && <PaymentModal/>}
        <div className="h-screen "> 
    <div className="bg-white">
          <NavBar value="website" />
        </div>
        <div className="bg-[#F6F8FA]"><Outlet/></div>  
        <div>
          <Footer />
        </div>
    </div>
    </div>
    </>)
}