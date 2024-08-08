import Success from "../../assets/images/Website/SuccessTick.svg";
export const OrderSuccess=()=>{
    return (<>
    <div className="flex items-center justify-center p-10">
<div>
    <div className="flex items-center justify-center">
    <img src={Success} alt="success"/>
    </div>
    <div className="text-center my-3 w-[500px]">
        <p className="font-semibold">Your order is successfully place</p>
        <p className="my-3">Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>
    </div>
    <div className="flex items-center justify-center">
        <button className="p-2 m-2 border border-[#0055FF] text-[#0055FF] rounded-md">Back to Shop</button>
        <button className="p-2 m-2 bg-[#0055FF] text-white rounded-md">Track Order</button>
    </div>
</div>
    </div>
    </>)
}