import { useState } from "react";
import {
  Person,
  Heart,
  Power,
  Headphones,
  Search,
  ChevronRight,
} from "react-bootstrap-icons";

export const SidebarList = [
  { title: "Account", icon: <Person /> },
  { title: "Subscription", icon: <Person /> },
  { title: "Category & Pricing", icon: <Person /> },
  { title: "Wishlist", icon: <Heart /> },
  { title: "Purchase & History", icon: <Person /> },
  { title: "Messages", icon: <Person /> },
  { title: "Support", icon: <Headphones /> },
  { title: "Signout", icon: <Power /> },
];

export const SideBar = () => {
  return (
    <>
      <div className="bg-white border border-slate-200 rounded-lg">
        <ul className="font-semibold text-base">
          {SidebarList.map((value, key) => {
            return (
              <li className="py-2 mx-12 flex">
                <div className="py-1.5 text-gray-600">{value.icon}</div>
                <p className="px-2 py-0.5 ">{value.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export const ActiveItem = (props) => {
  return (
    <>
      <div className="py-2 flex gap-6 text-sm">
        <div className="bg-blue-900 p-1 rounded-r-md"> </div>
        <div className="flex justify-between bg-slate-100 p-2 rounded-md w-4/5">
          <div className="px-2 flex">
            <div className="py-1.5 text-blue-900">{props.icon}</div>
            <p className="px-2 py-0.5">{props.title}</p>
          </div>
          <div className="py-2">
            {" "}
            <ChevronRight />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export const InactiveItem = (props) => {
  <>
    {" "}
    <div className="py-2 mx-12 flex">
      <div className="py-1.5 text-gray-600">{props.icon}</div>
      <p className="px-2 py-0.5 ">{props.title}</p>{" "}
    </div>
  </>;
};
