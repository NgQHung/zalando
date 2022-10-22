import axios, { AxiosError } from "axios";
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
  // let response;
  try {
    const response = await authAxios.post(`/v1/auth/login`, user);
    dispatch(userActions.loginHandler(response.data));
    if (response) {
      navigate("/");
    }
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};

// request register
export const requestSignup = async (dispatch: Dispatch, user: User_signup, navigate: NavigateFunction) => {
  const id = toast.loading("Please wait...");
  try {
    const response = await authAxios.post(`/v1/auth/register`, user);
    if (response) {
      setTimeout(() => {
        toast.update(id, { render: response.data.message, type: "success", isLoading: false, autoClose: 1500 });
      }, 1500);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    // toast.success(response.data.message);
  } catch (error: any) {
    setTimeout(() => {
      toast.update(id, { render: error.response?.data.message, type: "error", isLoading: false, autoClose: 1500 });
    }, 1500);
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
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};
