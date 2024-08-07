import { NavBar } from "../../components/Shared/NavBar";
import CustomIcon from "../../assets/images/Custom Icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLoginUserMutation } from "../../redux/user/userApi";
import { setUser } from "../../store/store";
import { useDispatch } from "react-redux";
import { RiEyeLine, RiEyeOffLine, RiErrorWarningFill } from "@remixicon/react";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
    role: "admin",
  });
  const [loginUser, { data, isLoading, error, isError }] =
    useLoginUserMutation();

  const handleChange = (e) => {
    setIsPasswordValid(true);
    setLoginPayload({ ...loginPayload, [e.target.name]: e.target.value });
  };
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

  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginPayload);
  };
  useEffect(() => {
    if (isError) {
      setIsPasswordValid(false);
      setLoginPayload({
        email: loginPayload.email,
        password: "",
        role: "admin",
      });
    } else if (data?.status === "00") {
      console.log(data);
      dispatch(setUser(data?.data));
      navigate("/dashboard");
    }
  }, [data, error]);

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
                  <p className="font-semibold text-lg">
                    Login to your Prokhure account
                  </p>
                  <p className="font-normal text-sm pb-5">
                    Enter your details to login.
                  </p>
                </div>
                <hr />
              </div>

              <div className="mt-3 text-sm w-[300px]">
                <form onSubmit={handleSubmit}>
                  <div className="">
                    <label className="font-medium">Email Address</label>
                    <input
                      type="email"
                      placeholder="hello@prokhure.com"
                      name="email"
                      value={loginPayload.email}
                      onChange={handleChange}
                      className="peer border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-2 w-full h-8 invalid:border-red-600"
                    ></input>
                    <div className="invisible peer-invalid:visible text-red-500 text-xs flex py-1 pb-2">
                      {" "}
                      <RiErrorWarningFill size={14} />
                      <p className="px-1">
                        Please provide a valid email address.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="mb-1">
                    <label className="font-medium">Password</label>
                    <div className="flex">
                      <input
                        type={type}
                        placeholder=""
                        name="password"
                        value={loginPayload.password}
                        onChange={handleChange}
                        className={`border ${
                          isPasswordValid
                            ? "border-slate-300 focus:border-slate-200"
                            : "border-red-500 focus:border-red-500"
                        }  focus:outline-none rounded-md shadow-xs my-1 p-2 w-full h-8`}
                      />
                      <span
                        className="absolute my-3 ml-64 pl-4"
                        onClick={handlePasswordToggle}
                      >
                        <p className="flex justify-end">{icon} </p>
                      </span>
                    </div>

                    {!isPasswordValid && (
                      <div className="text-red-500 text-xs flex py-0.5">
                        <div className="py-0.5">
                          {" "}
                          <RiErrorWarningFill size={14} />
                        </div>
                        <p className="px-1">
                          You have entered an incorrect password{" "}
                        </p>
                      </div>
                    )}
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
                    className="my-5 p-1.5 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#F6F8FA] disabled:text-slate-300 w-full shadow-sm text-sm flex items-center justify-center"
                    disabled={
                      !loginPayload.email || loginPayload.password === ""
                    }
                  >
                    <p className="text-center"> Login</p>
                    
                    {isLoading && (
                      <>
                        {" "}
                        <span className="px-3">
                          {" "}
                          <LoadingSpinner />{" "}
                        </span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer className="fixed bottom-0">
          <p className="text-sm py-2 px-4">© 2024 Prokhure Energy</p>
        </footer>
      </div>
    </>
  );
};
