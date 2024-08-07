import { useState } from "react";
import {
  ExclamationCircleFill,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { setRegisterPayload } from "../../store/store";
import { useDispatch } from "react-redux";

export const SignupForm = () => {
  const dispatch = useDispatch();
  const [signupPayload, setSignupPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignupPayload({ ...signupPayload, [e.target.name]: e.target.value });
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setRegisterPayload(signupPayload));
  };

  return (
    <>
      <div className="mt-3 text-sm w-[300px]">
        <form onSubmit={handleSubmit}>
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
              name="email"
              value={signupPayload.email}
              onChange={handleChange}
              className="peer border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-2 w-full h-8 invalid:border-red-600"
            ></input>
            <div className="invisible peer-invalid:visible text-red-500 text-xs flex">
              <div className="py-0.5">
                {" "}
                <ExclamationCircleFill />
              </div>{" "}
              <p className="px-1">Please provide a valid email address. </p>
            </div>
          </div>

          <button
            className="my-2 p-1.5 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#f1f2f4] disabled:text-slate-300 w-full shadow-sm text-sm"
            disabled={!signupPayload.email}
          >
            Confirm Details
          </button>
        </form>
      </div>
    </>
  );
};
