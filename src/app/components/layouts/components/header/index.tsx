import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import User from "./header-navtools/User";
import "./Header.css";
import HeaderCategory from "./header-category";
import ShoppingBasket from "./header-navtools/ShoppingBasket";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks";

const Header = () => {
  const [gender, setGender] = React.useState("zeny");

  const activeHandler = (type: string) => {
    setGender(type);
  };

  const bgColorChangeOnHoverCate = useAppSelector((state) => state.UISlice.bg_color);

  return (
    <div className="header w-full relative border-b border-[#d0d1d3]">
      <div className="mx-6 xl:mx-auto xl:my-0 lg:max-w-[1216px] lg:min-w-[943px] min-h-[96px]">
        <div
          className={
            "absolute top-0 left-0 h-[32px] w-full -z-10 transition-colors duration-[1.5s]  " +
            (bgColorChangeOnHoverCate ? "bg-[#cac9c9]" : "bg-[#efeff0]")
          }
        />
        <div className=" hidden lg:block h-[32px] ">
          <div className=" text-[12px]  text-[#666666] flex justify-between items-center h-full font-[700] ">
            <span className="">Nápověda a kontakt</span>
            <span className="">DOPRAVA A VRÁCENÍ ZDARMA*</span>
            <span className="">Vrácení zboží do 100 dní</span>
          </div>
        </div>
        <div className=" lg:px-2 bg-[#ffffff] text-[14px] ">
          <div className=" h-[60px] flex justify-between items-center ">
            {/* gender select start */}
            <ul className="hidden space-x-[8px] text-[16px] font-[700] lg:flex  ">
              <Link to="/damy-domovska-stranka">
                <li
                  onClick={() => activeHandler("zeny")}
                  className={"header_gender " + (gender === "zeny" ? "active_gender" : "")}
                >
                  Ženy
                </li>
              </Link>
              <Link to="/muzi">
                <li
                  onClick={() => activeHandler("muzi")}
                  className={"header_gender " + (gender === "muzi" ? "active_gender" : "")}
                >
                  Muži
                </li>
              </Link>
              <Link to="/deti">
                <li
                  onClick={() => activeHandler("deti")}
                  className={"header_gender " + (gender === "deti" ? "active_gender" : "")}
                >
                  Děti
                </li>
              </Link>
            </ul>
            {/* gender select end */}
            {/* logo start */}
            <div className="w-auto h-full cursor-pointer">
              <span className="">
                <img
                  className="h-full w-auto inline "
                  src="https://www.recenzer.cz/wp-content/uploads/2020/10/zalando.png"
                  alt="logo"
                />
              </span>
            </div>
            {/* logo end */}
            {/* navtools start */}
            <div className="relative flex text-[24px] space-x-[3px] ">
              <div className="navtools flex justify-center items-center">
                <span className="navtools_icons">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <div className="navtools_user">
                  <User />
                </div>
              </div>
              <div className=" relative flex justify-center items-center p-[10px] cursor-pointer ">
                <FontAwesomeIcon icon={faHeart} />
                <div className="absolute top-[5px] right-[3px] bg-[#ff6800] h-[16px] w-[16px] rounded-[50px] flex justify-center items-center ">
                  <span className="text-white leading-[1rem] text-[0.75rem]">4</span>
                </div>
              </div>
              <div className="relative navtools flex justify-center items-center ">
                <span className="navtools_icons">
                  <FontAwesomeIcon icon={faBasketShopping} />
                </span>
                <div className="absolute top-[5px] right-[3px] bg-[#ff6800] h-[16px] w-[16px] rounded-[50px] flex justify-center items-center ">
                  <span className="text-white leading-[1rem] text-[0.75rem]">4</span>
                </div>
                <div className="navtools_basket">
                  <ShoppingBasket />
                </div>
              </div>
            </div>
            {/* navtools end */}
          </div>
          {/* search start */}
          <div className=" ">
            <HeaderCategory />
          </div>
          {/* search end */}
        </div>
      </div>
    </div>
  );
};

export default Header;
