import { CheckCircleFill, X } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { NavBar } from "../../components/Shared/NavBar";
import LoginFrame from "../../assets/images/Login Frame.png";
import CustomIcon from "../../assets/images/Custom Icon.png";
import { useEffect, useState } from "react";
import { useVerifyUserMutation } from "../../redux/user/userApi";

export const VerificationForm = () => {
  const regPayload = useSelector((state) => state.userState?.registerPayload);
  const isAccountCreated = useSelector(
    (state) => state.userState?.createAccount
  );
  console.log(isAccountCreated);
  const partyId = useSelector((state) => state.userState?.partyId);
  console.log(partyId);

  const [verifyUser, { data, isLoading, error, isError }] =
    useVerifyUserMutation();

  const [verifyOtpPayload, setVerifyOtpPayload] = useState({
    partyId: "",
    token: "",
    action: "validate",
  });

  const otpValue = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyUser(verifyOtpPayload);
  };

  const handleResendCode = () => {
    setVerifyOtpPayload.action("resend");
    verifyUser(verifyOtpPayload);
  };

  useEffect(() => {
    if (isError) {
      console.log(error?.data?.errorDetails[0].message);
      alert(error?.data?.errorDetails[0].message);
    } else if (data?.status === "00") {
      console.log(data);
    }
  }, [data, error]);
  return (
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
                      src={CustomIcon}
                      alt="icon"
                      className="h-[60px] w-[60px]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Enter Verification Code</p>
                    <p className="font-normal text-xs pb-5">
                      We’ve sent a code to {regPayload?.email}{" "}
                    </p>
                  </div>
                  <hr />
                </div>

                <div>
                  <div className="mt-3 text-xs w-[300px]">
                    <form onSubmit={handleSubmit}>
                      <div className="flex m-2 items-center justify-center">
                        <input
                          className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2 text-center"
                          maxLength={1}
                          type="text"
                        />
                        <input
                          className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2 text-center"
                          maxLength={1}
                          type="text"
                        />
                        <input
                          className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2 text-center"
                          maxLength={1}
                          type="text"
                        />
                        <input
                          className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2 text-center"
                          maxLength={1}
                          type="text"
                        />
                        <input
                          className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2 text-center"
                          maxLength={1}
                          type="text"
                        />
                      </div>
                    </form>

                    <button
                      className="my-2 p-1.5 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#F6F8FA] disabled:text-slate-300 w-full shadow-sm text-sm"
                      disabled={otpValue.length !== 6}
                    >
                      Verify Email
                    </button>
                    <div className="text-center mt-3">
                      <p>Experiencing issues receiving the code?</p>
                      <button onClick={handleResendCode} className="font-semibold underline">
                        Resend Code
                      </button>
                    </div>
                    {data?.status === "00" && (
                      <>
                        <div className="p-2 my-5 border border-slate-200 rounded flex shadow-md">
                          <div className="text-green-400 py-0.5">
                            <CheckCircleFill />
                          </div>
                          <div className="px-3">
                            <p className="font-semibold">Signup Complete</p>
                            <p className="py-1 font-light">
                              You have successfully signed up to Prokhure
                            </p>
                          </div>
                          <div className="text-slate-500">
                            <button>
                              <X />
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
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
  );
};
