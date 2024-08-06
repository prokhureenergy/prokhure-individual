import { RiShoppingCartLine } from "@remixicon/react";

export const ProductItem = (props) => {
  return (
    <>
      <div className="text-sm">
        <div className="bg-[#F6F8FA]">
          <div>
            <img src={props.productImage} alt="productImage" />
          </div>
          <div className="flex items-center justify-center p-3">
            <button className="flex gap-2">
            <RiShoppingCartLine size={16} /> <p>Add to Cart</p>
            </button>
          </div>
        </div>
        <div>
          <p className="font-semibold leading-5">{props.productName} </p>
          <p className="py-1">{props.productAmount}</p>
        </div>
      </div>
    </>
  );
};
