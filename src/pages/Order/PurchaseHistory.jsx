import { useState } from "react";
import { OrderTable } from "./OrderTable";

export const PurchaseHistory = () => {
    const [status, setStatus] = useState("All");
  return (
    <>
      <div>
        <div className="bg-white border border-slate-200 rounded-md shadow-md p-4">
          <div>
            <p className="font-semibold">Orders</p>
            <p className="text-xs py-1">
                View all your orders
            </p>
            <hr className="my-2"/>
          </div>
          <div className="flex justify-between">
            <div className="flex bg-slate-200 p-1 rounded-md text-xs">
                <button onClick={()=> setStatus("All")} className={`px-5 ${status === "All" ? "py-0.5 bg-white rounded-sm font-medium" : "font-medium text-slate-400"}`}>All</button>
                <button onClick={()=> setStatus("Ongoing")} className={`px-5 ${status === "Ongoing" ? "py-0.5 bg-white rounded-sm font-medium" : "font-medium text-slate-400"}`}>Ongoing</button>
                <button onClick={()=> setStatus("Delivered")} className={`px-5 ${status === "Delivered" ? "py-0.5 bg-white rounded-sm font-medium" : "font-medium text-slate-400"}`}>Delivered</button>
            </div>
            <div className="flex gap-2">
               <div>Search</div> <div>dropdown</div>
            </div>

          </div>
          <div>
          <OrderTable/>
          </div>
        </div>
      </div>
    </>
  );
};
