import logo from "../../assets/icon/Prokhure.png";
import { Cart, Bell, ChevronDown } from "react-bootstrap-icons";

export const NavBar = () => {

  return (
    <>
      <nav className="bg-white shadow-md p-2">
        <div className="flex justify-between">
          <div className="p-2 flex items-center justify-center">
            <img src={logo} alt="logo" />
            <div className="px-2 text-sm font-semibold">
              <p>Prokhure</p>
              <p className="font-extralight text-xs">Digital Marketplace</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="px-2 flex font-semibold">
              <Cart /> <p className="text-xs px-1"> Cart</p>
            </div>
            <div className="px-2 font-semibold">
              <Bell />
            </div>
            <div className="px-2 relative select-none" id="dropdownButton">
              <div>
                <div className="text-xs font-semibold border border-gray-200 shadow-sm rounded-md px-3 py-2 flex items-center justify-center">
                  Hi Johnson
                  <div className="p-1 pl-2">
                    <ChevronDown />
                  </div>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
