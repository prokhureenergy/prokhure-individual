import { useState } from "react";
import {
  ExclamationCircleFill,
  UniversalAccessCircle,
} from "react-bootstrap-icons";
import { useRegisterUserMutation } from "../../redux/user/userApi";

export const SignupForm = () => {
  const [signupPayload, setSignupPayload] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
  });

  const handleChange = (e) => {
    setSignupPayload({ ...signupPayload, [e.target.name]: e.target.value });
  };
  const [registerUser, { data, error, isLoading, isError }] =
    useRegisterUserMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(signupPayload);
  };
  console.log(data);

  return (
    <>
      <div className="mt-3 text-xs w-[300px]">
        <form>
          <div className="my-1">
            <label className="font-medium">First Name</label>
            <input
              type="text"
              placeholder="E.g Johnson"
              name="firstName"
              value={signupPayload.firstName}
              onChange={handleChange}
              className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-2 w-full h-8"
            ></input>
          </div>
          <div className="my-2">
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              placeholder="E.g Grisham"
              name="lastName"
              value={signupPayload.lastName}
              onChange={handleChange}
              className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-2 w-full h-8"
            ></input>
          </div>

          <div className="my-2">
            <label className="font-medium">Email Address</label>
            <input
              type="email"
              placeholder="E.g hello@prokhure.com"
              name="emailAddress"
              value={signupPayload.emailAddress}
              onChange={handleChange}
              className="peer border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-2 w-full h-8 invalid:border-red-600"
            ></input>
            <div class="invisible peer-invalid:visible text-red-500 text-xs flex">
              <div className="py-0.5">
                {" "}
                <ExclamationCircleFill />
              </div>{" "}
              <p className="px-1">Please provide a valid email address. </p>
            </div>
          </div>

          <button
            className="my-2 p-1.5 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#F6F8FA] disabled:text-slate-300 w-full shadow-sm text-sm"
            disabled={!signupPayload.emailAddress}
          >
            Confirm Details
          </button>
        </form>
      </div>
    </>
  );
};
