import { RiMailFill, RiMapPin2Fill, RiPhoneFill } from "@remixicon/react";
import logo from "../../assets/icon/Prokhure.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="text-sm">
        <div className="bg-[#F6F8FA] border-y border-slate-300 px-4">
          <div className="my-10 mx-20 flex justify-between">
            <div className="w-[414px]">
              <p className="text-2xl font-bold">
                Join our newsletter to get update on product discounts
              </p>
              <p className="text-base py-4">Register now and get latest updates on promotions & coupons. Don’t worry, we will not spam.</p>
            </div>
            <div className="flex items-center justify-center">
              <div>
              <div className="flex gap-4"> <input placeholder="Enter email address" className="w-3/4 bg-white border border-slate-200 rounded-md p-2"/> <button className="w-1/4 text-white bg-[#0055FF] p-2 rounded-md"> Subscribe</button></div>
            <p className="py-3">
              By subscribing, you agree to our Terms & Conditions and Privacy
              Policy
            </p>
              </div>
           
          </div>
          </div>
         
        </div>
        <div className="bg-[#F6F8FA] border-y border-slate-300 flex items-center justify-center">
          <div className="my-10 text-center w-[500px]">
            <p className="text-2xl font-bold">
              Want to make orders for your organisation?
            </p>
            <p className="py-2">
              Signup as a business or organisation on Prokhure and get access to
              premium services and product procurement
            </p>
            <button className="text-white bg-[#0055FF] p-2 rounded-md my-5">
              Sign up as an organisation
            </button>
          </div>
        </div>
        <div className="bg-white px-4">
          <div className="py-2 flex justify-between my-10">
            <div className="px-4">
              <div className="py-4 flex">
                <img src={logo} alt="logo" />
                <div className="px-2 text-sm font-semibold">
                  <p className="text-red-500">Prokhure</p>
                </div>
              </div>

              <div className="flex py-2">
                <RiPhoneFill className="py-1" />
                <div className="px-2">
                  <p className="">(480) 555-0103</p>
                </div>
              </div>

              <div className="flex p-2 ">
                <div className="flex items-center justify-center">
                  <RiMapPin2Fill className="py-1" />
                </div>
                <div className="px-2">
                  <p>4517 Washington Ave.</p>
                  <p>Manchester, Kentucky 39495</p>
                </div>
              </div>

              <div className="flex p-2 ">
                <RiMailFill className="py-1" />
                <div className="px-2">
                  <p className="">4debra.holt@example.com</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-base w-[650px]">
              <ul className="">
                <li className="font-medium py-1"> About Prokhure</li>
                <li className="py-0.5">
                  {" "}
                  <Link>About Us </Link>{" "}
                </li>
                <li className="py-0.5">
                  {" "}
                  <Link> Career</Link>{" "}
                </li>
                <li className="py-0.5">
                  {" "}
                  <Link>We are hiring </Link>
                </li>
                <li className="py-0.5">
                  <Link>Contact us </Link>{" "}
                </li>
              </ul>

              <ul>
                <li className="font-medium py-1"> Resources </li>
                <li className="py-0.5">
                  {" "}
                  <Link>FAQ </Link>{" "}
                </li>
                <li className="py-0.5">
                  {" "}
                  <Link> Watch a Demo</Link>{" "}
                </li>
                <li className="py-0.5">
                  {" "}
                  <Link>API </Link>
                </li>
              </ul>

              <ul>
                <li className="font-medium py-1"> Features </li>
                <li className="py-0.5">
                  {" "}
                  <Link>For Vendors </Link>{" "}
                </li>
                <li className="py-0.5">
                  {" "}
                  <Link> For Individuals</Link>{" "}
                </li>
                <li className="py-0.5">
                  {" "}
                  <Link>For Corporates </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="py-4 flex justify-between">
            <div>
              {" "}
              <p className="py-2 px-4">© 2024 Prokhure Energy</p>
            </div>
            <div className="flex gap-4">
              {" "}
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
