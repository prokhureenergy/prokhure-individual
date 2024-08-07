import { ChangePassword } from "./ChangePassword";
import { Profile } from "./Profile";
import { useState } from "react";

export const Account = () => {
  const [active, setActive]= useState("profile");
  return (
    <>
            <div>
            <p className="text-lg font-semibold">Account Overview</p>
          <div className="flex items-start justify-start gap-4 text-base py-4">
            <button onClick={()=>setActive("profile")} className={`py-1 ${active === "profile" ? "bg-white rounded-md shadow-md px-3" : "hover:bg-white rounded-md hover:shadow-md hover:px-3"}`}>Profile</button>
            {/* <button onClick={()=>setActive("payment")} className={`py-1 px-3 ${active === "payment" ? "bg-white rounded-md shadow-md" : "hover:bg-white rounded-md hover:shadow-md"}`}>Payment</button> */}
            <button onClick={()=>setActive("changePassword")} className={`py-1 px-3 ${active === "changePassword" ? "bg-white rounded-md shadow-md" : "hover:bg-white rounded-md hover:shadow-md"}`}>Change Password</button>
          </div>
           
            {active === "profile" && <Profile/>}
            {/* {active === "payment" && <Payment/>} */}
            {active === "changePassword" && <ChangePassword/>}
          </div>
      
    </>
  );
};
