import {
  RiFacebookBoxFill,
  RiFileCopyLine,
  RiHeartLine,
  RiInstagramFill,
  RiTwitterXLine,
} from "@remixicon/react";
import Website1 from "../../assets/images/Website/Website1.svg";
import { Footer } from "../../components/Shared/Footer";
import { NavBar } from "../../components/Shared/NavBar";
import { QuantityCounter } from "../../components/Website/CounterReducer";
import { StarRating } from "../../components/Website/StarRating";
import product1 from "../../assets/images/Website/product1.svg";
import product2 from "../../assets/images/Website/product2.svg";
import product3 from "../../assets/images/Website/product3.svg";
import product4 from "../../assets/images/Website/product4.svg";
import product5 from "../../assets/images/Website/product5.svg";
import { ProductItem } from "../../components/Website/ProductItem";
import { ProductCategory } from "../../components/Website/ProductCategory";
import PaymentChannel from "../../assets/images/Website/PaymentChannel.svg";
import { useState } from "react";
import { Description, Review, Specification } from "../../components/Website/ProductDetails";

export const Product = () => {
    const [active, setActive] = useState("Description");
  return (
    <>
      <div className="bg-[#F6F8FA] h-screen font-prokhure">
        <div className="bg-white">
          <NavBar value="website" />
        </div>
        <div className="flex h-[500px] mx-10 mt-10">
          <div className="basis-1/2">
            {" "}
            <div>
              <img src={Website1} alt="product" className="h-[400px]" />{" "}
            </div>
            <div className="flex gap-2 items-center justify-center my-2">
              <div>
                <img
                  src={Website1}
                  alt="product"
                  className="w-[80px] h-[80px]"
                />{" "}
              </div>
              <div>
                <img
                  src={Website1}
                  alt="product"
                  className="w-[80px] h-[80px]"
                />{" "}
              </div>
              <div>
                <img
                  src={Website1}
                  alt="product"
                  className="w-[80px] h-[80px]"
                />{" "}
              </div>
            </div>
          </div>
          <div className="basis-1/2 mx-6 mt-6 px-5">
            <div>
              <div className="mb-5">
                <p className="font-bold text-2xl">
                  BB Baby Unisex Pajamas, Zip-Front NS{" "}
                </p>
                <div className="flex my-2">
                  {" "}
                  <StarRating value={4} /> <p className="px-1"> 4</p>{" "}
                  <p className="underline px-1"> 18 reviews </p>{" "}
                  <div className="border border-[#0C3BAC] text-[#0C3BAC] rounded-full text-xs mx-10">
                    <p className="p-1 ">IN STOCK </p>
                  </div>
                </div>
                <p className="font-bold text-lg py-1">$7,144.98</p>
                <p className="text-left leading-4">
                  Strategic thinking is a valuable skill for everyone in an
                  organisation, and it becomes more essential as
                </p>
              </div>

              <div className="flex border-y border-slate-200 py-4">
                <QuantityCounter counterValue={0} />
                <button className="bg-[#0C3BAC] text-white p-2 rounded-md mx-2">
                  Add to cart
                </button>
              </div>
              <div className="flex justify-between border-y border-slate-200 py-4 text-[#475156]">
                <div className="flex">
                  <div className="p-0.5">
                    <RiHeartLine size={18} className="text-black" />{" "}
                  </div>
                  <p className="px-1">Add to Wishlist</p>
                </div>
                <div className="flex">
                  <p> Share product: </p>{" "}
                  <div className="flex px-2 py-1 text-black gap-2">
                    {" "}
                    <RiFileCopyLine size={16} /> <RiTwitterXLine size={16} />{" "}
                    <RiInstagramFill size={16} />{" "}
                    <RiFacebookBoxFill size={16} />{" "}
                  </div>
                </div>
              </div>
              <div className="py-3">
                <p className="text-[#475156]">100% Guarantee Safe Checkout</p>
                <img src={PaymentChannel} alt="payment" className="py-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-y">
          <div className="mx-10">
            <div className="flex justify-center items-center gap-4">
            <button onClick={()=>setActive("Description")} className={`p-4 ${active === "Description" && " border-b-2 border-[#0C3BAC]"}`}>Description</button>

            <button onClick={()=>setActive("Specification")} className={`p-4 ${active === "Specification" && " border-b-2 border-[#0C3BAC]"}`}>Specification</button>
            <button onClick={()=>setActive("Reviews")} className={`p-4 ${active === "Reviews" && " border-b-2 border-[#0C3BAC]"}`}>Reviews</button>
            </div>
<div className="my-5">
{active ==="Description" && <Description/>}
{active === "Specification" && <Specification/>}
{active === "Reviews" && <Review/>}
</div>
          </div>
        </div>

        <div className="mx-10">
          <div className="py-4">
            <ProductCategory categoryTitle="Related Products" categoryIcon="" />
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
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
