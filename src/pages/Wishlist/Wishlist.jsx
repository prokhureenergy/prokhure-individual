import Equal from "../../assets/images/Wishlist/Equal Entry.png";
import Set from "../../assets/images/Wishlist/Sure Set.png";
import Chiksan from "../../assets/images/Wishlist/Original Chiksan.png";

export const Wishlist = () => {
  const WishList = [
    {
      name: "Equal Entry Hole RDX Perforating Charges",
      Price: "$2,199",
      picture: Equal,
    },
    { name: "Sure set Wireline setting tool", Price: "$1,099", picture: Set },
    {
      name: "Original Chiksan and Triple step",
      Price: "$1,299",
      picture: Chiksan,
    },
  ];
  return (
    <>
      <div>
        <div>
          <p className="font-semibold">Wishlist</p>
        </div>

        <div className="mt-4">
          {WishList.map((w) => {
            return (
              <>
                <div className="bg-white rounded-lg font-semibold shadow-sm text-xs p-3 my-2">
                  <div className="flex justify-between">
                    <div className="flex">
                      <img
                        src={w.picture}
                        alt="equal"
                        className="h-[40px] w-[40px]"
                      />
                      <div className="flex justify-center items-center">
                        <div className="mx-2 items-center">
                          <p>{w.name}</p>
                          <p className="font-light py-1">{w.Price}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="p-2 border border-slate-300 rounded-md shadow-sm m-1">
                        Remove
                      </button>
                      <button className="p-2 bg-[#2A4DA0] rounded-md shadow-sm text-white m-1">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
