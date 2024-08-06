import {
  CheckCircleFill,
  ExclamationCircleFill,
  X,
} from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../../components/Shared/NavBar";
import LoginFrame from "../../assets/images/Login Frame.svg";
import CustomIcon from "../../assets/images/Custom Icon.png";
import { useEffect, useState, useRef } from "react";
import { useVerifyUserMutation } from "../../redux/user/userApi";
import { useNavigate } from "react-router-dom";
import { setIsResetOtpVerified } from "../../store/store";

export const VerificationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const regPayload = useSelector((state) => state.userState?.registerPayload);
  const partyId = useSelector((state) => state.userState?.partyId);
  const resetEmail = useSelector((state) => state.userState?.verifyResetEmail);
  console.log(resetEmail);
  const [otp, setOtp] = useState(Array(5).fill(""));
  const inputs = useRef([]);

  var t = otp.join("");
  console.log(t);
  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow single digit input
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Move focus to the next input
      if (index < 5 - 1) {
        inputs.current[index + 1].focus();
      }
    }
    // Move focus to previous input on backspace
    if (value === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      // Move focus to previous input on backspace if current input is empty
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const [verifyUser, { data, isLoading, error, isError }] =
    useVerifyUserMutation();
  const [otpType, setOtpType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setOtpType("validate");
    const verifyOtpPayload = {
      partyId: partyId,
      token: t,
      action: "validate",
    };
    console.log(verifyOtpPayload);
    verifyUser(verifyOtpPayload);
  };

  const handleResendCode = () => {
    setOtpType("resend");
    const verifyOtpPayload = {
      partyId: partyId,
      token: t,
      action: "resend",
    };
    verifyUser(verifyOtpPayload);
  };

  useEffect(() => {
    if (isError) {
      console.log(error?.data?.errorDetails[0].message);
    }
    if (resetEmail !== "" && data?.status === "00") {
      dispatch(setIsResetOtpVerified(true));
      navigate("/reset");
    }
  }, [data, error]);
  return (
    <>
      <div className="h-screen">
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
                        {otp.map((_, index) => (
                          <input
                            key={index}
                            className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2 text-center"
                            maxLength={1}
                            type="text"
                            value={otp[index]}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputs.current[index] = el)}
                          />
                        ))}
                      </div>
                      <button
                        className="my-2 p-1.5 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#F6F8FA] disabled:text-slate-300 w-full shadow-sm text-sm"
                        disabled={t.length !== 5}
                      >
                        Verify Email
                      </button>
                    </form>
                    <div className="text-center mt-3">
                      <p>Experiencing issues receiving the code?</p>
                      <button
                        onClick={handleResendCode}
                        className="font-semibold underline"
                      >
                        Resend Code
                      </button>
                    </div>
                    {data?.status === "00" && (
                      <>
                        {otpType === "resend" ? (
                          <>
                            <div className="p-2 my-5 rounded flex justify-between bg-slate-50">
                              <div className="flex">
                                <div className="py-1.5 text-green-400">
                                  <CheckCircleFill />
                                </div>
                                <p className="p-1 font-light">
                                  {data?.data?.message}
                                </p>
                              </div>

                              <div className="text-slate-500">
                                <button>
                                  <X />
                                </button>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="p-2 my-5 border border-slate-200 rounded flex shadow-md">
                            <div className="text-green-400 py-0.5">
                              <CheckCircleFill />
                            </div>
                            <div className="px-3">
                              <p className="font-semibold">Signup Complete</p>
                              <p className="py-1 font-light">
                                You have successfully signed up to Prokhure{" "}
                              </p>
                            </div>
                            <div className="text-slate-500">
                              <button>
                                <X />
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                    {isError && (
                      <>
                        <div className="p-2 my-5 rounded flex justify-between bg-slate-50 text-red-500">
                          <div className="flex">
                            <div className="py-1.5">
                              <ExclamationCircleFill />
                            </div>
                            <p className="p-1 font-light">
                              {error?.data?.errorDetails[0].message}
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
        <footer>
          <p className="text-xs py-2 px-4">© 2024 Prokhure Energy</p>
        </footer>{" "}
      </div>
    </>
  );
};
