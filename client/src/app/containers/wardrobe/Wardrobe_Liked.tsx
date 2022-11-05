import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../../../interfaces/Products";
import { ImgToHttp } from "../../../utils/imageToHTTP";

const WARDROBE_LIKED = () => {
  const [addedFavorite, setAddedFavorite] = useState<Products[]>([]);
  const addedFavoriteLength = addedFavorite?.length;
  const addedFavoriteToShow = addedFavorite.slice(0, 4);

  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("persist:root")!) || [];
    setAddedFavorite(JSON.parse(getCart.cartSlice).addedFavorite);
  }, []);
  return (
    <Link to="lists/liked" className="wardrobe_list-favorite px-2 mt-2 cursor-pointer">
      <div className="p-4 bg-[#ffff] ">
        <div className="wardrobe_list-head flex items-center">
          <h2 className="wardrobe_list-title mr-auto grow text-[20px] leading-[28px] tracking-[-.2px] lg:text-[28px] font-[600] lg:leading-[32px] lg:tracking-[-0.28px] ">
            Oblíbené předměty
          </h2>
          <h3 className="wardrobe_list-quantity leading-[24px] font-[400] tracking-[-0.16px] whitespace-nowrap mr-3 text-[#a2a3a8]">
            Počet produktů: {addedFavoriteLength ? addedFavoriteLength : ""}
          </h3>
          <span className="h-6 w-6 text-center">
            <FontAwesomeIcon icon={faChevronRight} className=" h-full object-cover" />
          </span>
        </div>
        <p className="wardrobe_list-content text-[22px] text_tiempos tracking-[-0.22px] font-[400] my-4">
          Mějte přehled o všem, co se vám líbí, sdílejte zboží s přáteli a zeptejte se na jejich názor.
        </p>
        <ul className="wardrobe_list-images flex ">
          {addedFavoriteToShow.map((item: Products) => (
            <li className="px-2 basis-1/4 max-w-[128px]">
              <img className="w-full h-full object-cover" src={ImgToHttp(item.imageUrl)} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default memo(WARDROBE_LIKED);
