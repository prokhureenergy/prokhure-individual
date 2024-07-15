import { NavBar } from "../../components/Shared/NavBar";
import { SideBar } from "../../components/SideBar/SideBar";
export const Category = () => {
  return (
    <>
      <div>
            <div className="bg-white border border-slate-200 rounded-md shadow-md p-4">
              <div>
                <p className="font-semibold">Categories</p>
                <p className="text-xs py-1">
                  Select or unselect your preferred categories
                </p>
              </div>

              <div className="mt-4">
                <form>
                  <div className="flex py-4">
                    <input type="checkbox" />
                    <label className="px-4 font-medium text-base">Safety</label>
                  </div>
                  <hr />
                  <div className="flex py-4">
                    <input type="checkbox" />
                    <label className="px-4 font-medium text-base">
                      Inspection
                    </label>
                  </div>
                  <hr />
                  <div className="flex py-4">
                    <input type="checkbox" />
                    <label className="px-4 font-medium text-base">Civil</label>
                  </div>
                  <hr />
                  <div className="flex py-4">
                    <input type="checkbox" />
                    <label className="px-4 font-medium text-base">
                      Mechanical
                    </label>
                  </div>
                  <hr />
                  <div className="flex py-4">
                    <input type="checkbox" />
                    <label className="px-4 font-medium text-base">
                      Electrical
                    </label>
                  </div>
                  <hr />
                  <div className="flex py-4">
                    <input type="checkbox" />
                    <label className="px-4 font-medium text-base">
                      Instrumentation
                    </label>
                  </div>
                  <hr />
                  <div className="flex py-4">
                    <input type="checkbox" />
                    <label className="px-4 font-medium text-base">Marine</label>
                  </div>
                  <hr />
                  <div className="flex py-4">
                    <input type="checkbox" />
                    <label className="px-4 font-medium text-base">
                      Gasoline
                    </label>
                  </div>
                  <hr />
                  <div className="flex py-4">
                    <input type="checkbox" />
                    <label className="px-4 font-medium text-base">
                      Consumables
                    </label>
                  </div>
                  <hr />
                  <div className="flex justify-end items-end py-4">
                    <button className="border border-slate-200 p-3 rounded-md text-sm font-semibold">
                      Apply Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-md shadow-md my-6 p-4">
              <div>
                <p className="font-semibold">Price Range</p>
                <p className="text-xs py-1">
                  Select the price range of product you want to see
                </p>
              </div>

              <div className="mt-4">
                <form>
                  <div className="flex justify-end items-end py-4">
                    <button className="border border-slate-200 p-3 rounded-md text-sm font-semibold">
                      Apply Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        
    </>
  );
};
