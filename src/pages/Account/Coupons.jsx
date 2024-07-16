import coupon from "../../assets/images/EmptyCoupon.png";
export const Coupons = () => {
  return (
    <>
      <div className="bg-white border border-slate-200 rounded-md shadow-md my-6 p-4">
        <div>
          <p className="font-semibold">Coupons</p>
          <p className="text-xs py-1">Manage all your coupons here</p>
        </div>

        <div className="my-10">
          <div className="flex justify-center items-center">
            <div>
              <div className="flex justify-center items-center">
                {" "}
                <img src={coupon} alt="coupon" />
              </div>
              <p className="text-sm text-gray-400">
                You have no coupons right now
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
