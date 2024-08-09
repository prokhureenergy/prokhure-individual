import { RiCloseLine } from "@remixicon/react";
import item from "../../assets/images/Website/ordersum.svg";
import { useDispatch } from "react-redux";
import { togglePaymentModal } from "../../store/store";
export const OrderSummary = () => {
    const dispatch = useDispatch();
  return (
    <>
      <div className="bg-white rounded-md">
        <p className="p-4">ORDER SUMMARY</p>
        <div className="border-y border-slate-300 py-1 px-4 my-1">
          <tr className="flex items-center justify-center">
            <td className="rounded-md h-[80px] w-[80px] flex items-center justify-center">
              {" "}
              <img src={item} alt="item" />{" "}
            </td>
            <td className="w-[400px] px-2">
              <div>
                <p>PS 35-45 YW Boots Breathable Spring</p>
                <div className="flex">
                  {" "}
                  <p> 1 x</p> <p className="px-2 text-blue-800">$1,500</p>
                </div>
              </div>
            </td>
            <td>
              <RiCloseLine size={18} />
            </td>
          </tr>
          <tr className="flex items-center justify-center py-2">
            <td className="rounded-md h-[80px] w-[80px] flex items-center justify-center">
              {" "}
              <img src={item} alt="item" />{" "}
            </td>
            <td className="w-[400px] px-2">
              <div>
                <p>PS 35-45 YW Boots Breathable Spring</p>
                <div className="flex">
                  {" "}
                  <p> 1 x</p> <p className="px-2 text-blue-800">$1,500</p>
                </div>
              </div>
            </td>
            <td>
              <RiCloseLine size={18} />
            </td>
          </tr>
        </div>
        <div>
          <div className="flex justify-between py-1 px-4">
            <div className="text-[#5F6C72]">
              <p className="px-1"> Sub-total</p>
              <p className="px-1"> Discount</p>
              <p className="px-1">Tax</p>
            </div>
            <div className="font-medium">
              <p className="px-1"> $697.96</p>
              <p className="px-1"> $0</p>
              <p className="px-1">$59.99</p>
            </div>
          </div>

          <div className="py-1 px-4">
            <div className="flex justify-between my-1">
              {" "}
              <p className="py-1">Total</p> <p className="py-1"> $789.95</p>
            </div>
            <button
            onClick={()=> dispatch(togglePaymentModal())}
              className="disabled:bg-[#F6F8FA] disabled:text-slate-300 bg-[#0055FF] text-white
 py-1 px-4 w-full rounded-md  my-3"
            >
              Pay for Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
