import React, { Fragment, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { requestLogout } from "../../../../../../services/auth-slice";
import { refreshPage } from "../../../../../../utils/refreshPage";
import ButtonPrimary from "../../../../../components/UI/button/Button";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import "./navtools.css";

const User = () => {
  const user = useAppSelector((state) => state.userSlice.user) || JSON.parse(localStorage.getItem("User")!);
  const accessToken = user?.accessToken!;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    if (!user) return;
    requestLogout(dispatch, navigate, accessToken);
    localStorage.setItem("persist:root", "null");
    localStorage.setItem("User", "null");
    refreshPage();
  };

  return (
    <Fragment>
      <div className="bg-white border border-black z-[10000] ">
        <div className=" pt-[2px] relative ">
          {!user && (
            <div className=" text-[#ffff] text-center pt-4 pb-[13px] px-[10px] border_bottom">
              <Link to="/login">
                <ButtonPrimary className=" bg-[#1a1a1a] mb-[14px]">
                  <span>Přihlásit se</span>
                </ButtonPrimary>
              </Link>
              <Link to="/signup" className="text-[14px] text-[#1a1a1a] ml-[16px] whitespace-normal text-left">
                <button className="text-[#6328e0] affect_text mb-1 ">
                  <span>Zaregistrujte se hned teď</span>
                </button>{" "}
                - trvá to jen minutu.
              </Link>
            </div>
          )}

          <ul className=" mx-[26px]">
            <Link to="/myaccount">
              <li className="user_list">
                <span className="user_item">Váš přehled</span>
              </li>
            </Link>
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
          {user && (
            <div onClick={logoutHandler} className=" text-left pt-4 pb-[13px] px-[26px] border-t border-[#1a1a1a] ">
              <span className="text-[14px] affect_text">Nejste {user.firstName}? Odhlásit se</span>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default memo(User);
