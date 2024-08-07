import { NavBar } from "../../components/Shared/NavBar";
import Website1 from "../../assets/images/Website/Website1.svg";
import { RiArrowRightSLine, RiStarFill } from "@remixicon/react";
import { ProductItem } from "../../components/Website/ProductItem";
import product1 from "../../assets/images/Website/product1.svg";
import product2 from "../../assets/images/Website/product2.svg";
import product3 from "../../assets/images/Website/product3.svg";
import product4 from "../../assets/images/Website/product4.svg";
import product5 from "../../assets/images/Website/product5.svg";

import { ProductCategory } from "../../components/Website/ProductCategory";
import voucherImage from "../../assets/images/Website/VoucherImage.jpeg";
import { Footer } from "../../components/Shared/Footer";

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
              <button className="border border-blue-600 text-blue-600 rounded-md p-1 w-full">
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
            <div className="py-4">
              <ProductCategory
                categoryTitle="Trending Products"
                categoryIcon={<RiStarFill />}
              />
              <div className="grid grid-cols-5 gap-8 my-4">
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
                <ProductItem
                  productImage={product5}
                  productName="Equal Entry Hole RDX Perforating Charges"
                  productAmount="$5,184.92"
                />
              </div>
            </div>

            <div className="py-4">
              <ProductCategory
                categoryTitle="Recently viewed Products"
                categoryIcon="👀"
              />
              <div className="grid grid-cols-5 gap-8 my-4">
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
                <ProductItem
                  productImage={product5}
                  productName="Equal Entry Hole RDX Perforating Charges"
                  productAmount="$5,184.92"
                />
              </div>
            </div>

            <div className="py-4">
              <ProductCategory categoryTitle="Top Products" categoryIcon="✨" />
              <div className="grid grid-cols-5 gap-8 my-4">
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
                <ProductItem
                  productImage={product5}
                  productName="Equal Entry Hole RDX Perforating Charges"
                  productAmount="$5,184.92"
                />
              </div>
            </div>

            <div className="bg-[#F6F8FA] rounded-2xl h-[339px] flex justify-between">
              <div className="flex items-center justify-center pl-10">
              <div className="p-5 w-[414px]">
                <p className="font-semibold text-3xl">Up to 10% off Voucher</p>
                <p className="py-4">
                  {" "}
                  Strategic thinking is a valuable skill for everyone in an
                  organisation, and it becomes more essential as you ascend the
                  ladder. In this practical course, professor and author
                </p>
                <button className="bg-[#0055FF] text-white p-1.5 rounded-md flex">
                  <p>Sign Up</p>
                  <RiArrowRightSLine/>
                </button>
              </div>
              </div>
              
              <div className="pr-10"><img src={voucherImage} alt="water oil separator"/></div>
            </div>

            <div className="py-4">
              <ProductCategory categoryTitle="Deals of the Day" categoryIcon="✨" />
              <div className="grid grid-cols-5 gap-8 my-4">
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
                <ProductItem
                  productImage={product5}
                  productName="Equal Entry Hole RDX Perforating Charges"
                  productAmount="$5,184.92"
                />
              </div>
            </div>


          </div>
        </div>

        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
};
