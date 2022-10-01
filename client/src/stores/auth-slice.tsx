import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { uriBase } from "../config/uriBase";
import { User_login, User_signup } from "../interfaces/authentication";
import { userActions } from "./user-slice";

// request login
export const requestLogin = async (dispatch: Dispatch, user: any, navigate: NavigateFunction, accessToken: string) => {
  try {
    const response = await axios.post(`${uriBase.server}/v1/auth/login`, user);
    // console.log(response.data);
    dispatch(userActions.loginHandler(response.data));
    if (response) {
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};

// request register
export const requestSignup = async (dispatch: Dispatch, user: User_signup, navigate: NavigateFunction) => {
  try {
    const response = await axios.post(`${uriBase.server}/v1/auth/register`, user);
    if (response) {
      navigate("/login");
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// request log out
export const requestLogout = async (dispatch: Dispatch, navigate: NavigateFunction, accessToken: string) => {
  const authAxios = axios.create({
    baseURL: uriBase.server,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  try {
    const response = await authAxios.post(`/v1/auth/logout`);
    dispatch(userActions.logoutHandler());
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
