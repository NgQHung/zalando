import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { uriBase } from "../config/uriBase";
import { User_signup } from "../interfaces/authentication";
import { authAxios } from "../utils/authentication/axiosAuth";
// import { AxiosJWT } from "../utils/authentication/axiosJWT";
import { userActions } from "./user-slice";
// const axiosJWT = AxiosJWT();

// request login
export const requestLogin = async (dispatch: Dispatch, user: any, navigate: NavigateFunction, accessToken: string) => {
  let response;
  try {
    response = await authAxios.post(`/v1/auth/login`, user);
    dispatch(userActions.loginHandler(response.data));
    if (response) {
      navigate("/");
    }
    console.log(response);
    // toast.success(response?.data);
  } catch (error) {
    // console.log(error);
    toast.error(response?.data);
  }
};

// request register
export const requestSignup = async (dispatch: Dispatch, user: User_signup, navigate: NavigateFunction) => {
  let response;
  try {
    response = await axios.post(`/v1/auth/register`, user);
    if (response) {
      navigate("/login");
    }
    // toast.success(response?.data);
  } catch (error) {
    // console.log(error);
    toast.error(response?.data);
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
  let response;
  try {
    response = await authAxios.post(`/v1/auth/logout`);
    dispatch(userActions.logoutHandler());
  } catch (error) {
    // console.log(error);
    toast.error(response?.data);
  }
};
