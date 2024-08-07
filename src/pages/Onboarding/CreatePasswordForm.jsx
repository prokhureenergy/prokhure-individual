import { useState, useEffect } from "react";
import { CheckCircleFill, X, XCircleFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  useRegisterUserMutation,
  useResetPasswordMutation,
} from "../../redux/user/userApi";
import { setCreateAccount, setPartyId } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { RiErrorWarningFill, RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const CreatePasswordForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regPayload = useSelector((state) => state.userState?.registerPayload);
  const partyId = useSelector((state) => state.userState?.partyId);

  const [registerUser, { data, error, isLoading, isError }] =
    useRegisterUserMutation();

  const [
    resetPassword,
    {
      data: resetData,
      error: resetError,
      isError: resetIsError,
      isLoading: resetIsLoading,
    },
  ] = useResetPasswordMutation();
  const [passwordPayload, setPasswordPayload] = useState({
    password: "",
    confirmPassword: "",
  });
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<RiEyeOffLine size={14} />);
  const handlePasswordToggle = () => {
    if (type === "password") {
      setIcon(<RiEyeLine size={14} />);
      setType("text");
    } else {
      setIcon(<RiEyeOffLine size={14} />);
      setType("password");
    }
  };
  let passwordStrength = 0;
  const containsNumber = /\d/.test(passwordPayload.password);
  const containsCapital = /[A-Z]/.test(passwordPayload.password);
  const is8Character = /.{8}/.test(passwordPayload.password);
  containsNumber && passwordStrength++;
  containsCapital && passwordStrength++;
  is8Character && passwordStrength++;
  var strengthColour = "";
  switch (passwordStrength) {
    case 1:
      strengthColour = "bg-red-500";
      break;
    case 2:
      strengthColour = "bg-orange-400";
      break;
    case 3:
      strengthColour = "bg-green-300";
      break;
    default:
      strengthColour = "bg-slate-300";
  }
  var confirmPasswordStatus = false;
  const handleChange = (e) => {
    setPasswordPayload({ ...passwordPayload, [e.target.name]: e.target.value });
  };
  if (passwordPayload.password === passwordPayload.confirmPassword) {
    confirmPasswordStatus = true;
    console.log(confirmPasswordStatus);
  }
  const handleResetSubmit = (e) => {
    e.preventDefault();
    const resetPayload = {
      partyId: partyId,
      password: passwordPayload.password,
    };
    resetPassword(resetPayload);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const registerPayload = {
      firstName: regPayload.firstName,
      lastName: regPayload.lastName,
      businessName: "",
      businessRegistrationNumber: "",
      email: regPayload.email,
      phoneCountryCode: "",
      phoneNumber: "",
      password: passwordPayload.password,
      role: "customer",
      roleType: "indivdual",
    };
    registerUser(registerPayload);
  };

  useEffect(() => {
    if (isError) {
      console.log(error?.data?.errorDetails[0].message);
    } else if (data?.status === "00") {
      dispatch(setPartyId(data?.data?.partyId));
    } else if (resetIsError) {
      console.log(resetError?.data?.errorDetails[0].message);
    } else if (resetData?.status === "00") {
      navigate("/signin");
    }
  }, [data, error]);
  const handleCheckMail = (e) => {
    dispatch(setCreateAccount(true));
    navigate("/verify");
  };

  return (
    <>
      <div className="mt-6 text-sm w-[300px]">
        <form
          onSubmit={props.value === "reset" ? handleResetSubmit : handleSubmit}
        >
          <div className="my-1">
            <label className="font-medium">Create a Password</label>
            <div className="flex">
              <input
                type={type}
                placeholder=""
                name="password"
                value={passwordPayload.password}
                onChange={handleChange}
                className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-2 w-full h-8"
              />
              <span
                className="absolute my-3 ml-64 pl-4"
                onClick={handlePasswordToggle}
              >
                <p className="flex justify-end">{icon} </p>
              </span>
            </div>
          </div>
          <div className="my-2">
            <label className="font-medium">Confirm Password</label>
            <input
              type={type}
              placeholder=""
              name="confirmPassword"
              value={passwordPayload.confirmPassword}
              onChange={handleChange}
              className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-2 w-full h-8"
            />

            {!confirmPasswordStatus && (
              <>
                <div className="flex py-0.5 text-red-500">
                  <div className="py-1">
                    {" "}
                    <RiErrorWarningFill size={14} />
                  </div>
                  <p className="px-0.5">Passwords do not match</p>
                </div>
              </>
            )}
          </div>
          <div className="text-[#868C98] my-2">
            <div className="flex my-1">
              <div
                className={`p-0.5 w-1/3 ${
                  passwordStrength >= 1 ? strengthColour : "bg-slate-300"
                }`}
              ></div>
              <div
                className={`p-0.5 mx-1 w-1/3 ${
                  passwordStrength >= 2 ? strengthColour : "bg-slate-300"
                }`}
              ></div>
              <div
                className={`p-0.5 w-1/3 ${
                  passwordStrength === 3 ? strengthColour : "bg-slate-300"
                }`}
              ></div>
            </div>
            <div className="my-2">
              <p className="text-black">Must contain at least;</p>
              <div className="flex">
                <div
                  className={`py-0.5 ${
                    containsCapital ? "text-green-400" : "text-slate-300"
                  }`}
                >
                  {passwordStrength >= 1 &&
                  passwordStrength <= 3 &&
                  !containsCapital ? (
                    <XCircleFill />
                  ) : (
                    <CheckCircleFill />
                  )}
                </div>
                <p className="px-1"> </p>At least 1 uppercase
              </div>
              <div className="flex">
                <div
                  className={`py-0.5 ${
                    containsNumber ? "text-green-400" : "text-slate-300"
                  }`}
                >
                  {passwordStrength >= 1 &&
                  passwordStrength <= 3 &&
                  !containsNumber ? (
                    <XCircleFill />
                  ) : (
                    <CheckCircleFill />
                  )}
                </div>
                <p className="px-1"> </p>At least 1 number
              </div>
              <div className="flex">
                <div
                  className={`py-0.5 ${
                    is8Character ? "text-green-400" : "text-slate-300"
                  }`}
                >
                  {passwordStrength >= 1 &&
                  passwordStrength <= 3 &&
                  !is8Character ? (
                    <XCircleFill />
                  ) : (
                    <CheckCircleFill />
                  )}
                </div>
                <p className="px-1"> </p>At least 8 characters
              </div>
            </div>
          </div>
          <button
            className="flex items-center justify-center my-2 p-1.5 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#F6F8FA] disabled:text-slate-300 w-full shadow-sm text-sm"
            disabled={passwordStrength !== 3 || !confirmPasswordStatus}
          >
            <p className="text-center">Create Password</p>
            {isLoading || resetIsLoading && (
              <>
                {" "}
                <span className="px-3">
                  {" "}
                  <LoadingSpinner />{" "}
                </span>
              </>
            )}{" "}
          </button>
        </form>

        {data?.status === "00" && (
          <>
            <div className="p-2 my-3 border border-slate-300 rounded flex shadow-md">
              <div className="text-green-400">
                <CheckCircleFill />
              </div>
              <div className="px-3">
                <p className="font-semibold">Account Created</p>
                <p className="py-1 font-light">
                  Welcome to Prokhure Marketplace. A verification email has been
                  sent to {regPayload.email}
                </p>
                <button
                  onClick={handleCheckMail}
                  className="font-semibold underline"
                >
                  Check your mail
                </button>
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
    </>
  );
};
