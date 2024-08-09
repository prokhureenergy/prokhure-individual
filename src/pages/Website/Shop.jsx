import { RiSearch2Line } from "@remixicon/react";
import { ProductItem } from "../../components/Website/ProductItem";
import product1 from "../../assets/images/Website/product1.svg";
import product2 from "../../assets/images/Website/product2.svg";
import product3 from "../../assets/images/Website/product3.svg";
import product4 from "../../assets/images/Website/product4.svg";

export const Shop = () => {
  return (
    <>
      <div className="bg-white p-4 text-sm">
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <p className="font-medium text-lg">Product categories</p>
            <div className="flex h-[35px] px-3 gap-2">
              <div className="flex border border-slate-300 p-1 rounded-md">
                {" "}
                <input type="checkbox" />
                <p className="py-0.5 px-2">Safety</p>
              </div>
              <div className="flex border border-slate-300 p-1 rounded-md">
                {" "}
                <input type="checkbox" />
                <p className="py-0.5 px-2">Inspection</p>
              </div>
              <div className="flex border border-slate-300 p-1 rounded-md">
                {" "}
                <input type="checkbox" />
                <p className="py-0.5 px-2">Civil</p>
              </div>
              <div className="flex border border-slate-300 p-1 rounded-md">
                {" "}
                <input type="checkbox" />
                <p className="py-0.5 px-2">Mechanical</p>
              </div>
              <div className="flex border border-slate-300 p-1 rounded-md">
                {" "}
                <input type="checkbox" />
                <p className="py-0.5 px-2">Electrical</p>
              </div>
              <div className="flex border border-slate-300 p-1 rounded-md">
                {" "}
                <input type="checkbox" />
                <p className="py-0.5 px-2">Instrumentation</p>
              </div>
              <div className="flex border border-slate-300 p-1 rounded-md">
                {" "}
                <input type="checkbox" />
                <p className="py-0.5 px-2">Marine</p>
              </div>
            </div>
          </div>
          <div>
            <div className="my-3 text-xs flex items-center justify-center">
              <form className="flex h-8 rounded-md bg-white border border-slate-200">
                <RiSearch2Line
                  className="absolute h-3 w-3 flex ml-3 my-2"
                  color="#D0D5DD"
                />
                <input
                  type="search"
                  name="searchParam"
                  className="w-full py-1 px-4 text-gray-800 ml-5 focus:outline-none"
                  placeholder="Search for products"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="flex gap-2 my-2">
          <div className="basis-1/5 border-r border-slate-300">
            <form>
              <div className="my-3 mr-5">
                <p className="text-[#0A0D14] text-base">
                  {" "}
                  Filter by product status
                </p>
                <hr />
                <div className="py-3">
                  <div className="flex">
                    <input type="checkbox" /> <p className="px-2">In Stock</p>
                  </div>
                  <div className="flex">
                    <input type="checkbox" /> <p className="px-2">On Sale</p>
                  </div>
                  <div className="flex">
                    <input type="checkbox" /> <p className="px-2">Bulk Order</p>
                  </div>
                </div>
              </div>
              <div className="my-3 mr-5">
                <p className="text-[#0A0D14] text-base"> Filter by price</p>
                <hr />
                <form className="py-3">

                    <div className="my-3 p-0.5 bg-[#0055FF]">

                    </div>
                  <button className="p-2 rounded-md text-center w-full text-[#0055FF] border border-[#0055FF]">
                    Filter
                  </button>
                </form>
              </div>
              <div className="my-3 mr-5">
                <p className="text-[#0A0D14] text-base"> Filter by brand</p>
                <hr />
                <div className="py-3">
                  <div className="flex">
                    <input type="checkbox" /> <p className="px-2">Alpha oil</p>
                  </div>
                  <div className="flex">
                    <input type="checkbox" /> <p className="px-2">Syna drill</p>
                  </div>
                  <div className="flex">
                    <input type="checkbox" /> <p className="px-2">Lubchem</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="basis-4/5 mx-2">
          <div className="my-4">
            <input className="bg-slate-100 w-full rounded-md p-1.5 focus: outline-none" disabled/>
          </div>
            <div className="grid grid-cols-4 gap-3">
              <ProductItem
                productImage={product1}
                productName="Equal Entry Hole RDX Perforating Charges"
                productAmount="$5,184.92"
              />
              <ProductItem
                productImage={product2}
                productName="Equal Entry Hole RDX Perforating Charges"
                productAmount="$5,184.92"
              />
              <ProductItem
                productImage={product3}
                productName="Equal Entry Hole RDX Perforating Charges"
                productAmount="$5,184.92"
              />
              <ProductItem
                productImage={product4}
                productName="Equal Entry Hole RDX Perforating Charges"
                productAmount="$5,184.92"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
