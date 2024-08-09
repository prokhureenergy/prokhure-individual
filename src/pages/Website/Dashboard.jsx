import Website1 from "../../assets/images/Website/Website1.svg";
import {RiStarFill } from "@remixicon/react";
import { ProductItem } from "../../components/Website/ProductItem";
import product1 from "../../assets/images/Website/product1.svg";
import product2 from "../../assets/images/Website/product2.svg";
import product3 from "../../assets/images/Website/product3.svg";
import product4 from "../../assets/images/Website/product4.svg";
import product5 from "../../assets/images/Website/product5.svg";
import { ProductCategory } from "../../components/Website/ProductCategory";
import voucherImage from "../../assets/images/Website/VoucherImage.jpeg";
import { useNavigate } from "react-router-dom";

export const WebsiteDashboard = () => {
  const navigate = useNavigate();
  const handleSignUp =()=>{
navigate("/signup");
  }
  return (
    <>
      <div className="bg-[#F6F8FA]">
      
        <div>
          <div className="grid grid-cols-4 gap-4 mx-10 mb-5 h-[308px]">
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
            <div className="col-span-3 bg-cover my-5 py-1 relative bg-gradient-to-r from-black to-gray-400 rounded-md">
              <img
                src={Website1}
                alt="WebsiteImage"
                className="w-full h-[308px] object-cover absolute mix-blend-overlay rounded-md"
              />
              <div className="text-[#FAFAFA] w-[360px] p-5 flex items-center justify-center mx-10 my-5 relative">
                <div>
                  <p className="text-3xl font-bold"> Super fast Performance</p>
                  <p className="text-center text-sm font-light py-2">
                    Strategic thinking is a valuable skill for everyone in an
                    organisation, and it becomes more essential as
                  </p>
                  <button className="bg-[#0055FF] text-white p-2 rounded-md my-5" onClick={()=>navigate("/shop")}>
                  Shop Now
                  </button>
                  
                </div>
              </div>
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
                  <p className="font-semibold text-3xl">
                    Up to 10% off Voucher
                  </p>
                  <p className="py-4">
                    {" "}
                    Strategic thinking is a valuable skill for everyone in an
                    organisation, and it becomes more essential as you ascend
                    the ladder. In this practical course, professor and author
                  </p>
                  <button className="bg-[#0055FF] text-white p-2 rounded-md" onClick={handleSignUp}>
                    <p>Sign Up</p>
                  </button>
                </div>
              </div>

              <div className="pr-10">
                <img src={voucherImage} alt="water oil separator" />
              </div>
            </div>

            <div className="py-4">
              <ProductCategory
                categoryTitle="Deals of the Day"
                categoryIcon="✨"
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
          </div>
        </div>

      </div>
    </>
  );
};
