import { CheckoutForm } from "../../components/Website/CheckoutForm";
import { OrderSummary } from "../../components/Website/OrderSummary";
import product1 from "../../assets/images/Website/product1.svg";
import product2 from "../../assets/images/Website/product2.svg";
import product3 from "../../assets/images/Website/product3.svg";
import product4 from "../../assets/images/Website/product4.svg";
import product5 from "../../assets/images/Website/product5.svg";
import { ProductItem } from "../../components/Website/ProductItem";
import { ProductCategory } from "../../components/Website/ProductCategory";

export const Checkout =()=>{
    return(<>
    <div className="py-5 mx-10">
<p className="text-2xl font-bold">Checkout</p>
<div className="flex gap-4 my-2">
<div className="basis-2/3">
<CheckoutForm/>
</div>
<div className="basis-1/3">
<OrderSummary/>
</div>
</div>

<div>
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
    </>)
}