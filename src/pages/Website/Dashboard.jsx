import { NavBar } from "../../components/Shared/NavBar";
import Website1 from "../../assets/images/Website/Website1.svg";
import { RiStarFill } from "@remixicon/react";
import { ProductItem } from "../../components/Website/ProductItem";
import product1 from "../../assets/images/Website/product1.svg";

export const WebsiteDashboard = () => {
  return (
    <>
      <div className="bg-[#F6F8FA] h-screen">
        <div className="bg-white">
          <NavBar value="website" />
        </div>
        <div>
          <div className="grid grid-cols-4 gap-4 mx-10 my-5 h-[308px]">
            <div className="bg-white border border-slate-200 rounded-md p-4 my-5">
              <p className="font-semibold pb-2">Product Categories</p>
              <hr />
              <ul className="my-3">
                <li className="my-1">Safety</li>
                <li className="my-1">Inspection</li>
                <li className="my-1">Civil</li>
                <li className="my-1">Mechanical</li>
                <li className="my-1">Electrical</li>
                <li className="my-1">Instrumentation</li>
                <li className="my-1">Marine</li>
              </ul>
              <button className="border border-blue-600 text-blue-600 rounded-md p-1">
                View all
              </button>
            </div>
            <div className="my-5 col-span-3 py-1 relative bg-red-50">
              <img
                src={Website1}
                alt="WebsiteImage"
                className="bg-cover h-[308px] rounded-md"
              />
            </div>
          </div>

          <div className="bg-white py-4 px-10 my-20">
            <div className="flex">
              {" "}
              <div className="flex mr-3">
                <div className="py-1 text-yellow-400"> <RiStarFill/> </div>
              <p className="text-2xl font-medium mx-2"> Trending Products</p>
              </div>
              <div className="flex text-sm">
                <p className="border border-blue-600 rounded-2xl py-1 px-1.5 text-blue-600 mx-1">
                  Safety
                </p>
                <p className="border border-blue-600 rounded-2xl py-1 px-1.5 text-blue-600 mx-1">
                  Inspection
                </p>
                <p className="border border-blue-600 rounded-2xl py-1 px-1.5 text-blue-600 mx-1">
                  Civil
                </p>
                <p className="border border-blue-600 rounded-2xl py-1 px-1.5 text-blue-600 mx-1">
                  Mechanical
                </p>
                <p className="border border-blue-600 rounded-2xl py-1 px-1.5 text-blue-600 mx-1">
                  Electrical
                </p>
              </div>
            </div>
            <hr className="my-5"/>
            <div className="grid grid-cols-5 gap-4 my-4">
                <ProductItem productImage={product1} productName="Equal Entry Hole RDX Perforating Charges" productAmount="$5,184.92"/>
                <ProductItem productImage={product1} productName="Equal Entry Hole RDX Perforating Charges" productAmount="$5,184.92"/>
                <ProductItem productImage={product1} productName="Equal Entry Hole RDX Perforating Charges" productAmount="$5,184.92"/>
                <ProductItem productImage={product1} productName="Equal Entry Hole RDX Perforating Charges" productAmount="$5,184.92"/>
                <ProductItem productImage={product1} productName="Equal Entry Hole RDX Perforating Charges" productAmount="$5,184.92"/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
