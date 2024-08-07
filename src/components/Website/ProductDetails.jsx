import { StarRating } from "./StarRating";

export const Description = () => {
  return (
    <>
      <div className="flex items-center justify-center text-sm">
        <div className="w-[900px]">
          <div>
            <p className="text-2xl font-medium py-2">Description</p>
            <p>
              {" "}
              The most powerful MacBook Pro ever is here. With the blazing-fast
              M1 Pro or M1 Max chip — the first Apple silicon designed for pros
              — you get groundbreaking performance and amazing battery life. Add
              to that a stunning Liquid Retina XDR display, the best camera and
              audio ever in a Mac notebook, and all the ports you need. The
              first notebook of its kind, this MacBook Pro is a beast. M1 Pro
              takes the exceptional performance of the M1 architecture to a
              whole new level for pro users. Even the most ambitious projects
              are easily handled with up to 10 CPU cores, up to 16 GPU cores, a
              16‑core Neural Engine, and dedicated encode and decode media
              engines that support H.264, HEVC, and ProRes codecs.
            </p>
          </div>
          <div className="my-2">
            <p className="text-lg font-medium py-2">Shipping Information</p>
            <div>
              <div className="flex gap-2">
                <p className="font-semibold">Courier:</p>
                <p> 2 - 4 days, free shipping</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Local Shipping:</p>
                <p> up to one week, $19.00</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">UPS Ground Shipping:</p>
                <p> 4 - 6 days, $29.00</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Unishop Global Export:</p>
                <p> 3 - 4 days, $39.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Specification = () => {
  return (
    <>
      <div className="flex items-center justify-center text-sm">
        <div className="w-[600px]">
          <p className="text-2xl font-medium py-2">Product Specification</p>

          <div className="flex justify-between">
            <ul className="list-disc">
              <li className="py-0.5"> Model No. ACF150GK</li>
              <li className="py-0.5"> Model No. ACF150GK</li>
              <li className="py-0.5"> Model No. ACF150GK</li>
              <li className="py-0.5"> Model No. ACF150GK</li>
              <li className="py-0.5"> Model No. ACF150GK</li>
            </ul>
            <ul className="list-disc">
              <li className="py-0.5"> Model No. ACF150GK</li>
              <li className="py-0.5"> Model No. ACF150GK</li>
              <li className="py-0.5"> Model No. ACF150GK</li>
              <li className="py-0.5"> Model No. ACF150GK</li>
              <li className="py-0.5"> Model No. ACF150GK</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export const Review = () => {
  return (
    <>
      <div className="flex items-center justify-center text-sm my-3">
        <div className="w-[600px]">
          <div>
            <p className="text-2xl font-medium py-2">Product Reviews</p>
            <div className="my-2">
              <div className="flex gap-1">
                {" "}
                <p> James Brown</p>{" "}
                <p className="text-xs font-light text-slate-400 py-0.5">
                  {" "}
                  @jamesbrown
                </p>
              </div>
              <div className="flex gap-1 my-1">
                {" "}
                <StarRating value={4} /> <p>(4) </p>{" "}
              </div>
              <div className="text-[#31353F]">
                <p className="leading-4">
                  Let me paint a picture of sheer culinary bliss with this
                  multifunctional kitchen gadget that has single-handedly
                  revolutionized my entire cooking experience. From the moment I
                  unpacked it, I could sense the possibilities. The sleek design
                  hinted at its versatility, but it wasn't until I put it to the
                  test that I truly understood its magic.
                </p>
                <p className="py-2">2 hours ago</p>
              </div>

              <hr />
            </div>
          </div>

          <div>
            {" "}
            <p className="text-lg font-semibold my-3">Add a Review</p>
            <p className="font-medium">Your Review</p>
            <form className="my-1">
              <textarea className="border border-slate-300 rounded-md w-full h-[100px]" />
            </form>
            <div className="flex justify-end items-end ">
              <button className="bg-[#0055FF] rounded-md p-2 text-white text-center">
                Add a review
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
