import { NavBar } from "../../components/Shared/NavBar";
import LoginFrame from "../../assets/images/Login Frame.png";
import CustomIcon from "../../assets/images/Custom Icon.png";
import { SignupForm } from "./SignupForm";
import { useState } from "react";
import { CreatePasswordForm } from "./CreatePasswordForm";
import { VerificationForm } from "./VerificationForm";

export const CreateAccount = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isCreateAccountSuccessful, setIsCreateAccountSuccessful] =
    useState(true);
  let pageHeader;
  let pageForm;

  if (isEmailValid) {
    pageHeader = (
      <>
        <p className="font-semibold">Create your Password</p>
        <p className="font-normal text-xs pb-5">
          Set up a secure password to protect your account.{" "}
        </p>
      </>
    );
    pageForm = <CreatePasswordForm />;
  } else if (isCreateAccountSuccessful) {
    pageHeader =  <>
    <p className="font-semibold">Enter Verification Code</p>
    <p className="font-normal text-xs pb-5">
    We’ve sent a code to willie.jennings@example.com    </p>
  </> ; pageForm = <VerificationForm />;
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
          <img src={LoginFrame} alt="login" className="" />
        </div>
      </div>
      <p className="text-xs px-4 py-2">© 2024 Prokhure Energy</p>
      </div>
    </>
  );
};
