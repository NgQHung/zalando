import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { DATA_IMAGES } from "../../../utils/data-img";
import Container from "../../components/layouts/container";
import { data } from "../../../utils/data_muzi&deti";
import "./Muzi.css";

export const MuziPage = () => {
  const zenyDataImages_1 = DATA_IMAGES.filter((item) => item.title === "Zeny_1");
  const zenyDataImages_2 = DATA_IMAGES.filter((item) => item.title === "Zeny_2");
  const viewData_1 = data.muzi.view[0];
  const viewData_2 = data.muzi.view[1];
  const productData_1 = data.muzi.product;
  return (
    <Fragment>
      <Container bg_color="bg-[#229967] ">
        <div className="pt-[24px] flex justify-between w-full ">
          <div className="mt-[36px] px-[8px]">
            <p className="text-[32px] font-[700] leading-[2.25rem]">{viewData_1.title}</p>
            <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">{viewData_1.sub_title}</p>
            <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700]">Zobrazit víc</p>
          </div>
          <div>
            <img src={viewData_1.image} alt="img" />
          </div>
        </div>
      </Container>
      {/* <Content bg_color="bg-[#34d27b]"> */}
      <div className="scrollbar_hidden relative h-[584px] w-full overflow-x-auto bg-[#34d27b] mb-[64px]">
        <div className="absolute pt-[36px] pb-[24px] text-[14px] flex ">
          {productData_1.map((item) => (
            <div className="muzi_product_item">
              <ul className="flex ">
                <li className="relative h-[415px] w-[296px] px-[8px]">
                  <p className="absolute bg-[#ffff] top-2 right-2 ">
                    <FontAwesomeIcon icon={faHeart} className="fa-thin p-[8px] text-[24px]" />
                  </p>
                  <img className="h-full w-full object-cover" src={item.image} alt="product" />
                </li>
              </ul>
              <div className="flex pt-[8px]">
                <div className="w-[296px] px-[8px] leading-[20px]">
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
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
          <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
        </div>
      </div>
      {/* </Content> */}
      <Container bg_color="bg-[#a3a505]">
        <div>
          <p>Klasické tenisky</p>
          <p>Objevte nadčasové modely</p>
          <p>Zobrazit víc</p>
        </div>
        <div>
          <img
            src="https://img01.ztat.net/banner/2ffaef1e9c5545298c91ea007fda1035/ecf3897947c34b88b3183c28a68638d6.jpg?imwidth=512"
            alt="img"
          />
        </div>
      </Container>
      <div className="scrollbar_hidden relative h-[584px] w-full overflow-x-auto bg-[#e3e707] mb-[64px]">
        <div className="absolute pt-[36px] pb-[24px] text-[14px] ">
          {zenyDataImages_2.map((item) => (
            <div className="">
              <ul className="flex ">
                {item.image.map((image) => (
                  <li className="relative product_item h-[415px] w-[296px] px-[8px]">
                    <div className="absolute bg-[#ffff] top-2 right-2 ">
                      <FontAwesomeIcon icon={faHeart} className="fa-thin p-[8px] text-[24px]" />
                    </div>
                    <img className="h-full w-full object-cover" src={image} alt="product" />
                  </li>
                ))}
              </ul>
              <div className="flex ml-[152px] pt-[8px]">
                {item.info.map((item) => (
                  <div className="w-[296px] px-[8px] leading-[20px]">
                    <div className="pb-[8px]">
                      <h3>{item.brand}</h3>
                      <h3>{item.name}</h3>
                    </div>
                    <div className="flex flex-col leading-[1.25rem] text-[700]">
                      <span>{item.price}</span>
                      <div className="text-[12px] leading-[16px]">
                        <span>Původně:</span>
                        <span>{item.originalPrice}</span>
                        <span>20%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
          <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
        </div>
      </div>
    </Fragment>
  );
};
