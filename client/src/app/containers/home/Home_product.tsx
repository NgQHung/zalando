import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../../../interfaces/Products";
import { AfterRefresh } from "../../../utils/pageIsRefreshed";
import WrapperRowFull from "../../components/UI/wrapper/WrapperRowFull";
import { useAppSelector } from "../../hooks";

interface IProps {
  products: Products[];
  selectedProductHandler: (id: number) => void;
  favoriteHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  selectedProduct: any;
  favoriteAnimated: boolean;
}

const HOME_PRODUCT = ({
  products,
  selectedProductHandler,
  favoriteHandler,
  selectedProduct,
  favoriteAnimated,
}: IProps) => {
  const [favoriteLcst, setFavoriteLcst] = useState<any>([]);
  useEffect(() => {
    if (AfterRefresh()) {
      const getCart = JSON.parse(localStorage.getItem("persist:root")!) || [];
      const addedFavorite = JSON.parse(getCart.cartSlice).addedFavorite;
      setFavoriteLcst(addedFavorite);
      // if (getCart !== null || getCart) {
      //   getDetailProduct(dispatch, getSelectedId);
      // } else return;
    } else return;
  }, [products]);
  console.log(favoriteLcst);
  return (
    <WrapperRowFull className="h-[584px] bg-[#34d27b] ">
      <>
        <div className=" flex pt-[36px] pb-[24px] text-[14px] ">
          {products.map((item: Products, index) => (
            <div key={item.id} className="first:ml-[36px] md:first:ml-[48px] lg:first:ml-[152px]">
              <div className="relative h-[415px] w-[296px] px-[8px] cursor-pointer">
                <div datatype={item.name} onClick={favoriteHandler} className="absolute bg-[#ffff] top-2 right-2">
                  {/* {favoriteLcst.map((favorite: any) => ( */}
                  <FontAwesomeIcon
                    type="checkbox"
                    icon={faHeart}
                    className={
                      "fa-thin p-[8px] text-[24px] " + (item?.isFavorite === true ? "favorite_added-active" : "")
                    }
                  />
                  {/* ))} */}
                </div>
                <Link onClick={() => selectedProductHandler(item.id)} to={`/${item.name}`}>
                  <img
                    src="Skeleton-img.png"
                    className=" w-[288px] h-[415px] object-cover"
                    lazy-src={`https://${item.imageUrl}`}
                    // lazy-src="Img-topic-1.png"
                    alt="product"
                  />
                  <div className=" leading-[20px] pt-2">
                    <div className="pb-[8px]">
                      <h3>{item.brandName}</h3>
                      <h3>{item.name}</h3>
                    </div>
                    <div className="flex flex-col leading-[1.25rem] text-[700]">
                      <span>{item.price.current.text}</span>
                      {item.price.previous.value !== null && (
                        <div className="text-[12px] leading-[16px]">
                          <span>Původně:</span>
                          <span>{item.price.previous.text}</span>
                          <span>20%</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
          <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
        </div>
      </>
    </WrapperRowFull>
  );
};

export default HOME_PRODUCT;
