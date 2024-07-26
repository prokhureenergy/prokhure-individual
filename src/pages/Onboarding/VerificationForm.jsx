export const VerificationForm = () => {
  const otpValue = [];
  return (
    <>
      <div className="mt-3 text-xs w-[300px]">
        <form>
          <div className="flex m-2 items-center justify-center">
            <input className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2" />
            <input className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2" />
            <input className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2" />
            <input className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2" />
            <input className="p-4 border border-slate-300 rounded-md shadow-sm h-[50px] w-[50px] m-2" />
          </div>
        </form>

        <button
          className="my-2 p-1.5 rounded-md bg-[#2A4DA0] text-white disabled:bg-[#F6F8FA] disabled:text-slate-300 w-full shadow-sm text-sm"
          disabled={otpValue.length !== 6}
        >
          Verify Email
        </button>
        <div className="text-center mt-3">
          <p>Experiencing issues receiving the code?</p>
          <button className="font-semibold underline">Resend Code</button>
        </div>
      </div>
    </>
  );
};
