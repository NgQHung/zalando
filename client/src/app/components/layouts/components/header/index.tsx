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
  const addedShoppingCart = useAppSelector((state) => state.actionSlice.addedShoppingCart);
  const addedFavorite = useAppSelector((state) => state.actionSlice.addedFavorite);
  const lengthAddedShoppingCart = addedShoppingCart.length;
  const lengthAddedFavorite = addedFavorite.length;

  const activeHandler = (type: string) => {
    setGender(type);
  };

  const bgColorChangeOnHoverCate = useAppSelector((state) => state.UISlice.bg_color);

  return (
    <div className="relative border-b border-[#d0d1d3]">
      <div className=" min-h-[96px]">
        <div className=" hidden lg:block ">
          <div
            className={
              " text-[12px] text-[#666666]   font-[700] transition-colors duration-[1.5s] " +
              (bgColorChangeOnHoverCate ? "bg-[#cac9c9]" : "bg-[#efeff0]")
            }
          >
            <div className="flex justify-between h-[32px]  items-center mx-6 xl:mx-auto xl:my-0 lg:max-w-[1216px] lg:min-w-[943px]">
              <span className="">Nápověda a kontakt</span>
              <span className="">DOPRAVA A VRÁCENÍ ZDARMA*</span>
              <span className="">Vrácení zboží do 100 dní</span>
            </div>
          </div>
        </div>
        <div className=" lg:px-2 bg-[#ffffff] text-[14px] lg:mx-6 xl:mx-auto xl:my-0 lg:max-w-[1216px] lg:min-w-[943px] ">
          <div className="pt-[8px] h-[60px] flex items-center w-full ">
            {/* gender select start */}
            <ul className="hidden space-x-[8px] basis-1/3 max-w-1/3 text-[16px] font-[700] lg:flex  ">
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
            <div className="basis-1/2 max-w-1/2 pl-[17px] lg:flex lg:justify-center lg:basis-1/3 lg:max-w-1/3  ">
              <img
                className="w-[120px] object-cover  "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Zalando_logo.svg/2560px-Zalando_logo.svg.png"
                alt="logo"
              />
            </div>
            {/* logo end */}
            {/* navtools start */}
            <div className="relative basis-1/2 max-w-1/2 lg:basis-1/3 lg:max-w-1/3 flex text-[24px] space-x-[3px] justify-end ">
              <div className="navtools flex justify-center items-center">
                <FontAwesomeIcon icon={faUser} className="h-5 w-5 object-cover" />
                <div className="navtools_user">
                  <User />
                </div>
              </div>
              <div className=" relative flex justify-center items-center p-[10px] cursor-pointer ">
                <FontAwesomeIcon icon={faHeart} className="h-5 w-5 object-cover" />
                <div className="absolute top-[5px] right-[3px] bg-[#ff6800] h-[16px] w-[16px] rounded-[50px] flex justify-center items-center ">
                  <span className="text-white leading-[1rem] text-[0.75rem]">{lengthAddedFavorite}</span>
                </div>
              </div>
              <div className="relative navtools flex justify-center items-center ">
                <FontAwesomeIcon icon={faBasketShopping} className="h-5 w-5 object-cover" />
                <div className="absolute top-[5px] right-[3px] bg-[#ff6800] h-[16px] w-[16px] rounded-[50px] flex justify-center items-center ">
                  <span className="text-white leading-[1rem] text-[0.75rem]">{lengthAddedShoppingCart}</span>
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
