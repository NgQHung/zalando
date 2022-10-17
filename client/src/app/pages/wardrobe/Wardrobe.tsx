import React from "react";
// import { useAppSelector } from "../../hooks";
import WARDROBE_LIKED from "../../containers/wardrobe/Wardrobe_Liked";
import WARDROBE_OWN from "../../containers/wardrobe/Wardrobe_Own";
import WARDROBE_SAVED_SELL from "../../containers/wardrobe/Wardrobe_saved_sell";

const Wardrobe = () => {
  // const likedProducts = useAppSelector((state) => state.cartSlice.addedFavorite);
  return (
    <div className="bg-[#efeff0] w-full relative lg:max-w-[1216px]  mx-auto my-0 ">
      <div className="wardrobe_title bg-[#ffff] ">
        <div className="ml-6 p-4">
          <h1 className="text-[40px] font-[600] leading-[48px] tracking-[-0.4px]">Vaše předměty</h1>
          <h1>Všechny na jednom místě</h1>
        </div>
      </div>
      <div className="flex py-6 mx-6 mb-6">
        <div className="flex flex-col basis-1/2 ">
          <WARDROBE_LIKED />
          <WARDROBE_OWN />
        </div>
        <WARDROBE_SAVED_SELL />
      </div>
    </div>
  );
};

export default Wardrobe;
