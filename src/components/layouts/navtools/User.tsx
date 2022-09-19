import React, { Fragment } from "react";
import "./navtools.css";

const User = () => {
  return (
    <Fragment>
      <div className="absolute h-[300px] w-[331px] bg-white top-full right-[-1px] border border-black ">
        <ul className=" pt-[2px] relative">
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
        </ul>
      </div>
    </Fragment>
  );
};

export default User;
