import axios, { AxiosError } from "axios";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { uriBase } from "../config/uriBase";
import { User_signup } from "../interfaces/authentication";
import { authAxios } from "../utils/authentication/axiosAuth";
import { UIActions } from "../stores/UI-slice";
// import { AxiosJWT } from "../utils/authentication/axiosJWT";
import { userActions } from "../stores/user-slice";
// const axiosJWT = AxiosJWT();

// request login
export const requestLogin = (dispatch: Dispatch, user: any, navigate: NavigateFunction, accessToken: string) => {
  let response;
  try {
    dispatch(UIActions.loadingPage(true));
    setTimeout(async () => {
      const response = await authAxios.post(`/v1/auth/login`, user);
      dispatch(userActions.loginHandler(response.data));
      if (response) {
        navigate("/");
      }
      dispatch(UIActions.loadingPage(false));
    }, 1000);
    // console.log(response);
  } catch (error: any) {
    // console.log("error?2");
    // console.log(response);

    toast.error(error.response?.data.message);
  }
};

// request register
export const requestSignup = (dispatch: Dispatch, user: User_signup, navigate: NavigateFunction) => {
  const id = toast.loading("Please wait...");
  // try {
  dispatch(UIActions.loadingPage(true));
  setTimeout(async () => {
    await authAxios
      .post(`/v1/auth/register`, user)
      .then((res) => {
        setTimeout(() => {
          toast.update(id, { render: res.data.message, type: "success", isLoading: false, autoClose: 1500 });
        }, 1500);
      })
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 1500);
        dispatch(UIActions.loadingPage(false));
      })
      .catch((error) => {
        setTimeout(() => {
          toast.update(id, { render: error.response?.data.message, type: "error", isLoading: false, autoClose: 1500 });
        }, 1500);
      });
  }, 1000);
};

// request log out
export const requestLogout = (dispatch: Dispatch, navigate: NavigateFunction, accessToken: string) => {
  const authAxios = axios.create({
    baseURL: uriBase.server,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });
  let response;
  try {
    dispatch(UIActions.loadingPage(true));
    setTimeout(async () => {
      response = await authAxios.post(`/v1/auth/logout`);
      dispatch(userActions.logoutHandler());
      dispatch(UIActions.loadingPage(false));
    }, 1000);
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};
