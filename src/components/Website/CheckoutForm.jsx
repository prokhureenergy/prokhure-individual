import { useState } from "react";
export const CheckoutForm = () => {
  const [checkoutPayload, setCheckoutPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    additionalNote: "",
  });
  const handleChange = (e) => {
    setCheckoutPayload({ ...checkoutPayload, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="bg-white rounded-md">
        <p className="p-4">BILLING INFORMATION</p>
        <div className="p-4">
          <form>
            <div className="flex gap-6">
              <div className="basis-1/2">
                <div className="my-1">
                  <label className="font-medium">First Name</label>
                  <input
                    type="text"
                    placeholder="E.g Johnson"
                    name="firstName"
                    value={checkoutPayload.firstName}
                    onChange={handleChange}
                    className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                  ></input>
                </div>
                <div className="my-1">
                  <label className="font-medium">Email Address</label>
                  <input
                    type="text"
                    placeholder=""
                    name="email"
                    value={checkoutPayload.email}
                    onChange={handleChange}
                    className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                  ></input>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="my-1">
                  <label className="font-medium">Last Name</label>
                  <input
                    type="text"
                    placeholder="E.g Johnson"
                    name="lastName"
                    value={checkoutPayload.lastName}
                    onChange={handleChange}
                    className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                  ></input>
                </div>
                <div className="my-1">
                  <label className="font-medium">Phone</label>
                  <input
                    type="text"
                    placeholder=""
                    name="phone"
                    value={checkoutPayload.phone}
                    onChange={handleChange}
                    className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                  ></input>
                </div>
              </div>
            </div>

            <div className="my-1">
              <label className="font-medium">Address</label>
              <input
                type="text"
                placeholder=""
                name="address"
                value={checkoutPayload.address}
                onChange={handleChange}
                className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
              ></input>
            </div>

            <div className="flex gap-6">
              <div className="basis-1/2">
                <div className="my-1">
                  <label className="font-medium">Select Country</label>
                  <input
                    type="text"
                    placeholder=""
                    name="country"
                    value={checkoutPayload.country}
                    onChange={handleChange}
                    className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                  ></input>
                </div>
                <div className="my-1">
                  <label className="font-medium">Select City</label>
                  <input
                    type="text"
                    placeholder=""
                    name="city"
                    value={checkoutPayload.city}
                    onChange={handleChange}
                    className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                  ></input>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="my-1">
                  <label className="font-medium">Select State</label>
                  <input
                    type="text"
                    placeholder=""
                    name="state"
                    value={checkoutPayload.state}
                    onChange={handleChange}
                    className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                  ></input>
                </div>
                <div className="my-1">
                  <label className="font-medium">Postal Code</label>
                  <input
                    type="text"
                    placeholder=""
                    name="postalCode"
                    value={checkoutPayload.postalCode}
                    onChange={handleChange}
                    className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                  ></input>
                </div>
              </div>
            </div>

            <div className="flex my-1">
              <input type="checkbox" />
              <p className="px-2 py-1">Ship to different address</p>
            </div>
            <div className="my-1">
            <label className="font-medium">Additional Note</label>

              <textarea
              placeholder=""
              name="additionalNote"
              value={checkoutPayload.additionalNote}
              onChange={handleChange}
              className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
