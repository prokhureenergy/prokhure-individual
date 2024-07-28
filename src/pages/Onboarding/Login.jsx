import { NavBar } from "../../components/Shared/NavBar";
import CustomIcon from "../../assets/images/Custom Icon.png";
import { Link } from "react-router-dom";
import { ExclamationCircleFill } from "react-bootstrap-icons";
import { useState } from "react";

export const Login = () => {
  const [loginPayload, setLoginPayload] = useState({
    emailAddress: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginPayload({ ...loginPayload, [e.target.name]: e.target.value });
  };
  let isPasswordValid= false;

  return (
    <>
      <div className="h-screen bg-gradient-to-tr from-pink-100 from-10% via-white via-60% to-emerald-100 to-90%">
        <NavBar />
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center mt-14 pt-8 w-[400px] rounded-lg pb-4 bg-white border border-slate-200">
            <div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <img
                    src={CustomIcon}
                    alt="icon"
                    className="h-[60px] w-[60px]"
                  />
                </div>
                <div>
                  <p className="font-semibold">
                    Login to your Prokhure account
                  </p>
                  <p className="font-normal text-xs pb-5">
                    Enter your details to login.
                  </p>
                </div>
                <hr />
              </div>

              <div className="mt-3 text-xs w-[300px]">
                <form>
                  <div className="">
                    <label className="font-medium">Email Address</label>
                    <input
                      type="email"
                      placeholder="hello@prokhure.com"
                      name="emailAddress"
                      value={loginPayload.emailAddress}
                      onChange={handleChange}
                      className="peer border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-2 w-full h-8 invalid:border-red-600"
                    ></input>
                    <div class="invisible peer-invalid:visible text-red-500 text-xs flex">
                      <div className="py-0.5">
                        {" "}
                        <ExclamationCircleFill />
                      </div>{" "}
                      <p className="px-1">
                        Please provide a valid email address.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="mb-1">
                    <label className="font-medium">Password</label>
                    <input
                      type="password"
                      placeholder=""
                      name="password"
                      value={loginPayload.password}
                      onChange={handleChange}
                      className={`border ${isPasswordValid ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-slate-200"}  focus:outline-none rounded-md shadow-xs my-1 p-2 w-full h-8`}
                    ></input>
{isPasswordValid && <div class="text-red-500 text-xs flex py-0.5">
                      <div className="py-0.5">
                        {" "}
                        <ExclamationCircleFill />
                      </div>{" "}
                      <p className="px-1">
                        You have entered an incorrect password{" "}
                      </p>
                    </div>}
                  </div>
                  <div className="flex justify-between my-1">
                    <div className="flex">
                      {" "}
                      <input type="checkbox" />{" "}
                      <p className="px-1">Keep me logged in</p>
                    </div>
                    <div>
                      <Link to="/reset" className="underline font-semibold">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <button
                    className="my-5 p-1.5 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#F6F8FA] disabled:text-slate-300 w-full shadow-sm text-sm"
                    disabled={
                      !loginPayload.emailAddress || !loginPayload.password
                    }
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs px-4 mt-10 pb-1">© 2024 Prokhure Energy</p>
      </div>
    </>
  );
};