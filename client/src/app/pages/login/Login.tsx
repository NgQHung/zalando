import axios from "axios";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { User_login } from "../../../interfaces/authentication";
import { requestLogin } from "../../../stores/auth-slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authAxios } from "../../../utils/authentication/axiosAuth";
import jwt_decode from "jwt-decode";

import "./Login.css";
import { userActions } from "../../../stores/user-slice";
import { getLikedProductById, getShoppingCartById } from "../../../stores/apiRequest";
import LOGIN_FORM from "../../containers/login/Login_form";
import LOGIN_REGISTER from "../../containers/login/Login_Register";

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
      <LOGIN_FORM
        onSubmitHandler={onSubmitHandler}
        refInput={refInput}
        isClick={isClick}
        typeInput={typeInput}
        onClickHandler={onClickHandler}
        onChangeHandler={onChangeHandler}
      />
      <LOGIN_REGISTER />
    </Fragment>
  );
};
