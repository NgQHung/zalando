import { faChevronDown, faChevronRight, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import Container from "../../components/layouts/container";
import { SubHeaderCategory_DATA } from "../../../utils/data";
import Category_filter from "./category_filter";
import Card from "../../components/UI/Card";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Products } from "../../../interfaces/Products";
import { ImgToHttp } from "../../../utils/imageToHTTP";
import { Link } from "react-router-dom";
import { productActions } from "../../../stores/product-slice";
export const ListProducts = () => {
  const allProducts = useAppSelector((state) => state.productSlice.allProducts);
  const dispatch = useAppDispatch();
  const selectedProductHandler = (id: number) => {
    dispatch(productActions.selectedIdHandler(id));
  };

  return (
    <Fragment>
      <Container bg_color="">
        <div className="flex flex-col w-full mt-[35px] lg:min-w-[768px] md:mx-6 mx-[18px] ">
          <nav className="flex">
            <span>Pánové</span>
            <FontAwesomeIcon icon={faChevronRight} />
            <span>Pánská obuv</span>
          </nav>
          <h1 className="text-[40px] font-[600] leading-[48px] pt-3">Oblečení</h1>
          <div className="flex flex-col lg:flex-row mt-6">
            {/* screen start */}
            <div className="hidden lg:block basis-1/4 max-w-1/4 text-[14px] font-[700]">
              <p className="mb-3 text-[#6328e0] ">Obuv</p>

              <div className=" pl-2 leading-5">
                {SubHeaderCategory_DATA[3].type[0].types.map((item, idx) => (
                  <li key={idx} className="mb-3 list-none">
                    <span className="affect_text">{item}</span>
                  </li>
                ))}
              </div>
            </div>
            {/* screen end */}

            {/* mobile start */}
            <div className="lg:hidden flex gap-2 relative w-screen overflow-x-auto scrollbar_hide ml-[calc(-50vw+50%-8.5px)] pb-4 border-b border-[#efeff0]">
              {SubHeaderCategory_DATA[3].type[0].types.map((item, idx) => (
                <li key={idx} className="flex mb-3 list-none items-center first:ml-[35px] md:first:ml-[41px] ">
                  <span className="text-[16px] py-3 pl-3 pr-2 bg-[#efeff0] font-[700]  whitespace-nowrap">{item}</span>
                </li>
              ))}
            </div>
            {/* mobile end */}

            <div className="basis-full max-w-full lg:basis-3/4 lg:max-w-3/4 mt-[24px] ">
              <Category_filter />
              <p className="px-2 mb-3 pt-4 text-[14px] font-[400] text-[#66676e] flex items-center">
                <span>273 produktu</span>
                <span className="p-2">
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    className=" p-[1px] h-[22px] object-cover text-[#ffff] bg-[#66676e] rounded-xl"
                  />
                </span>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:max-w-[912px]">
                {allProducts.map((product: Products, idx) => (
                  <Link key={idx} to={`/${product.name}`} onClick={() => selectedProductHandler(product.id)}>
                    <Card imgUrl={ImgToHttp(product.imageUrl)}>
                      <div className="text-[14px] leading-5">
                        <div className="pb-2">
                          <h3 className="text-tiempos ">{product.brandName}</h3>
                          <h3 className=" font-[400] whitespace-nowrap text-ellipsis overflow-hidden">
                            {product.name}
                          </h3>
                        </div>
                        <p className="font-400 ">{product.price.current.text}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};