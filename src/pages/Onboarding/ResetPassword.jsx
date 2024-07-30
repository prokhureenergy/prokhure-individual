import { NavBar } from "../../components/Shared/NavBar";
import LoginFrame from "../../assets/images/Login Frame.png";
import ResetIcon from "../../assets/icon/Reset Icon.png";
import CustomIcon from "../../assets/images/Custom Icon.png";
import { useState } from "react";
import { ExclamationCircleFill } from "react-bootstrap-icons";
import { CreatePasswordForm } from "./CreatePasswordForm";

export const ResetPassword = () => {
  const [resetPayload, setResetPayload] = useState({
    emailAddress: "",
  });
  const handleChange = (e) => {
    setResetPayload({ ...resetPayload, [e.target.name]: e.target.value });
  };
  const isEmailValid = true;
  return (
    <>
      <>
        <div className="max-h-screen">
          <NavBar />

          <div className="flex">
            <div className="basis-7/12">
              <div className="flex justify-center items-center mt-14 pt-8">
                <div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <img
                        src={isEmailValid ? CustomIcon : ResetIcon}
                        alt="icon"
                        className="h-[60px] w-[60px]"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {isEmailValid
                          ? "Create a new Password"
                          : "Reset Password"}
                      </p>
                      <p className="font-normal text-xs pb-5">
                        {isEmailValid
                          ? "Please enter a new password for your account."
                          : "Enter email to reset your password."}
                      </p>
                    </div>

                    <hr />
                  </div>
                  {isEmailValid ? (
                    <>
                      <CreatePasswordForm />
                    </>
                  ) : (
                    <>
                      <div className="mt-3 text-xs w-[300px]">
                        <form>
                          <div className="">
                            <label className="font-medium">Email Address</label>
                            <input
                              type="email"
                              placeholder="hello@prokhure.com"
                              name="emailAddress"
                              value={resetPayload.emailAddress}
                              onChange={handleChange}
                              className="peer border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-2 w-full h-8 invalid:border-red-600"
                            ></input>
                            <div className="invisible peer-invalid:visible text-red-500 text-xs flex">
                              <div className="py-0.5">
                                {" "}
                                <ExclamationCircleFill />
                              </div>{" "}
                              <p className="px-1">
                                Please provide a valid email address.{" "}
                              </p>
                            </div>
                          </div>
                          <button
                            className="my-5 p-1.5 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#F6F8FA] disabled:text-slate-300 w-full shadow-sm text-sm"
                            disabled={!resetPayload.emailAddress}
                          >
                            Reset Password
                          </button>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="basis-5/12 bg-slate-50">
              <img src={LoginFrame} alt="login" className="" />
            </div>
          </div>
          <p className="text-xs px-4 py-2">© 2024 Prokhure Energy</p>
        </div>
      </>
    </>
  );
};
