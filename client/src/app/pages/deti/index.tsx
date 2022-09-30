import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import Container from "../../components/layouts/container";
import "./Deti.css";
import { useAppSelector } from "../../hooks";
import { Products } from "../../../interfaces/Products";

export const DetiPage = () => {
  const products_1: Products[] = useAppSelector((state) => state.productSlice.products_1);
  const products_2: Products[] = useAppSelector((state) => state.productSlice.products_2);

  // "https://img01.ztat.net/banner/65861df87c664ebc8af45790a71aca89/6e892e7902704d3f9bf6a518767b40e6.jpg?imwidth=512",

  return (
    <Fragment>
      <Container bg_color="bg-[#f2b53c] ">
        <div className="flex flex-col w-full h-full">
          <div className="pt-[24px] flex justify-between w-full ">
            <div className="mt-[36px] px-[8px]">
              <p className="text-[32px] font-[700] leading-[2.25rem]">Nová kolekce do -30% </p>
              <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">Stylová nábidka za nížší ceny</p>
              <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700]">Zobrazit víc</p>
            </div>
            <div>
              <img
                src="https://img01.ztat.net/banner/e2486100c1484e399a52ba44161a115f/3b4188bbe85047969147d1c2a6ec8aef.jpg?imwidth=512"
                alt="img"
              />
            </div>
          </div>
          <div className="row_full bg-[#fae0ad] mb-[64px]">
            <div className=" flex pt-[36px] pb-[24px] text-[14px] ">
              {products_1.map((item: Products) => (
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
      </Container>
      <Container bg_color="bg-[#2c8caa] ">
        <div className="flex flex-col w-full h-full">
          <div className="pt-[24px] flex justify-between w-full ">
            <div className="mt-[36px] px-[8px]">
              <p className="text-[32px] font-[700] leading-[2.25rem]">Nová kolekce do -30% </p>
              <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">Stylová nábidka za nížší ceny</p>
              <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700]">Zobrazit víc</p>
            </div>
            <div>
              <img
                src="https://img01.ztat.net/banner/65861df87c664ebc8af45790a71aca89/6e892e7902704d3f9bf6a518767b40e6.jpg?imwidth=512"
                alt="img"
              />
            </div>
            {/* 58b7d4 */}
          </div>
          <div className="row_full bg-[#58b7d4] mb-[64px]">
            <div className=" flex pt-[36px] pb-[24px] text-[14px] ">
              {products_2.map((item: Products) => (
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
      </Container>
    </Fragment>
  );
};
