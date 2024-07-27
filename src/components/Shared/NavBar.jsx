import logo from "../../assets/icon/Prokhure.png";
import { Cart, Bell, ChevronDown, Headphones, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const user = null;
  //const user = "Johnson";
  const toggleDropdown = (e) => {
    var elem = document.querySelector("#dropdownButton #dropdown");
    elem.classList.toggle("hidden");
  };

  return (
    <>
      <nav className="shadow-md p-2">
        <div className="flex justify-between">
          <div className="p-2 flex items-center justify-center">
            <img src={logo} alt="logo" />
            <div className="px-2 text-sm font-semibold">
              <p>Prokhure</p>
              <p className="font-extralight text-xs">Digital Marketplace</p>
            </div>
          </div>
          {user === null ? (
            <>
              <div className="flex items-center justify-center text-slate-700">
                {/* <p className="mx-2">Need help?</p> */}
                <div className="font-semibold bg-white border border-gray-200 shadow-sm rounded-md pr-2 py-2 mx-2 flex">
                  <div className="py-1 px-2"><Headphones/></div>
                  <p>Contact us</p>
                </div>
                <div className="mx-2"><X/></div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center">
                <div className="px-2 flex font-semibold">
                  <Cart /> <p className="text-xs px-1"> Cart</p>
                </div>
                <div className="px-2 font-semibold">
                  <Bell />
                </div>
                <div className="px-2 relative select-none" id="dropdownButton">
                  <div onClick={toggleDropdown}>
                    <div className="text-xs font-semibold border border-gray-200 shadow-sm rounded-md px-3 py-2 flex items-center justify-center">
                      Hi Johnson
                      <div className="p-1 pl-2">
                        <ChevronDown />
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
          )}
        </div>
      </nav>
    </>
  );
};
