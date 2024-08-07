import logo from "../../assets/icon/Prokhure.svg";
import { Link } from "react-router-dom";
import { RiArrowDownSLine, RiNotification3Line, RiQuestionLine, RiSearch2Line, RiShoppingCartLine } from "@remixicon/react";

export const NavBar = (props) => {
  //const user = "Johnson";
  const toggleDropdown = (e) => {
    var elem = document.querySelector("#dropdownButton #dropdown");
    elem.classList.toggle("hidden");
  };
  let navbarContent;
  if (props.value === "dashboard") {
    navbarContent = (
      <>
        <div className="flex items-center justify-center">
          <div className="px-2 flex font-semibold">
            <RiShoppingCartLine size={14} /> <p className="text-xs px-1"> Cart</p>
          </div>
          <div className="px-2 font-semibold">
            <RiNotification3Line size={14}/>
          </div>
          <div className="px-2 relative select-none" id="dropdownButton">
            <div onClick={toggleDropdown}>
              <div className="text-xs font-semibold border border-gray-200 shadow-sm rounded-md px-3 py-2 flex items-center justify-center">
                Hi Johnson
                <div className="p-1 pl-2">
                  <RiArrowDownSLine size={14}/>
                </div>
              </div>
            </div>

            <div
              id="dropdown"
              className="hidden absolute rounded-lg bg-white border border-slate-200 top-[40px] right-[20px] w-[180px] font-medium text-sm shadow-md my-2"
            >
              <div className="p-1">
                <Link>
                  <p className="cursor-pointer hover:bg-slate-100 hover:text-black hover:rounded p-1.5 m-1.5">
                    My Account{" "}
                  </p>
                </Link>
                <Link>
                  <p className="cursor-pointer hover:bg-slate-100 hover:text-black hover:rounded p-1.5 m-1.5">
                    Orders{" "}
                  </p>
                </Link>
                <Link>
                  <p className="cursor-pointer hover:bg-slate-100 hover:text-black hover:rounded p-1.5 m-1.5">
                    Wishlist{" "}
                  </p>
                </Link>
                <Link>
                  <p className="cursor-pointer hover:bg-slate-100 hover:text-black hover:rounded p-1.5 m-1.5">
                    Signout{" "}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (props.value === "website") {
    navbarContent = (
      <>
          <div className="my-3 text-xs flex items-center justify-center">
            <form className="flex h-8 rounded-md bg-white border border-slate-200">
              <RiSearch2Line
                className="absolute h-3 w-3 flex ml-3 my-2.5"
                color="#D0D5DD"
              />
              <input
                type="search"
                name="searchParam"
                className="w-full py-1 px-4 text-gray-800 ml-5 focus:outline-none"
                placeholder="Search for products andd categories"
              />
            </form>
          </div>
        <div className="flex items-center justify-center gap-2 text-xs mx-3">
          <Link to="/signin">
            <div className="border border-[#0055FF] rounded-md p-1 flex justify-between">
              {" "}
              <p className="text-[#0055FF] py-0.5 px-1"> Sign In</p>{" "}
            </div>
          </Link>

          <Link to="/signup">
            <div className="border border-[#0055FF] rounded-md p-1 flex justify-between mx-2">
              <p className="text-[#0055FF] py-0.5 px-1"> Sign Up</p>{" "}
            </div>
          </Link>

          <div className="flex">
            <div className="p-1 px-2">
              <RiShoppingCartLine size={14}/>
            </div>
            <p className="text-[#0055FF] py-0.5">Cart</p>
          </div>
          <div className="flex px-2">
            <div className="p-1">
              <RiQuestionLine size={14} />
            </div>
            <p className="text-[#0055FF] py-0.5 px-1">Help</p>
            <div className="p-1">
              {" "}
              <RiArrowDownSLine size={14} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    navbarContent = (
      <>
        <div className="flex items-center justify-center text-slate-700">
          <div className="font-semibold bg-white border border-gray-200 shadow-sm rounded-md py-2 mx-2 flex text-center">
            <p className="px-3">Contact us</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <nav className="shadow-sm p-2">
        <div className="flex justify-between">
          <div className="p-2 flex items-center justify-center">
            <img src={logo} alt="logo" />
            <div className="px-2 text-sm font-semibold">
              <p className="text-red-500">Prokhure</p>
              <p className="font-extralight text-xs">Digital Marketplace</p>
            </div>
          </div>
          {navbarContent}
        </div>
      </nav>
    </>
  );
};
