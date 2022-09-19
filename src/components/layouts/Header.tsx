import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faBasketShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import User from "./navtools/User";
import "./Header.css";
import HeaderCategory from "./HeaderCategory";

const Header = () => {
  return (
    <div className="header w-full relative">
      <div className="mx-[152px] max-w-[1216px]">
        <div className="absolute top-0 left-0 h-[32px] w-full -z-10 bg-[#efeff0]" />
        <div className=" h-[32px] ">
          <div className=" text-[12px]  text-[#666666] flex justify-between items-center h-full font-[700] ">
            {/* <div className=""> */}
            <span className="">Nápověda a kontakt</span>
            <span className="">DOPRAVA A VRÁCENÍ ZDARMA*</span>
            <span className="">Vrácení zboží do 100 dní</span>
            {/* </div> */}
          </div>
        </div>
        <div className="w-full h-[96px] bg-[#ffffff] text-[14px] ">
          <div className=" h-[60px] flex justify-between items-center">
            <div className="space-x-[8px] text-[16px] font-[700]  ">
              <span className="px-[6px] py-[8px] bg-[#1a1a1a] text-[#ffffff] cursor-pointer hover:bg-[#efeff0] ">
                Ženy
              </span>
              <span className="px-[6px] py-[8px]  text-[#1a1a1a]  cursor-pointer hover:bg-[#efeff0]">Muži</span>
              <span className="px-[6px] py-[8px]  text-[#1a1a1a] cursor-pointer hover:bg-[#efeff0]">Děti</span>
            </div>
            <div className="w-auto h-full cursor-pointer">
              <span className="">
                <img
                  className="h-full w-auto inline "
                  src="https://www.recenzer.cz/wp-content/uploads/2020/10/zalando.png"
                  alt="logo"
                />
              </span>
            </div>
            <div className="relative flex text-[24px] space-x-[3px] ">
              <div className="navtools flex justify-center items-center">
                <span className="navtools_icons">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <div className="navtools_user">
                  <User />
                </div>
              </div>
              <div className=" flex justify-center items-center p-[10px] cursor-pointer ">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="navtools flex justify-center items-center ">
                <span className="navtools_icons">
                  <FontAwesomeIcon icon={faBasketShopping} />
                </span>
                <div className="navtools_user">
                  <User />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[36px] flex items-center justify-between text-[16px] ">
            <div className="w-[900px]">
              <ul className="flex justify-between items-center text-[0.875rem] ">
                <li className="navbar_list py-[10px] pr-[8px]  ">
                  <span className="navbar_item">Get the Look</span>
                </li>
                <li className=" navbar_list py-[10px] px-[8px] font-[400] inline-block ">
                  <span className="navbar_item">Novinky</span>
                </li>
                <li className=" navbar_list py-[10px] px-[8px] font-[400] inline-block ">
                  <span className="navbar_item">Oblečení</span>
                </li>
                <li className=" navbar_list py-[10px] px-[8px] font-[400] inline-block ">
                  <span className="navbar_item">Obuv</span>
                </li>
                <li className=" navbar_list py-[10px] px-[8px] font-[400] inline-block ">
                  <span className="navbar_item">Sport</span>
                </li>
                <li className=" navbar_list py-[10px] px-[8px] font-[400] inline-block ">
                  <span className="navbar_item">Streetwear</span>
                </li>
                <li className=" navbar_list py-[10px] px-[8px] font-[400] inline-block ">
                  <span className="navbar_item">Doplňky</span>
                </li>
                <li className=" navbar_list py-[10px] px-[8px] font-[400] inline-block ">
                  <span className="navbar_item">Designer</span>
                </li>
                <li className=" navbar_list py-[10px] px-[8px] font-[400] inline-block ">
                  <span className="navbar_item">Značky</span>
                </li>
                <li className=" navbar_list py-[10px] px-[8px] font-[400] inline-block ">
                  <span className="navbar_item">Výprodej %</span>
                </li>
                <li className=" navbar_list py-[10px] px-[8px] font-[400] inline-block ">
                  <span className="navbar_item">Pre-owned</span>
                </li>
              </ul>
            </div>
            <div className="header_search ">
              <div className="flex items-center  w-[288px] h-[35px] text-[#1a1a1a] tracking-[0.5px]  bg-[#efeff0] ">
                <div className="w-[50px] text-center ">
                  <span className="text-[18px] ">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </div>
                <div className="w-[238px] h-full ">
                  <input
                    className="bg-transparent h-full w-full py-[6px] outline-none text-[14px] "
                    type="text"
                    placeholder="Hledat"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_category">
        <HeaderCategory />
      </div>
    </div>
  );
};

export default Header;
