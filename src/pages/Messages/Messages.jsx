import { useState } from "react";
import { Search } from "react-bootstrap-icons";

export const Messages = () => {
  const [active, setActive] = useState("All");
  const count = 15;
  return (
    <>
      <div>
        <div>
          <p className="text-lg font-semibold">Messages</p>
          <div className="flex items-start justify-start gap-1 text-sm py-3">
            <button
              onClick={() => setActive("All")}
              className={`py-1 px-3 ${
                active === "All"
                  ? "bg-white rounded-md shadow-md"
                  : "hover:bg-white rounded-md hover:shadow-md"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActive("Read")}
              className={`py-1 px-3 ${
                active === "Read"
                  ? "bg-white rounded-md shadow-md"
                  : "hover:bg-white rounded-md hover:shadow-md"
              }`}
            >
              Read
            </button>
            <button
              onClick={() => setActive("Unread")}
              className={`py-1 px-3 ${
                active === "Unread"
                  ? "bg-white rounded-md shadow-md"
                  : "hover:bg-white rounded-md hover:shadow-md"
              }`}
            >
              Unread
            </button>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-md my-4">
          <div className="grid grid-cols-8">
            <div className="border border-slate-200 rounded-l-md p-2 col-span-3">
              <div className="flex p-2 text-base">
                <p className="font-semibold">Messages</p>
                <div className="px-3 bg-purple-100 flex justify-center items-center rounded-full text-purple-950 mx-3">
                  {" "}
                  {count}{" "}
                </div>
              </div>
              <div>
                <div className="my-4 mx-2 h-[20px] text-xs">
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
              </div>
              <div className="grid grid-rows-5 gap-2">
                <div className="border-slate-100 text-xs py-2 px-3">
                  <div className="flex justify-between mb-3">
                    <p className="font-semibold">Prokhure</p>
                    <p className="text-slate-400">5mins ago</p>
                  </div>
                  <p className="text-slate-400">
                    Hey Olivia, Katherine sent me over the latest doc...
                  </p>
                </div>
                <div className="border-t border-slate-100 text-xs py-2 px-3 font-medium">
                  <div className="flex justify-between mb-3">
                    <p className="font-semibold">Prokhure</p>
                    <p className="text-blue-800">5mins ago</p>
                  </div>
                  <p className="text-blue-800">
                    You:Hey Olivia, Katherine sent me over the latest doc...
                  </p>
                </div>
                <div className="border-t border-slate-100 text-xs py-2 px-3">
                  <div className="flex justify-between mb-3">
                    <p className="font-semibold">Prokhure</p>
                    <p className="text-slate-400">5mins ago</p>
                  </div>
                  <p className="text-slate-400">
                    Hey Olivia, Katherine sent me over the latest doc...
                  </p>
                  <div></div>
                </div>
                <div className="border-t border-slate-100 text-xs py-2 px-3">
                  <div className="flex justify-between mb-3">
                    <p className="font-semibold">Prokhure</p>
                    <p className="text-slate-400">5mins ago</p>
                  </div>
                  <p className="text-slate-400">
                    Hey Olivia, Katherine sent me over the latest doc...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-5">
                <div className="border border-slate-200"> 
                    <p className="p-4 text-base font-semibold">Prokhure</p>
                </div>
                <div>
                <div>
                <div className="text-xs py-2 px-3 w-4/5">
                  <div className="flex justify-between mb-1">
                    <p className="font-semibold text-sm text-blue-800">Prokhure</p>
                    <p className="text-slate-400">Thursday 10:16am</p>
                  </div>
                  <div className="bg-slate-100 p-2 rounded-b-md rounded-tr-md">
                  <p>
                    Hey Olivia, Katherine sent me over the latest doc sent me over the latest doc...
                  </p>
                  </div>
                </div>
                </div>
                <div className="flex justify-end items-end">
                    <div className="flex justify-end items-end">
                    <div className="text-xs py-2 px-3 w-4/5">
                  <div className="flex justify-between mb-1">
                    <p className="font-medium text-sm">You</p>
                    <p className="text-slate-400">Thursday 10:16am</p>
                  </div>
                  <div className="bg-[#4A7DF7] p-2 rounded-b-md rounded-tr-md">
                  <p>
                  Awesome! Thanks. I’ll look at this today.</p>
                  </div>
                </div> 
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
