import { useState } from "react";
import { NavBar } from "../../components/Shared/NavBar";
import {
  ActiveItem,
} from "../../components/SideBar/SideBar";
import { Support } from "../Support/Support";
import { Account } from "../Account/Account";
import { Category } from "../Category/Category";
import { SidebarList } from "../../components/SideBar/SideBar";
import { Search } from "react-bootstrap-icons";
import { Wishlist } from "../Wishlist/Wishlist";
import { PurchaseHistory } from "../Order/PurchaseHistory";

export const Dashboard = () => {
  const [active, setActive] = useState("Account");

  return (
    <>
      <div className="bg-slate-50 w-dvw min-h-dvh">
        <NavBar />
        <div className="grid grid-cols-7 gap-8 mx-32 mt-32">
          <div className="col-span-2 w-[300px]">
            <>
              <div className="bg-white border border-slate-200 rounded-lg">
                <div className="my-3 text-sm flex items-center justify-center">
                  <form className="flex w-4/5 h-8 rounded bg-white border border-slate-200 ">
                    <Search
                      className="absolute h-4 w-4 flex ml-3 my-2"
                      color="#D0D5DD"
                    />
                    <input
                      type="search"
                      name="searchParam"
                      className="w-full py-1 px-4 text-gray-800 mx-5 focus:outline-none"
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
          <div className="mx-8 px-4 w-[600px]">
            {active === "Account" && <Account />}
            {active === "Category & Pricing" && <Category />}
            {active === "Support" && <Support />}
            {active === "Wishlist" && <Wishlist/>}
            {active=== "Purchase History" && <PurchaseHistory/>}
          </div>
        </div>
      </div>
    </>
  );
};
