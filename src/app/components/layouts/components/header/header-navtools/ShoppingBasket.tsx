import React, { Fragment } from "react";
import "./navtools.css";

const ShoppingBasket = () => {
  return (
    <Fragment>
      <div className="absolute w-[336px] bg-white top-full right-[-1px] border border-black z-50 ">
        <div className="text-center">
          <div className="mt-[24px] text-[16px] font-[700]">
            <p>VÁŠ NÁKUPNÍ KOŠÍK JE PRÁZDNÝ</p>
          </div>
          <div className="px-[24px] text-[12px]">
            <p>Jděte a splňte si své módní sny a touhy.</p>
          </div>
        </div>
        <div className="bg-[#eeee] text-[#1a1a1a] w-full h-full text-center">
          <div className="pt-[36px] pb-[23px] px-[20px]  ">
            <div className="text-[16px] font-[700]">
              <p>NEVÍTE, KDE ZAČÍT?</p>
            </div>
            <div className="effect_bg relative text-[12px] mt-[16px] border border-[#1a1a1a] ">
              <div className="z-50">
                <button className="py-[8px] px-[14px] font-[700]">
                  <span className=" relative z-50">Podívejte se, co je nového</span>
                </button>
              </div>
              {/* <div className="basket_layer absolute z-40" /> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShoppingBasket;
