import React, { Fragment } from "react";
import Content from "../../components/layouts/container";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Products } from "../../../interfaces/Products";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { productActions } from "../../../stores/product-slice";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useAppDispatch();
  const productToShowHome_1: Products[] = useAppSelector((state) => state.homeSlice.productToShowHome_1);
  const productToShowHome_2: Products[] = useAppSelector((state) => state.homeSlice.productToShowHome_2);

  const selectedProductHandler = (id: number) => {
    dispatch(productActions.selectedIdHandler(id));
  };

  return (
    <Fragment>
      <Content bg_color="bg-[#229967] ">
        <div className="flex flex-col w-full h-full">
          <div className="pt-[24px] flex justify-between w-full ">
            <div className="mt-[36px] px-[8px]">
              <p className="text-[32px] font-[700] leading-[2.25rem]">Klasické tenisky</p>
              <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">Objevte nadčasové modely</p>
              <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700]">Zobrazit víc</p>
            </div>
            <div>
              <img
                src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
                alt="img"
              />
            </div>
          </div>
          <div className="row_full bg-[#34d27b] mb-[64px]">
            <div className=" flex pt-[36px] pb-[24px] text-[14px] ">
              {productToShowHome_1.map((item: Products) => (
                <Link
                  to={`/${item.name}`}
                  key={item.id}
                  onClick={() => selectedProductHandler(item.id)}
                  className="first:ml-[152px]"
                >
                  <div className="relative h-[415px] w-[296px] px-[8px] cursor-pointer">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="fa-thin p-[8px] text-[24px] absolute bg-[#ffff] top-2 right-2"
                    />
                    <img className="w-[288px] h-[415px] object-cover" src={`https://${item.imageUrl}`} alt="product" />
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
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
              <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
            </div>
          </div>
        </div>
      </Content>
      <Content bg_color="bg-[#a3a505] ">
        <div className="flex flex-col w-full h-full">
          <div className="pt-[24px] flex justify-between w-full ">
            <div className="mt-[36px] px-[8px]">
              <p className="text-[32px] font-[700] leading-[2.25rem]">Klasické tenisky</p>
              <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">Objevte nadčasové modely</p>
              <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700]">Zobrazit víc</p>
            </div>
            <div>
              <img
                src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
                alt="img"
              />
            </div>
          </div>
          <div className="row_full bg-[#e3e707] mb-[64px]">
            <div className=" flex pt-[36px] pb-[24px] text-[14px] ">
              {productToShowHome_2.map((item: Products) => (
                <div key={item.id} className="first:ml-[152px]">
                  <div className="relative h-[415px] w-[296px] px-[8px] cursor-pointer">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="fa-thin p-[8px] text-[24px] absolute bg-[#ffff] top-2 right-2"
                    />
                    <img className="w-[288px] h-[415px] object-cover" src={`https://${item.imageUrl}`} alt="product" />
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
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
              <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
            </div>
          </div>
        </div>
      </Content>
    </Fragment>
  );
};

// export default Home;