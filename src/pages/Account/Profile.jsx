import { Plus, Trash3 } from "react-bootstrap-icons";
import mastercard from "../../assets/images/Mastercard.png";
export const Profile = () => {
  return (
    <>
      <div className="bg-white rounded-md shadow-md my-2 p-4">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">General Details</p>
            <p className="text-xs py-1">Update your account details</p>
          </div>
          <div className="flex items-center justify-center shadow-md rounded-md px-3 font-semibold border border-slate-200">
            Edit account
          </div>
        </div>
        <div className="my-6 text-base">
          <div className="">
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="James Betown"
              name="fullName"
              className="bg-slate-100 rounded-md p-1 my-1 w-full h-10 px-3"
            ></input>
          </div>
          <div className="py-3">
            <label className="font-semibold">Email address</label>
            <input
              type="email"
              placeholder="jamesbetown@email.com"
              name="emailAddress"
              className="bg-slate-100 rounded-md p-1 my-1 w-full h-10 px-3"
            ></input>
          </div>
          <div className="py-3">
            <label className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="bg-slate-100 rounded-md p-1 my-1 w-full h-10 px-3"
            ></input>
          </div>
          <div className="py-3">
            <label className="font-semibold">Address</label>
            <textarea
              type="text"
              placeholder="Enter address"
              maxLength={250}
              name="address"
              className="bg-slate-100 rounded-md p-1 my-1 w-full h-24 px-3"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-md my-6 p-4">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">Payment Details</p>
            <p className="text-xs py-1">Update your payment details</p>
          </div>
          <div className="flex items-center justify-center shadow-md rounded-md px-3 font-semibold border border-slate-200">
            <div className="">
              <Plus size={25} />
            </div>
            <p className="px-1">Add card </p>
          </div>
        </div>
        <div className="flex justify-between border border-slate-200 rounded-md shadow-sm p-3 mt-6 mb-2">
          <div className="flex">
              <img src={mastercard} alt="card" className="w-[40px] h-[30px]" />
            <div className="px-2">
              <p className="font-semibold">Joshua Grisham</p>
              <p> ****************2234</p>
            </div>
          </div>
          <div className="flex justify-stretch">
            {" "}
            <Trash3 className="flex justify-start items-start" />
          </div>
        </div>
      </div>
    </>
  );
};
