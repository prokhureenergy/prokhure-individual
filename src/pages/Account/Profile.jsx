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
            Add card
          </div>
        </div>
      </div>
    </>
  );
};
