import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Products } from "../../../../interfaces/Products";
import { productActions } from "../../../../stores/product-slice";
import { ImgToHttp } from "../../../../utils/imageToHTTP";
import { useAppDispatch, useAppSelector } from "../../../hooks";

const Sliding_products = () => {
  const productToShowHome_1: Products[] = useAppSelector((state) => state.homeSlice.productToShowHome_1);
  const dispatch = useAppDispatch();

  const clickedProduct = (data: any) => {
    const { name, price, brand } = data;
    dispatch(productActions.selectedProductHandler({ name: name, price: price, brand: brand }));
  };
  return (
    <Fragment>
      <section className="mt-9 pt-[36px] pb-[24px] text-[14px] row-full ">
        <ul className=" flex relative overflow-x-auto scrollbar_hide ">
          {productToShowHome_1.map((item, idx) => (
            <Link key={idx} to={`/${item.name}`} className="first:ml-[25.4px]">
              <li
                onClick={() => clickedProduct(item)}
                className=" relative min-w-[157px] max-w-[340px] sm:min-w-[344px] md:min-w-[304px] px-[8px]  cursor-pointer"
              >
                <div className="relative">
                  <img className="h-full w-full  object-cover " src={ImgToHttp(item.imageUrl)} alt="product" />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fa-thin p-[8px] text-[24px] absolute bg-[#ffff] top-2 right-0 "
                  />
                </div>
                <div className=" leading-[20px] pt-2">
                  <div className="pb-[8px]">
                    <h3 className="text_tiempos text-[16px]  font-[400]">{item.brandName}</h3>
                    <h3>{item.name}</h3>
                  </div>
                  <div className="flex flex-col leading-[1.25rem] text-[700]">
                    <span>{item.price.previous.text}</span>
                    <div className="text-[12px] leading-[16px]">
                      {/* <span>Původně:</span>
                                <span>{item.originalPrice}</span>
                                <span>20%</span> */}
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="p-2 text-[24px] absolute cursor-pointer bg-[#ffff] right-0 top-1/2 translate-y-[-50%]"
        />
      </section>
    </Fragment>
  );
};

export default Sliding_products;
