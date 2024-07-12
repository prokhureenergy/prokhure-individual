import {
  Person,
  Heart,
  Power,
  Headphones,
  Search,
} from "react-bootstrap-icons";

export const SideBar = () => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg p-4 top-0">
        <div className="mx-4">
          <form className="flex items-start justify-start">
            <div className="absolute px-2 py-2.5 text-sm">
              <Search color="gray" />
            </div>
            <input
              type="search"
              name="searchParam"
              placeholder="Search..."
              className="focus:outline-none shadow-sm border border-slate-200 rounded-md py-2 px-8 text-xs"
            />
          </form>
        </div>
        <div className="px-3 font-semibold text-base">
          <div className="py-2 flex">
            <div className="py-1.5 text-gray-600">
              <Person />
            </div>
            <p className="px-2 py-0.5">Account</p>
          </div>

          <div className="py-2 flex">
            <div className="py-1.5 text-gray-600">
              <Person />
            </div>
            <p className="px-2 py-0.5 ">Subscriptions</p>
          </div>
          <div className="py-2 flex">
            <div className="py-1.5 text-gray-600 ">
              <Person />
            </div>
            <p className="px-2 py-0.5">Category & Pricing</p>
          </div>
          <div className="py-2 flex">
            <div className="py-2 text-gray-600 text-xs">
              <Heart />
            </div>
            <p className="px-2 py-0.5">Wishlist</p>
          </div>
          <div className="py-2 flex">
            <div className="py-1.5 text-gray-600">
              <Person />
            </div>
            <p className="px-2 py-0.5">Purchase History</p>
          </div>
          <div className="py-2 flex">
            <div className="py-1.5 text-gray-600">
              <Person />
            </div>
            <p className="px-2 py-0.5">Messages</p>
          </div>
          <div className="py-2 flex">
            <div className="py-1.5 text-gray-600">
              <Headphones />
            </div>
            <p className="px-2 py-0.5">Support</p>
          </div>
          <div className="py-2 flex">
            <div className="py-1.5 text-gray-600">
              <Power />
            </div>
            <p className="px-2 py-0.5">Sign out</p>
          </div>
        </div>
      </div>
    </>
  );
};
