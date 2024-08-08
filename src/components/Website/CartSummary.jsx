export const CartSummary = () => {
  return (
    <>
      <div className="bg-white rounded-md">
        <p className="p-4">CART AMOUNT</p>
        <div className="border-y border-slate-300 p-4">
          <div className="flex justify-between">
            <div className="text-[#5F6C72]">
              <p className="px-1"> Sub-total</p>
              <p className="px-1"> Discount</p>
              <p className="px-1">Tax</p>
            </div>
            <div className="font-medium">
            <p className="px-1"> $697.96</p>
              <p className="px-1"> $0</p>
              <p className="px-1">$59.99</p>
            </div>
          </div>
        </div>
        <div className="p-4">
            <div className="flex justify-between my-2">  <p className="py-1">Total</p> <p className="py-1"> $789.95</p></div>
       <button className="bg-[#0055FF] p-2 w-full rounded-md text-white my-3">Proceed to Checkout</button>
        </div>
      </div>

      <div className="my-4 bg-white rounded-md">
<div className="p-4 border-b border-slate-300">
<p className="font-medium">Coupon Code</p>
</div>
<div className="p-4">
<form>
    <input type="text" className="border border-slate-300 p-2 rounded-md w-full" placeholder="Enter Coupon code"/>
    
    <button className="my-3 p-2 border border-[#0055FF] text-[#0055FF] rounded-md w-full">Apply Coupon</button>

</form>

</div>
      </div>
    </>
  );
};
