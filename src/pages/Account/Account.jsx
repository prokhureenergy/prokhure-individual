import { NavBar } from "../../components/Shared/NavBar";
import { SideBar } from "../../components/Shared/SideBar";
import { Coupons } from "./Coupons";
import { Payment } from "./Payment";
import { Profile } from "./Profile";
import { useState } from "react";

export const Account = () => {
  const [active, setActive]= useState("profile");
  return (
    <>
      <div className="bg-slate-50 w-dvh min-h-dvh">
        <NavBar />
        <div className="grid grid-cols-7 gap-8 mx-32 mt-32">
          <div className="col-span-2">
            <SideBar />
          </div>
          <div className="col-span-4 mx-2 px-4">
            <div>
            <p className="text-lg font-semibold">Account Overview</p>
          <div className="flex items-start justify-start gap-4 text-base py-4">
            <button onClick={()=>setActive("profile")} className={`py-1 px-3 ${active === "profile" ? "bg-white rounded-md shadow-md" : "hover:bg-white rounded-md hover:shadow-md"}`}>Profile</button>
            <button onClick={()=>setActive("payment")} className={`py-1 px-3 ${active === "payment" ? "bg-white rounded-md shadow-md" : "hover:bg-white rounded-md hover:shadow-md"}`}>Payment</button>
            <button onClick={()=>setActive("coupon")} className={`py-1 px-3 ${active === "coupon" ? "bg-white rounded-md shadow-md" : "hover:bg-white rounded-md hover:shadow-md"}`}>Coupons</button>
          </div>
            </div>
            {active === "profile" && <Profile/>}
            {active === "payment" && <Payment/>}
            {active === "coupon" && <Coupons/>}
          </div>
        </div>

      </div>
    </>
  );
};
