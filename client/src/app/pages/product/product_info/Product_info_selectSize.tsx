import { faChevronDown, faChevronUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MutableRefObject } from "react";
import Loader from "../../../components/UI/Loader";
import { NameDropdown } from "./types/NameDropdown";

interface IProps {
  inputRef: React.RefObject<HTMLDivElement>;
  sizeProduct: string;
  dropdownHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  sizeProductHandler: (size: string) => void;
  addShoppingCartHandler: () => void;
  addProductFavoriteHandler: () => void;
  bg_color_shopping_cart: boolean;
  loading__add: boolean;
  heartAnimated: boolean;
  nameDropdown: Record<string, any>;
}

const PRODUCT_INFO_SELECTSIZE = ({
  sizeProduct,
  inputRef,
  dropdownHandler,
  sizeProductHandler,
  addShoppingCartHandler,
  addProductFavoriteHandler,
  bg_color_shopping_cart,
  loading__add,
  heartAnimated,
  nameDropdown,
}: IProps) => {
  return (
    <div className="mt-9">
      {/* select your size start */}
      <div ref={inputRef} className="  mb-2 relative ">
        <button
          name="selectSize"
          className={
            "flex justify-between cursor-pointer w-full p-3 border border-[#1a1a1a] " +
            (!sizeProduct ? "outline_onHover" : "outline_effect hover:bg-[#e9e9ed]")
          }
          onClick={dropdownHandler}
        >
          <span className="">{sizeProduct ? sizeProduct : "Zvolte svou velikost"} </span>
          {nameDropdown.selectSize ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </button>

        <div className={"size_dropdown_hidden z-[1000] " + (nameDropdown.selectSize ? "size_dropdown" : "")}>
          <div className="hover:bg-[#e9e9ed] transition-all">
            <div
              onClick={() => sizeProductHandler("S")}
              className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]"
            >
              S
            </div>
          </div>
          <div onClick={() => sizeProductHandler("M")} className="hover:bg-[#e9e9ed] transition-all">
            <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
              M
            </div>
          </div>
          <div onClick={() => sizeProductHandler("L")} className="hover:bg-[#e9e9ed] transition-all">
            <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
              L
            </div>
          </div>
          <div onClick={() => sizeProductHandler("XL")} className="hover:bg-[#e9e9ed] transition-all">
            <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
              XL
            </div>
          </div>
          <div onClick={() => sizeProductHandler("XXL")} className="hover:bg-[#e9e9ed] transition-all">
            <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
              XXL
            </div>
          </div>
        </div>
      </div>
      {/* select your size end */}

      <div className="flex items-center w-full justify-between ">
        <button
          onClick={addShoppingCartHandler}
          className={
            "p-3 text-[#ffff] grow  h-[48px] transition-all " +
            (!nameDropdown.selectSize ? "hover:opacity-70 " : "") +
            (bg_color_shopping_cart ? "bg-[#47ac3a]" : "bg-[#1a1a1a]")
          }
        >
          {loading__add ? <Loader /> : <span>Přidat do nákupního košíku</span>}
        </button>
        <button
          onClick={addProductFavoriteHandler}
          className={"ml-2 h-[48px] w-[48px] border border-[#1a1a1a] outline_onHover "}
        >
          <FontAwesomeIcon icon={faHeart} className={"p-2 h-6 w-6 " + (heartAnimated ? "favorite_added-active" : "")} />
        </button>
      </div>
    </div>
  );
};

export default PRODUCT_INFO_SELECTSIZE;
