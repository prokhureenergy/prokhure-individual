import { EnvelopePlusFill, TelephoneFill } from "react-bootstrap-icons";

export const Support = () => {
  return (
    <>
      {" "}
      <div className="">
        <div>
          <p className="font-semibold">Support</p>
        </div>

        <div className="mt-4">
          <div className="bg-white border border-slate-300 font-semibold text-xs p-2 rounded-md my-2">
            <div className="flex items-center">
              <div className="border border-slate-300 rounded-full shadow-sm w-[40px] h-[40px]">
                <div className="text-base flex justify-center items-center p-3">
                  <TelephoneFill />
                </div>
              </div>
              <div className="m-1 mx-3">
                <p className="text-sm">Call us</p>
                <p className="text-xs font-light">
                  For enquiries and complaints, please call us on 08123456789
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-300 font-semibold text-xs p-2 rounded-md my-4">
            <div className="flex items-center">
              <div className="border border-slate-300 rounded-full shadow-sm w-[40px] h-[40px]">
                <div className="text-base flex justify-center items-center p-3">
                  <EnvelopePlusFill />
                </div>
              </div>
              <div className="m-1 mx-3">
                <p className="text-sm">Send us mail</p>
                <p className="text-xs font-light">
                For enquiries and complaints, please send us a mail to support@prokhure.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
