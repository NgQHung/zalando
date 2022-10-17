import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { requestLogout } from "../../../../../../stores/auth-slice";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import "./navtools.css";

const User = () => {
  const user = useAppSelector((state) => state.userSlice.user);
  const accessToken = user?.accessToken!;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    if (!user) return;
    requestLogout(dispatch, navigate, accessToken);
    navigate("");
  };

  return (
    <Fragment>
      <div className="bg-white border border-black z-50 ">
        <div className=" pt-[2px] relative ">
          {!user && (
            <div className=" text-[#ffff] text-center pt-4 pb-[13px] px-[10px] border_bottom">
              <Link to="/login">
                <p className="p-[12px] cursor-pointer bg-[#1a1a1a] mb-[14px]">Přihlásit se</p>
              </Link>
              <Link to="/signup" className="text-[14px] text-[#1a1a1a] ml-[16px] whitespace-normal text-left">
                <span className="text-[#6328e0] font-[700] affect_text mb-1 ">Zaregistrujte se hned teď</span> - trvá to
                jen minutu.
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

export default User;
