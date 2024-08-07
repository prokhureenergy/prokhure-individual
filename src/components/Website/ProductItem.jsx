import { RiShoppingCartLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

export const ProductItem = (props) => {
  const navigate = useNavigate();

  const handleProduct=()=>{
    navigate("/product");
  }
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
          <button className="font-semibold leading-5 text-left" onClick={handleProduct}>{props.productName} </button>
          <p className="py-1">{props.productAmount}</p>
        </div>
      </div>
    </>
  );
};
