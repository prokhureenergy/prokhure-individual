import {
  RiArrowRightSLine,
  RiExchangeDollarLine,
  RiHeadphoneLine,
  RiHeart3Line,
  RiMessage3Line,
  RiPriceTagLine,
  RiShutDownLine,
  RiTimeLine,
  RiUser6Line,
} from "@remixicon/react";

export const SidebarList = [
  { title: "Account", icon: <RiUser6Line size={14} /> },
  // { title: "Subscription", icon: <RiExchangeDollarLine size={16} /> },
  { title: "Category & Pricing", icon: <RiPriceTagLine size={14} /> },
  { title: "Wishlist", icon: <RiHeart3Line size={14} /> },
  { title: "Purchase History", icon: <RiTimeLine size={14} /> },
  { title: "Messages", icon: <RiMessage3Line size={14} /> },
  { title: "Support", icon: <RiHeadphoneLine size={14} /> },
  { title: "Signout", icon: <RiShutDownLine size={14} /> },
];

export const SideBar = () => {
  return (
    <>
      <div className="bg-white border border-slate-200 rounded-lg">
        <ul className="font-semibold text-base">
          {SidebarList.map((value, key) => {
            return (
              <li className="py-2 mx-12 flex">
                <div className="py-2 text-gray-600">{value.icon}</div>
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
        <div className="bg-[#0055FF] p-1 rounded-r-md"> </div>
        <div className="flex justify-between bg-slate-100 p-2 rounded-md w-4/5">
          <div className="px-2 flex">
            <div className="py-1.5 text-[#0055FF]">{props.icon}</div>
            <p className="px-2 py-0.5">{props.title}</p>
          </div>
          <div className="py-1">
            {" "}
            <RiArrowRightSLine size={16} />{" "}
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
      <div className="py-2 text-gray-600">{props.icon}</div>
      <p className="px-2 py-0.5 ">{props.title}</p>{" "}
    </div>
  </>;
};
