import { useState } from "react";
import { OrderTable } from "./OrderTable";
import { Search, ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const PurchaseHistory = () => {
  const [status, setStatus] = useState("Delivered");
  const toggleDropdown = (e) => {
    var elem = document.querySelector("#sortDropdownButton #sortDropdown");
    elem.classList.toggle("hidden");
  };
  return (
    <>
      <div>
        <div className="bg-white border border-slate-200 rounded-md shadow-md p-4">
          <div>
            <p className="font-semibold">Orders</p>
            <p className="text-xs py-1">View all your orders</p>
            <hr className="my-2" />
          </div>
          <div className="grid grid-cols-6 justify-between h-[25px]">
            <div className="col-span-1">
              <div className="flex bg-slate-200 px-1 py-0.5 rounded-sm text-xs w-[240px]">
                <div className="group-hover:bg-white">
                  <button
                    onClick={() => setStatus("All")}
                    className={`px-5 ${
                      status === "All"
                        ? "py-0.5 bg-white rounded-sm font-medium"
                        : "font-medium text-slate-400"
                    }`}
                  >
                    All
                  </button>
                </div>
                <div className="group-hover:bg-white">
                  <button
                    onClick={() => setStatus("Ongoing")}
                    className={`px-5 ${
                      status === "Ongoing"
                        ? "py-0.5 bg-white rounded-sm font-medium"
                        : "font-medium text-slate-400"
                    }`}
                  >
                    Ongoing
                  </button>
                </div>
                <div className="group-hover:bg-white">
                  {" "}
                  <button
                    onClick={() => setStatus("Delivered")}
                    className={`px-5 ${
                      status === "Delivered"
                        ? "py-0.5 bg-white rounded-sm font-medium"
                        : "font-medium text-slate-400"
                    }`}
                  >
                    Delivered
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-2">
              <div className="flex">
                <div className="my-1 mx-2 h-[20px] text-xs flex items-center justify-center">
                  <form className="flex rounded-md bg-white border border-gray-200 shadow-sm">
                    <Search
                      className="absolute h-3 w-3 flex ml-2 my-2"
                      color="#D0D5DD"
                    />
                    <input
                      type="search"
                      name="searchParam"
                      className="w-full py-1.5 px-2 text-slate-400 ml-5 focus:outline-none"
                      placeholder="Search..."
                    />
                  </form>
                </div>
                <div className="relative select-none" id="sortDropdownButton">
                  <div onClick={toggleDropdown}>
                    <div className="w-[80px] text-xs text-slate-400 font-semibold border border-gray-200 shadow-sm rounded-md px-1 py-1 flex items-center justify-center">
                      Sort by
                      <div className="p-1 pl-2">
                        <ChevronDown />
                      </div>
                    </div>
                  </div>

                  <div
                    id="sortDropdown"
                    className="hidden absolute rounded-lg bg-white border border-slate-200 top-[30px] right-[2px] w-[120px] font-medium text-xs shadow-md my-1"
                  >
                    <div className="p-1">
                      <Link>
                        <p className="cursor-pointer hover:bg-slate-100 hover:text-black hover:rounded p-1.5 m-1.5">
                          Order Date{" "}
                        </p>
                      </Link>
                      <Link>
                        <p className="cursor-pointer hover:bg-slate-100 hover:text-black hover:rounded p-1.5 m-1.5">
                          State{" "}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <OrderTable />
          </div>
        </div>
      </div>
    </>
  );
};
