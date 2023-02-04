import axios from "axios";
import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User_login } from "../../../interfaces/authentication";
import { requestLogin } from "../../../services/auth-slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authAxios } from "../../../utils/authentication/axiosAuth";
import jwt_decode from "jwt-decode";

import "./Login.css";
import { userActions } from "../../../stores/user-slice";
import {
  getAddressDeliveryById,
  getLikedProductById,
  getPurchasedProducts,
  getShoppingCartById,
} from "../../../services/apiRequest";
import LOGIN_FORM from "../../containers/login/Login_form";
import LOGIN_REGISTER from "../../containers/login/Login_Register";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export const Login = () => {
  const [typeInput, setTypeInput] = React.useState("");
  const [isClick, setIsClick] = React.useState(false);
  const [input, setInput] = React.useState<User_login>({ email: "", password: "", showPassword: false });
  const refInput = React.useRef<any>(null);
  const user = useAppSelector((state) => state.userSlice.user);
  const allProducts = useAppSelector((state) => state.productSlice.allProducts);

  const handleClickShowPassword = () => {
    setInput({ ...input, showPassword: !input.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };

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
      // console.log('error?')
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

  useOnClickOutside(refInput, () => setIsClick(false));

  useEffect(() => {
    let subscribe = true;
    if (user && subscribe) {
      getShoppingCartById(dispatch, user, allProducts);
      getLikedProductById(dispatch, user);
      getAddressDeliveryById(dispatch, user);
      getPurchasedProducts(dispatch, user);
      console.log("render");
      // localStorage.clear();
      localStorage.setItem("persist:root", "");
    }
    return () => {
      subscribe = false;
    };
  }, [user]);
  // const addedLiked = useAppSelector((state) => state.cartSlice.addedFavorite);
  // useEffect(() => {
  //   // console.log("addedLiked: ", addedLiked);
  //   // console.log("user: ", user);
  //   // console.log("localStorage: ", JSON.parse(localStorage.getItem("persist:root")!));
  // }, [user, addedLiked]);

  return (
    <Fragment>
      <LOGIN_FORM
        onSubmitHandler={onSubmitHandler}
        refInput={refInput}
        isClick={isClick}
        typeInput={typeInput}
        onClickHandler={onClickHandler}
        onChangeHandler={onChangeHandler}
        input={input}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
      />
      <LOGIN_REGISTER />
    </Fragment>
  );
};
