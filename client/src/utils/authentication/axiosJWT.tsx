import axios from "axios";
import React from "react";
import { authAxios } from "./axiosAuth";
import jwt_decode from "jwt-decode";
import { userActions } from "../../stores/user-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const AxiosJWT = () => {
  // const user = useAppSelector((state) => state.userSlice.user);
  // const accessToken = user?.accessToken!;
  // const dispatch = useAppDispatch();
  // const refreshToken = async () => {
  //   try {
  //     const response = await authAxios.post("/v1/auth/refresh");
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const axiosJWT = axios.create();
  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     let date = new Date();
  //     const decodedToken: any = jwt_decode(accessToken);
  //     if (decodedToken.exp < date.getTime() / 1000) {
  //       const data: any = await refreshToken();
  //       const refreshUser = {
  //         ...user,
  //         accessToken: data.accessToken,
  //       };
  //       dispatch(userActions.loginHandler(refreshUser));
  //       if (config !== undefined && config.headers !== undefined) {
  //         config.headers["authorization"] = "Bearer " + data.accessToken;
  //       }
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  // return axiosJWT;
};
