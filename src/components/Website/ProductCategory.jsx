import { RiArrowRightSLine } from "@remixicon/react";

export const ProductCategory = (props) => {
  return (
    <>
      <div>
        <div className="flex justify-between border-b border-slate-300 py-3">
          <div className="flex">
            {" "}
            <div className="flex mr-3">
              <div className="py-1 text-yellow-400"> {props.categoryIcon} </div>
              <p className="text-2xl font-medium mx-2">
                {" "}
                {props.categoryTitle}
              </p>
            </div>
            <div className="flex text-sm">
              <p className="border border-blue-600 rounded-2xl py-1 px-1.5 text-blue-600 mx-1">
                Safety
              </p>
              <p className="border border-blue-600 rounded-2xl py-1 px-1.5 text-blue-600 mx-1">
                Inspection
              </p>
              <p className="border border-blue-600 rounded-2xl py-1 px-1.5 text-blue-600 mx-1">
                Civil
              </p>
              <p className="border border-blue-600 rounded-2xl py-1 px-1.5 text-blue-600 mx-1">
                Mechanical
              </p>
              <p className="border border-blue-600 rounded-2xl py-1 px-1.5 text-blue-600 mx-1">
                Electrical
              </p>
            </div>
          </div>

<button>
<div className="flex">
            <p>View</p>
             <div className="p-1">
             <RiArrowRightSLine size={18} />

             </div>
          </div>

</button>
         
        </div>

      </div>
    </>
  );
};
