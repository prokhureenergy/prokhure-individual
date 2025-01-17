import { useState } from "react";
import { NavBar } from "../../components/Shared/NavBar";
import { Messages } from "../Messages/Messages";
import { useSelector } from "react-redux";
import { ActiveItem } from "../../components/SideBar/SideBar";
import { Support } from "../Support/Support";
import { Account } from "../Account/Account";
import { Category } from "../Category/Category";
import { SidebarList } from "../../components/SideBar/SideBar";
import { Wishlist } from "../Wishlist/Wishlist";
import { PurchaseHistory } from "../Order/PurchaseHistory";
import { RiSearch2Line } from "@remixicon/react";

export const Dashboard = () => {
  const userData = useSelector((state) => state.userState.user?.userDetail);
  const tokenData = useSelector((state) => state.userState.user?.tokenDetail);
  console.log(tokenData);
  console.log(userData);
  const [active, setActive] = useState("Account");

  return (
    <>
      <div className="bg-white w-dvw h-screen font-prokhure">
        <div className="bg-white">
          <NavBar value="dashboard" />
        </div>
        <div className="grid grid-cols-7 gap-8 mx-32 mt-20">
          <div className="col-span-2 w-[300px]">
            <>
              <div className="bg-white border border-slate-200 rounded-lg">
                <div className="my-3 text-sm flex items-center justify-center">
                  <form className="flex w-4/5 h-8 rounded bg-white border border-slate-200 ">
                    <RiSearch2Line
                      className="absolute h-4 w-4 flex ml-3 my-2"
                      color="#D0D5DD"
                    />
                    <input
                      type="search"
                      name="searchParam"
                      className="w-full py-1 px-4 text-gray-800 ml-5 focus:outline-none"
                      placeholder="Search..."
                    />
                  </form>
                </div>
                <ul className="font-semibold text-base my-2">
                  {SidebarList.map((value, key) => {
                    return (
                      <li
                        onClick={() => {
                          setActive(value.title);
                        }}
                      >
                        {active === value.title ? (
                          <ActiveItem title={value.title} icon={value.icon} />
                        ) : (
                          <>
                            {" "}
                            <div className="hover:text-blue-900 hover:cursor-auto">
                              <div className="py-2 px-1 mx-12 flex text-sm">
                                <div className="py-1 text-gray-600">
                                  {value.icon}
                                </div>
                                <p className="px-2 py-0.5 ">{value.title}</p>{" "}
                              </div>
                            </div>
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          </div>
          <div
            className={`mx-8 px-4 ${
              active === "Messages" || active === "Purchase History"
                ? "w-[750px]"
                : "w-[550px]"
            }`}
          >
            {active === "Account" && <Account />}
            {active === "Category & Pricing" && <Category />}
            {active === "Support" && <Support />}
            {active === "Wishlist" && <Wishlist />}
            {active === "Purchase History" && <PurchaseHistory />}
            {active === "Messages" && <Messages />}
          </div>
        </div>
      </div>
    </>
  );
};
