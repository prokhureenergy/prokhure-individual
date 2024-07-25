import { NavBar } from "../../components/Shared/NavBar";
import LoginFrame from "../../assets/images/Login Frame.png";
import CustomIcon from "../../assets/images/Custom Icon.png";
import { useState } from "react";

export const CreateAccount = () => {
  const [loginPayload, setLoginPayload] =useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
  });

  const handleChange =(e)=>{
    setLoginPayload({...loginPayload, [e.target.name]: e.target.value})
  }
 
  return (
    <>
      <NavBar />
      <div className="flex max-h-dvh">
        <div className="basis-7/12">
          <div className="flex justify-center items-center mt-10">
            <div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <img
                    src={CustomIcon}
                    alt="icon"
                    className="h-[60px] w-[60px]"
                  />
                </div>
                <p className="font-semibold">Sign up to Prokhure</p>
                <p className="font-light text-xs pb-5">
                  Enter your details to signup.
                </p>
                <hr />
              </div>
              <div className="mt-3 text-xs w-[300px]">
                <form>
                  <div className="my-1">
                    <label className="font-medium">First Name</label>
                    <input
                      type="text"
                      placeholder="E.g Johnson"
                      name="firstName"
                      value={loginPayload.firstName}
                      onChange={handleChange}
                      className="border border-slate-300 focus:outline-none focus:border-blue-900 rounded-md shadow-xs my-1 p-2 w-full h-8"
                    ></input>
                  </div>
                  <div className="my-2">
                    <label className="font-medium">Last Name</label>
                    <input
                      type="text"
                      placeholder="E.g Grisham"
                      name="lastName"
                      value={loginPayload.lastName}
                      onChange={handleChange}
                      className="border border-slate-300 focus:outline-none focus:border-blue-900 rounded-md shadow-xs my-1 p-2 w-full h-8"
                    ></input>
                  </div>

                  <div className="my-2">
                    <label className="font-medium">Email Address</label>
                    <input
                      type="email"
                      placeholder="E.g hello@prokhure.com"
                      name="emailAddress"
                      value={loginPayload.emailAddress}
                      onChange={handleChange}
                      className="peer border border-slate-300 focus:outline-none focus:border-blue-900 rounded-md shadow-xs my-1 p-2 w-full h-8 invalid:border-red-600"
                    ></input>
                    <p class="invisible peer-invalid:visible text-red-500 text-xs">
                      Please provide a valid email address.
                    </p>
                  </div>

                  <button
                    className="my-2 p-3 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#F6F8FA] disabled:text-slate-300 w-full shadow-sm text-sm"
                    disabled={!loginPayload.emailAddress}
                  >
                    Confirm Details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-5/12 bg-slate-50">
          <img src={LoginFrame} alt="login" className="" />
        </div>
      </div>
      <p className="text-xs px-4 py-2">© 2024 Prokhure Energy</p>
    </>
  );
};
