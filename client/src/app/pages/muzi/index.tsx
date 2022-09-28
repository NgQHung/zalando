import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { DATA_IMAGES } from "../../../utils/data-img";
import Container from "../../components/layouts/container";
import { data } from "../../../utils/data_muzi&deti";
import "./Muzi.css";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { productActions } from "../../../stores/product-slice";
import axios from "axios";

interface Idata {
  image: string;
  brand: string;
  name: string;
  price: number;
}

export const MuziPage = () => {
  const viewData_1 = data.muzi.view[0];
  const viewData_2 = data.muzi.view[1];
  const productData_1 = data.muzi.product;
  const dispatch = useAppDispatch();

  const clickedProduct = (data: Idata) => {
    const { name, price, brand } = data;
    dispatch(productActions.selectedProductHandler({ name: name, price: price, brand: brand }));
  };

  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v3/detail",
    params: { id: "203024461", lang: "en-US", store: "US", sizeSchema: "US", currency: "USD" },
    headers: {
      "X-RapidAPI-Key": "c30a5399bcmsh42dc8185eb498d0p148cd7jsn8b6acc1f7ea2",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {})
    .catch(function (error) {
      console.error(error);
    });

  return (
    <Fragment>
      <Container bg_color="bg-[#229967]" margin="mb-16">
        <section className=" relative flex flex-col w-full h-full">
          <div className="mx-[18px] md:mx-[24px]">
            <div className="  pt-[24px] basis-full max-w-full flex justify-between w-full ">
              {/* <div className="mt-[36px] px-[8px] basis-1/2 max-w-1/2  lg:basis-[41.666%] lg:max-w-[41.666%]">
                <p className="text-[32px] font-[700] leading-[2.25rem]">{viewData_1.title}</p>
                <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">{viewData_1.sub_title}</p>
                <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700] affect_text">Zobrazit víc</p>
              </div> */}
              <div className="mt-[36px] px-[8px]">
                <p className="text-[32px] font-[700] leading-[2.25rem]">{viewData_1.title}</p>
                <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">{viewData_1.sub_title}</p>
                <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700] affect_text">Zobrazit víc</p>
              </div>
              <div className="relative  flex basis-1/2 max-w-1/2 lg:basis-[58.333%] lg:max-w-[58.333%]">
                <div className="absolute basis-1/2 max-w-1/2 overflow-hidden ">
                  <img src={viewData_1.image} alt="img" className="max-w-[450px] lg:max-w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="row_full bg-[#34d27b]  ">
            <div className=" pt-[36px] pb-[24px] text-[14px] flex ">
              {productData_1.map((item, idx) => (
                <div key={idx} className="muzi_product_item cursor-pointer">
                  <ul className="flex ">
                    <Link to={`/${item.name}`}>
                      <li onClick={() => clickedProduct(item)} className="relative h-[415px] w-[296px] px-[8px]">
                        <p className="absolute bg-[#ffff] top-2 right-2 ">
                          <FontAwesomeIcon icon={faHeart} className="fa-thin p-[8px] text-[24px]" />
                        </p>
                        <img className="h-full w-full object-cover " src={item.image} alt="product" />
                        <div className=" leading-[20px] pt-2">
                          <div className="pb-[8px]">
                            <h3>{item.brand}</h3>
                            <h3>{item.name}</h3>
                          </div>
                          <div className="flex flex-col leading-[1.25rem] text-[700]">
                            <span>{item.price}</span>
                            <div className="text-[12px] leading-[16px]">
                              {/* <span>Původně:</span>
                              <span>{item.originalPrice}</span>
                              <span>20%</span> */}
                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
              ))}
              <button className="button_sliding bg-[#ffff] ">
                <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
              </button>
            </div>
          </div>
        </section>
      </Container>

      <Container bg_color="bg-[#a3a505]" margin="my-16">
        <section className="flex flex-col w-full">
          <div className="pt-[24px] flex justify-between w-full ">
            <div className="mt-[36px] px-[8px]">
              <p className="text-[32px] font-[700] leading-[2.25rem]">{viewData_2.title}</p>
              <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">{viewData_2.sub_title}</p>
              <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700] affect_text">Zobrazit víc</p>
            </div>
            <div>
              <img src={viewData_2.image} alt="img" />
            </div>
          </div>
          <div className="row_full bg-[#e3e707]">
            <div className="absolute pt-[36px] pb-[24px] text-[14px] flex ">
              {productData_1.map((item, idx) => (
                <div key={idx} className="muzi_product_item cursor-pointer">
                  <ul className="flex ">
                    <Link to={`/${item.name}`}>
                      <li className="relative h-[415px] w-[296px] px-[8px]">
                        <p className="absolute bg-[#ffff] top-2 right-2 ">
                          <FontAwesomeIcon icon={faHeart} className="fa-thin p-[8px] text-[24px]" />
                        </p>
                        <img className="h-full w-full object-cover" src={item.image} alt="product" />
                        <div className=" leading-[20px]  pt-2">
                          <div className="pb-[8px]">
                            <h3>{item.brand}</h3>
                            <h3>{item.name}</h3>
                          </div>
                          <div className="flex flex-col leading-[1.25rem] text-[700]">
                            <span>{item.price}</span>
                            <div className="text-[12px] leading-[16px]">
                              {/* <span>Původně:</span>
                                <span>{item.originalPrice}</span>
                                <span>20%</span> */}
                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>
                  </ul>
                </div>
              ))}
            </div>
            <div className="absolute cursor-pointer bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
              <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
            </div>
          </div>
        </section>
      </Container>
    </Fragment>
  );
};
