export const Payment = () => {
  return (
    <>
      <div className="bg-white border border-slate-200 rounded-md shadow-md my-6 p-4">
        <div>
          <p className="font-semibold">Payment Details</p>
          <p className="text-xs py-1">Update your payment details</p>
        </div>

        <div className="mt-4">
          <button className="border border-slate-200 font-semibold text-xs p-2 rounded-md">
            View your debit cards
          </button>
        </div>
      </div>
    </>
  );
};
