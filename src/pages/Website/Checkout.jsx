import { CheckoutForm } from "../../components/Website/CheckoutForm"
import { OrderSummary } from "../../components/Website/OrderSummary"

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
    </div>
    </>)
}