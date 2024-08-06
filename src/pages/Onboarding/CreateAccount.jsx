import { NavBar } from "../../components/Shared/NavBar";
import LoginFrame from "../../assets/images/Login Frame.svg";
import CustomIcon from "../../assets/images/Custom Icon.png";
import { SignupForm } from "./SignupForm";
import { useState } from "react";
import { CreatePasswordForm } from "./CreatePasswordForm";
import { VerificationForm } from "./VerificationForm";
import { useSelector } from "react-redux";

export const CreateAccount = () => {
  const regPayload = useSelector((state) => state.userState?.registerPayload);
  console.log(regPayload);
  const isAccountCreated = useSelector((state)=> state.userState?.createAccount);
  console.log(isAccountCreated);
    
  let pageHeader;
  let pageForm;

  if (regPayload !== null) {
    pageHeader = (
      <>
        <p className="font-semibold">Create your Password</p>
        <p className="font-normal text-xs pb-5">
          Set up a secure password to protect your account.{" "}
        </p>
      </>
    );
    pageForm = <CreatePasswordForm />;
  } else {
    pageHeader = (
      <>
        <p className="font-semibold">Sign up to Prokhure</p>
        <p className="font-normal text-xs pb-5">
          Enter your details to signup.
        </p>
      </>
    );
    pageForm = <SignupForm />;
  }
  return (
    <>
    <div className="bg-slate-50 h-screen">
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
              { pageHeader}

                <hr />
              </div>

              <div>
               {pageForm}
              </div>
            </div>
          </div>

        </div>

        <div className="basis-5/12 bg-slate-50">
          <img src={LoginFrame} alt="login" className="h-[75vh]" />
        </div>
      </div>
      <footer> 
      <p className="text-xs py-2 px-4">© 2024 Prokhure Energy</p>
      </footer>
      </div>
    </>
  );
};
