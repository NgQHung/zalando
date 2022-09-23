import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import Container from "../../components/layouts/container";
import { data } from "../../../utils/data_muzi&deti";
import "./Deti.css";

export const DetiPage = () => {
  const viewData_1 = data.deti.view[0];
  const viewData_2 = data.deti.view[1];
  const productData_1 = data.deti.product;

  // React.useEffect(() => {
  //   console.log(window.scrollY);
  // }, [window.scrollY]);

  return (
    <Fragment>
      <Container bg_color="bg-[#229967] " margin="mb-16">
        <section className="flex flex-col w-full h-full">
          <div className="pt-[24px] flex justify-between w-full ">
            <div className="mt-[36px] px-[8px]">
              <p className="text-[32px] font-[700] leading-[2.25rem]">{viewData_1.title}</p>
              <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">{viewData_1.sub_title}</p>
              <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700] affect_text">Zobrazit víc</p>
            </div>
            <div>
              <img src={viewData_1.image} alt="img" />
            </div>
          </div>
          <div className="row_full bg-[#34d27b] mb-[64px]">
            <div className="absolute pt-[36px] pb-[24px] text-[14px] flex ">
              {productData_1.map((item, idx) => (
                <div key={idx} className="muzi_product_item cursor-pointer">
                  <ul className="flex ">
                    <li className="relative h-[415px] w-[296px] px-[8px]">
                      <p className="absolute bg-[#ffff] top-2 right-2 ">
                        <FontAwesomeIcon icon={faHeart} className="fa-thin p-[8px] text-[24px]" />
                      </p>
                      <img className="h-full w-full object-cover" src={item.image} alt="product" />
                      <div className=" leading-[20px]">
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
                  </ul>
                </div>
              ))}
            </div>
            <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%] cursor-pointer">
              <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
            </div>
          </div>
        </section>
      </Container>

      <Container bg_color="bg-[#1a1a1a] " margin="my-16">
        <section className="flex flex-col w-full h-full">
          <div className="pt-[24px] flex justify-between w-full text-[#ffff]  ">
            <div className="mt-[36px] px-[8px]">
              <p className="text-[32px] font-[700] leading-[2.25rem]">{viewData_2.title}</p>
              <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">{viewData_2.sub_title}</p>
              <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700] affect_text">Zobrazit víc</p>
            </div>
            <div>
              <img src={viewData_2.image} alt="img" />
            </div>
          </div>
          <div className="row_full bg-[#101010] mb-[64px] ">
            <div className="absolute pt-[36px] pb-[24px] text-[14px] flex ">
              {productData_1.map((item, idx) => (
                <div key={idx} className="muzi_product_item cursor-pointer">
                  <ul className="flex ">
                    <li className="relative h-[415px] w-[296px] px-[8px]">
                      <p className="absolute bg-[#ffff] top-2 right-2 ">
                        <FontAwesomeIcon icon={faHeart} className="fa-thin p-[8px] text-[24px]" />
                      </p>
                      <img className="h-full w-full object-cover" src={item.image} alt="product" />
                      <div className=" leading-[20px]">
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
                  </ul>
                </div>
              ))}
            </div>
            <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%] cursor-pointer">
              <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
            </div>
          </div>
        </section>
      </Container>
    </Fragment>
  );
};
