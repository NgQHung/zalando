import React, { Fragment } from "react";
import "./navtools.css";

const User = () => {
  return (
    <Fragment>
      <div className="absolute w-[296px] bg-white top-full right-[-1px] border border-black z-50 ">
        {/* <ul className=" pt-[2px] relative">
          <div className="mx-[26px]">
            <li className="user_list">
              <span className="user_item">Váš přehled</span>
            </li>
            <li className="user_list">
              <span className="user_item">Objednávky</span>
            </li>
            <li className="user_list">
              <span className="user_item">Vrátit zboží</span>
            </li>
            <li className="user_list">
              <span className="user_item">Vaše velikosti</span>
            </li>
            <li className="user_list">
              <span className="user_item">Nápověda a kontakt</span>
            </li>
          </div>
          <li className="user_list_last ">
            <span className="user_item">Nejste Hung? Odhlásit se</span>
          </li>
        </ul> */}
        <div className=" pt-[2px] relative ">
          <div className=" text-[#ffff] text-center pt-4 pb-[13px] px-[10px] border_bottom">
            <p className="p-[12px] bg-[#1a1a1a] mb-[14px]">Přihlásit se</p>
            <p className="text-[14px] text-[#1a1a1a] ml-[16px] whitespace-normal text-left">
              <span className="text-[#6328e0] font-[700] affect_text mb-1 ">Zaregistrujte se hned teď</span> - trvá to
              jen minutu.
            </p>
          </div>
          <ul className="mx-[26px]">
            <li className="user_list">
              <span className="user_item">Váš přehled</span>
            </li>
            <li className="user_list">
              <span className="user_item">Objednávky</span>
            </li>
            <li className="user_list">
              <span className="user_item">Vrátit zboží</span>
            </li>
            <li className="user_list">
              <span className="user_item">Nápověda a kontakt</span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
