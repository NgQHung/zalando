import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { productShoppingCart } from "../../../interfaces/ProductShoppingCart";

const Wardrobe = () => {
  const likedProducts = useAppSelector((state) => state.cartSlice.addedFavorite);
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
          <Link to="lists/liked" className="wardrobe_list-favorite px-2 mt-2 cursor-pointer">
            <div className="p-4 bg-[#ffff] ">
              <div className="wardrobe_list-head flex items-center">
                <h2 className="wardrobe_list-title mr-auto grow text-[28px] font-[600] leading-[32px] tracking-[-0.28px] ">
                  Oblíbené předměty
                </h2>
                <h3 className="wardrobe_list-quantity leading-[24px] font-[400] tracking-[-0.16px] whitespace-nowrap mr-3 text-[#a2a3a8]">
                  Počet produktů: 32
                </h3>
                <span className="h-6 w-6 text-center">
                  <FontAwesomeIcon icon={faChevronRight} className=" h-full object-cover" />
                </span>
              </div>
              <p className="wardrobe_list-content text-[22px] text_tiempos tracking-[-0.22px] font-[400] my-4">
                Mějte přehled o všem, co se vám líbí, sdílejte zboží s přáteli a zeptejte se na jejich názor.
              </p>
              <ul className="wardrobe_list-images flex ">
                {/* {likedProducts?.map((product: productShoppingCart) => (
                  <li className="pr-2 basis-1/4 max-w-[128px]">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      // src={product?.imageUrl}
                      alt=""
                    />
                  </li>
                ))} */}
                <li className="px-2 basis-1/4 max-w-[128px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </Link>
          <Link to="lists/owned" className="wardrobe_list-purchased px-2 mt-2 cursor-pointer">
            <div className="p-4 bg-[#ffff] ">
              <div className="wardrobe_list-head flex items-center">
                <h2 className="wardrobe_list-title mr-auto grow text-[28px] font-[600] leading-[32px] tracking-[-0.28px] ">
                  Vlastní předměty
                </h2>
                <h3 className="wardrobe_list-quantity leading-[24px] font-[400] tracking-[-0.16px] whitespace-nowrap mr-3 text-[#a2a3a8]">
                  Počet produktů: 32
                </h3>
                <span className="h-6 w-6 text-center">
                  <FontAwesomeIcon icon={faChevronRight} className=" h-full object-cover" />
                </span>
              </div>
              <p className="wardrobe_list-content text-[22px] text_tiempos tracking-[-0.22px] font-[400] my-4">
                Ohodnoťte produkt, zkontrolujte velikost nebo si něco kupte znovu (a znovu).
              </p>
              <ul className="wardrobe_list-images flex ">
                <li className="pr-2 basis-1/4">
                  <img
                    className="max-sw-[128px] object-cover"
                    src="https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </li>
                <li className="px-2 basis-1/4">
                  <img
                    className="w-[128px] object-cover"
                    src="https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </Link>
        </div>
        <div className="flex flex-col basis-1/2">
          <Link to="lists/liked-outfits" className="wardrobe_savedOutfit  px-2 mt-2 cursor-pointer">
            <div className="p-4 bg-[#ffff]">
              <div className="wardrobe_list-head flex items-center">
                <h2 className="wardrobe_list-title mr-auto grow text-[28px] font-[600] leading-[32px] tracking-[-0.28px] ">
                  Uložené outfity
                </h2>
                <span className="h-6 w-6 text-center">
                  <FontAwesomeIcon icon={faChevronRight} className=" h-full object-cover" />
                </span>
              </div>
              <p className="wardrobe_list-content text-[22px] text_tiempos tracking-[-0.22px] font-[400] my-4">
                Osrdíčkujte své oblíbené outfity a ony na vás budou čekat (až je budete potřebovat).
              </p>
              <div className="wardrobe_list-btn flex ">
                <button className="text-center p-3 bg-[#1a1a1a] text-[#ffff] hover:opacity-80  ">
                  <span className="font-[700] text-ellipsis leading-[24px] text-[16px]">Inspirujte se</span>
                </button>
              </div>
            </div>
          </Link>
          <Link to="lists/sell" className="wardrobe_sellYourProduct px-2 mt-2 cursor-pointer">
            <div className="p-4 bg-[#ffff] ">
              <div className="wardrobe_list-head flex items-center">
                <h2 className="wardrobe_list-title mr-auto grow text-[28px] font-[600] leading-[32px] tracking-[-0.28px] ">
                  Prodejte své předměty
                </h2>
                <span className="h-6 w-6 text-center">
                  <FontAwesomeIcon icon={faChevronRight} className=" h-full object-cover" />
                </span>
              </div>
              <p className="wardrobe_list-content text-[22px] text_tiempos tracking-[-0.22px] font-[400] my-4">
                Prodejte své lehce nošené oblečení za kredit a udělejte si místo v šatníku.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;
