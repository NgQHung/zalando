import { faEnvelope, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User_login } from "../../../interfaces/authentication";
import { requestLogin } from "../../../stores/auth-slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authAxios } from "../../../utils/authentication/axiosAuth";
// import { AxiosJWT } from "../../../utils/authentication/axiosJWT";
import jwt_decode from "jwt-decode";

import "./Login.css";
import { userActions } from "../../../stores/user-slice";
import { getLikedProductById, getShoppingCartById } from "../../../stores/apiRequest";

export const Login = () => {
  const [typeInput, setTypeInput] = React.useState("");
  const [isClick, setIsClick] = React.useState(false);
  const [input, setInput] = React.useState<User_login>({ email: "", password: "" });
  const refInput = React.useRef<any>(null);
  const user = useAppSelector((state) => state.userSlice.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const accessToken = user?.accessToken;

  const onClickHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setIsClick(true);
    setTypeInput(e.currentTarget.name);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput({ ...input, [name]: value });
  };

  // refresh token
  const refreshToken = async () => {
    try {
      const response = await authAxios.post("/v1/auth/refresh");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const date = new Date();
      const decodedToken: any = jwt_decode(accessToken!);
      if (decodedToken.exp < date.getTime() / 1000) {
        const data: any = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(userActions.loginHandler(refreshUser));
        if (config !== undefined && config.headers !== undefined) {
          config.headers["authorization"] = "Bearer " + data.accessToken;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestLogin(dispatch, input, navigate, accessToken!);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", (e: any) => {
      if (!refInput?.current?.contains(e.currentTarget)) {
        setIsClick(false);
      }
    });
  }, []);

  React.useEffect(() => {
    let subscribe = true;
    if (user && subscribe) {
      getShoppingCartById(dispatch, user);
      getLikedProductById(dispatch, user);
    }
    return () => {
      subscribe = false;
    };
  }, [user]);

  return (
    <Fragment>
      <section className="login_section tex-center mx-auto my-0 border border-b-[#a0a0a0] pb-12 ">
        <div className="login_header_logo max-w-[1216px] mx-auto my-0 text-left px-6 pt-4 pb-6">
          <img
            className="h-[25px] object-cover leading-[25px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Zalando_logo.svg/2560px-Zalando_logo.svg.png"
            alt="logo"
          />
        </div>
        <div className="login_content max-w-[33.33333%] px-6 basis-1/3 mx-auto my-0">
          <p className="font-[700] text-[28px] ">Vítejte zpět</p>
          <form className="pt-6" onSubmit={onSubmitHandler}>
            <div className="email_input pb-6 flex flex-col ">
              <p
                ref={refInput}
                className={
                  " relative top-[1px] py-1 px-2 text-[12px] border border-t-[#1a1a1a] border-l-[#1a1a1a] border-r-[#1a1a1a] self-start " +
                  (isClick && typeInput === "email" ? "bg-[#1a1a1a] text-[#ffff] " : "")
                }
              >
                E-mailová adresa
              </p>
              <div className="outline_onHover flex items-center ">
                <FontAwesomeIcon icon={faEnvelope} className="h-6 py-2 pl-3" />
                <input
                  className="py-3 px-[10px] w-full h-full outline-none "
                  type="text"
                  placeholder="E-mailová adresa"
                  name="email"
                  onClick={onClickHandler}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="password_input pb-6 flex flex-col">
              <p
                ref={refInput}
                className={
                  " relative top-[1px] py-1 px-2 text-[12px] border border-t-[#1a1a1a] border-l-[#1a1a1a] border-r-[#1a1a1a] self-start " +
                  (isClick && typeInput === "password" ? "bg-[#1a1a1a] text-[#ffff] " : "")
                }
              >
                Heslo
              </p>
              <div className="outline_onHover flex items-center   ">
                <FontAwesomeIcon icon={faLock} className="h-6 py-2 pl-3" />
                <input
                  className="py-3 px-[10px] w-full h-full outline-none"
                  type="text"
                  placeholder="Heslo"
                  name="password"
                  onClick={onClickHandler}
                  onChange={onChangeHandler}
                />
                <FontAwesomeIcon icon={faEye} className="h- py-2 pr-3" />
              </div>
            </div>
            <button className="text-center p-4 bg-[#1a1a1a] text-[#ffff] w-full">
              <span className="text-4">Přihlásit se</span>
            </button>
          </form>
          <p className="affect_text mt-6 text-4 text-[#6328e0] font-[700]">Zapomněli jste své heslo?</p>
        </div>
      </section>
      <section className="signup_section  ">
        <div className="px-6 mt-12 mx-auto my-0 max-w-[33.3333%]  ">
          <p className="text-[28px] font-[700] mb-6">Jsem tu poprvé</p>
          <Link to="/signup">
            <div className="text-center p-3 border border-[#1a1a1a] text-4 hover:bg-[#1a1a1a] hover:text-[#ffff] ">
              <button className="">Zaregistrovat se</button>
            </div>
          </Link>
        </div>
        <div className=" p-6 text-center">
          <span className="affect_text text-[14px] p-4  ">Zásady ochrany soukromí</span>
          <span className="affect_text text-[14px] p-4 ">Podmínky použití</span>
          <span className="affect_text text-[14px] p-4 ">Právní informace</span>
          <div className="sign_logo pt-4 pb-12 ">
            <img
              className="h-8 object-cover relative left-1/2 translate-x-[-50%] "
              src="https://cdn-images-1.medium.com/max/1200/1*fYAdvwatzBRQ4S6l7rGnTQ.png"
              alt="logo"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
