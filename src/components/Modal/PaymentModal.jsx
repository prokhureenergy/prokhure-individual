import { useDispatch } from "react-redux";
import { togglePaymentModal } from "../../store/store";
import CardIcon from "../../assets/icon/Featured icon.svg";
import { useState } from "react";

export const PaymentModal = () => {
  const [paymentPayload, setPaymentPayload] = useState({
    name: "",
    expiry: "",
    cardNumber: "",
    ccv: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setPaymentPayload({ ...paymentPayload, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="absolute backdrop-blur-sm w-screen h-screen bg-[#20232D4D]"></div>
      <div className="absolute flex items-center justify-center w-screen h-screen">
        <div className="w-2/5 bg-white rounded-md ">
          <div className="relative px-5 py-3">
            <div className="m-4">
              <div>
                <img src={CardIcon} alt="card" />
              </div>
              <div className="my-2">
                <p className="text-2xl font-medium">Pay with card</p>
                <p className="text-[#667085]">
                  Please provide your ATM card details
                </p>
              </div>
              <div>
                <form>
                  <div className="flex gap-4">
                    <div className="basis-2/3">
                      <div className="my-1">
                        <label className="font-medium">Name on card</label>
                        <input
                          type="text"
                          placeholder="E.g. Johnson"
                          name="name"
                          value={paymentPayload.name}
                          onChange={handleChange}
                          className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                        ></input>
                      </div>

                      <div className="my-1">
                        <label className="font-medium">Card Number</label>
                        <input
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          name="cardNumber"
                          value={paymentPayload.cardNumber}
                          onChange={handleChange}
                          className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                        ></input>
                      </div>
                    </div>
                    <div className="basis-1/3">
                      <div className="my-1">
                        <label className="font-medium">Expiry</label>
                        <input
                          type="date"
                          placeholder="12/24"
                          name="expiry"
                          value={paymentPayload.expiry}
                          onChange={handleChange}
                          className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                        ></input>
                      </div>
                      <div className="my-1">
                        <label className="font-medium">CCV</label>
                        <input
                          type="text"
                          placeholder= "..."
                          name="ccv"
                          value={paymentPayload.ccv}
                          onChange={handleChange}
                          className="border border-slate-300 focus:outline-none focus:border-slate-200 rounded-md shadow-xs my-1 p-3 w-full"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="my-2 flex gap-4 text-center">
                    <button               onClick={() => dispatch(togglePaymentModal())}
 className="border disabled:border-slate-300 border-[#0055FF] rounded-md text-red-700 p-2 w-1/2">
                      Close
                    </button>{" "}
                    <button className="disabled:text-slate-300 disabled:bg-slate-100 text-white bg-[#0055FF] rounded-md p-2 w-1/2">Pay $789.95</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
