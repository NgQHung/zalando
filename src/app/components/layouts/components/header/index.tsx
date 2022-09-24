import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import User from "./header-navtools/User";
import "./Header.css";
import HeaderCategory from "./header-category";
import SubHeaderCategory from "./subHeader-category";
import ShoppingBasket from "./header-navtools/ShoppingBasket";
import { Link } from "react-router-dom";

const Header = () => {
  // const [active, setActive] = React.useState(false);
  const [gender, setGender] = React.useState("zeny");

  const activeHandler = (type: string) => {
    // if(type === gender) {
    //   setActive((prevState) => !prevState);
    // }
    setGender(type);
  };

  return (
    <div className="header w-full relative border-b border-[#d0d1d3]">
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
            <ul className="space-x-[8px] text-[16px] font-[700] flex  ">
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
          </div>
          <div className="h-[36px] flex items-center justify-between text-[16px]   ">
            <HeaderCategory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
