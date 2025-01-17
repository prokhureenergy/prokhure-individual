import { NavBar } from "../../components/Shared/NavBar";
import LoginFrame from "../../assets/images/Login Frame.svg";
import ResetIcon from "../../assets/icon/Reset Icon.png";
import CustomIcon from "../../assets/images/Custom Icon.png";
import { useEffect, useState } from "react";
import { CreatePasswordForm } from "./CreatePasswordForm";
import { useVerifyEmailForPasswordResetMutation } from "../../redux/user/userApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setRegisterPayload,
  setVerifyResetEmail,
  setPartyId,
} from "../../store/store";
import { useNavigate } from "react-router-dom";
import { RiErrorWarningFill } from "@remixicon/react";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [verifyEmailForPasswordReset, { data, isError, error, isLoading }] =
    useVerifyEmailForPasswordResetMutation();

  const [resetPayload, setResetPayload] = useState({
    email: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setResetPayload({ ...resetPayload, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setRegisterPayload(resetPayload));
    dispatch(setVerifyResetEmail(resetPayload.email));
    verifyEmailForPasswordReset(resetPayload);
  };
  useEffect(() => {
    if (isError) {
      console.log(error);
    }
    if (data?.status === "00") {
      dispatch(setPartyId(data?.data?.partyId));
      navigate("/verify");
    }
  }, [data, error]);
  const isEmailValid = useSelector(
    (state) => state.userState?.isResetOtpVerified
  );
  console.log(isEmailValid);
  return (
    <>
      <div className="h-screen font-prokhure">
        <div className="bg-white">
          <NavBar />
        </div>
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
                    <p className="font-semibold text-lg">
                      {isEmailValid
                        ? "Create a new Password"
                        : "Reset Password"}
                    </p>
                    <p className="font-normal text-sm pb-5">
                      {isEmailValid
                        ? "Please enter a new password for your account."
                        : "Enter email to reset your password."}
                    </p>
                  </div>

                  <hr />
                </div>
                {isEmailValid ? (
                  <>
                    <CreatePasswordForm value="reset" />
                  </>
                ) : (
                  <>
                    <div className="mt-3 text-sm w-[300px]">
                      <form onSubmit={handleSubmit}>
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
                            <div className="py-1">
                              <RiErrorWarningFill size={14} />
                            </div>
                            <p className="px-1">
                              Please provide a valid email address.{" "}
                            </p>
                          </div>
                        </div>
                        <button
                          className="flex items-center justify-center my-5 p-1.5 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#F6F8FA] disabled:text-slate-300 w-full shadow-sm text-sm"
                          disabled={!resetPayload.emailAddress}
                        >
                          <p className="text-center">Reset Password</p>
                          {isLoading && (
                      <>
                        {" "}
                        <span className="px-3">
                          {" "}
                          <LoadingSpinner />{" "}
                        </span>
                      </>
                    )}                        </button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>
            <footer className="fixed bottom-0">
              <p className="text-sm py-2 px-4">© 2024 Prokhure Energy</p>
            </footer>
          </div>

          <div className="basis-5/12">
            <img src={LoginFrame} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
};
