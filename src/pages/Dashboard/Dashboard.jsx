import { useState } from "react";
import { NavBar } from "../../components/Shared/NavBar";
import { ActiveItem, InactiveItem, SideBar } from "../../components/SideBar/SideBar";
import { Support } from "../Support/Support";
import { Account } from "../Account/Account";
import { Category } from "../Category/Category";
import { SidebarList } from "../../components/SideBar/SideBar";
export const Dashboard = () => {
  const [active, setActive] = useState("Account");

  return (
    <>
      <div className="bg-slate-50 w-dvw min-h-dvh">
        <NavBar />
        <div className="grid grid-cols-7 gap-8 mx-32 mt-32">
          <div className="col-span-2">
            <>
              <div className="bg-white border border-slate-200 rounded-lg">
                <ul className="font-semibold text-base">
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
                            <div className="py-2 mx-12 flex hover:bg-slate-100 hover:p-1 hover:pointer-events-auto hover:rounded-md">
                              <div className="py-1.5 text-gray-600">
                                {value.icon}
                              </div>
                              <p className="px-2 py-0.5 ">{value.title}</p>{" "}
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
          <div className="col-span-4 mx-2 px-4">
            {active === "Account" && <Account />}
            {active === "Category & Pricing" && <Category />}
            {active === "Support" && <Support />}
          </div>
        </div>
      </div>
    </>
  );
};
