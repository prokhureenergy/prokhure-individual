import product1 from "../../assets/images/Website/product1.svg";
import product2 from "../../assets/images/Website/product2.svg";
import product3 from "../../assets/images/Website/product3.svg";
import product4 from "../../assets/images/Website/product4.svg";
import product5 from "../../assets/images/Website/product5.svg";
import { ProductItem } from "../../components/Website/ProductItem";
import { ProductCategory } from "../../components/Website/ProductCategory";
import tv from "../../assets/images/Website/carttv.svg";
import { RiCloseLine } from "@remixicon/react";
import { QuantityCounter } from "../../components/Website/CounterReducer";
import { CartSummary } from "../../components/Website/CartSummary";

export const Cart = () => {
  return (
    <>
      <div className="bg-[#F6F8FA] py-5">
        <div className="mx-10">
          <p className="font-semibold text-2xl my-2">Your Cart</p>
          <div className="flex gap-4">
            <div className="basis-2/3">
              <div className="bg-white p-3 rounded-md">
                {" "}
                ITEMS ADDED TO CART
              </div>
              <div className="my-1">
                <tr className="text-[#475156] p-2">
                  {" "}
                  <td className="px-2 w-6/12">Product Name</td>
                  <td className="px-4 w-2/12 ">Price</td>
                  <td className="px-4 w-2/12">Quantity</td>
                  <td className="px-4 w-2/12">Sub-Total</td>
                </tr>
                <tr className=" bg-white p-2 rounded-md">
                  <td className="py-2 w-6/12">
                    <div className="flex items-center justify-center px-2">
                      <div className="px-2">
                        <RiCloseLine size={18} />
                      </div>
                      <img src={tv} alt="cart" className="w-[72px] h-[72px]" />
                      <p className="px-2 w-[450px]">
                      AB Wireless Mouse - DPI Adjustable - Black                      </p>
                    </div>
                  </td>
                  <td className="p-2 w-2/12 text-[#475156]">$249.99</td>
                  <td className="p-2 w-2/12">
                    <QuantityCounter counterValue={1} />
                  </td>
                  <td className="p-2 w-2/12 text-[#475156]">$499.98</td>
                </tr>

                <tr className=" bg-white p-2 rounded-md">
                  <td className="py-2 w-6/12">
                    <div className="flex items-center justify-center px-2 ">
                      <div className="px-2">
                        <RiCloseLine size={18} />
                      </div>
                      <img src={tv} alt="cart" className="w-[72px] h-[72px]" />
                      <p className="px-2 w-[450px]">
                        OM White Sneakers HQ Casual Breathable Shoes{" "}
                      </p>
                    </div>
                  </td>
                  <td className="p-2 w-2/12 text-[#475156]">$249.99</td>
                  <td className="p-2 w-2/12">
                    <QuantityCounter counterValue={1} />
                  </td>
                  <td className="p-2 w-2/12 text-[#475156]">$499.98</td>
                </tr>
                <hr />

                <div className="flex items-end justify-end my-3">
                  <button className="p-2 border border-[#0055FF] text-[#0055FF] rounded-md">
                    Update cart
                  </button>
                </div>
              </div>
            </div>
            <div className="basis-1/3"> <CartSummary/> </div>
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
      </div>
    </>
  );
};
