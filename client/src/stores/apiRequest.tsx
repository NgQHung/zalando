import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { uriBase } from "../config/uriBase";
import { Products } from "../interfaces/Products";
import { productShoppingCart } from "../interfaces/ProductShoppingCart";
import { cartActions } from "./cart-slice";
// import { AxiosJWT } from "../utils/authentication/axiosJWT";
import { productActions } from "./product-slice";
import { UIActions } from "./UI-slice";
// import { UIActions } from "./UI-slice";
// import UISlice, { UIActions } from "./UI-slice";
// const axiosJWT = AxiosJWT();

export interface AddShoppingCart {
  id: number | undefined;
  brand: string | undefined;
  name: string | undefined;
  imageUrl: string | undefined;
  currentPrice: number | undefined;
  previousPrice: number | null | undefined;
  isFavorite: boolean;
  amount: number;
  size: string;
  totalProduct: number | undefined;
}

export interface User {
  accessToken: string;
  admin: string;
  email: string;
  firstName: string;
  _id: string;
}

// get all products
export const getProducts = async (dispatch: Dispatch) => {
  let response;
  try {
    dispatch(UIActions.loadingPage(true));
    setTimeout(async () => {
      response = await axios.get(`${uriBase.server}/products`);
      const allProducts = await response.data;
      const products_1 = allProducts.slice(0, 14);
      const newProducts_1 = products_1.map((product: Products) => {
        return { ...product, isFavorite: false };
      });
      const products_2 = allProducts.slice(15, 30);
      dispatch(
        productActions.productsHandler({ allProducts: allProducts, products_1: newProducts_1, products_2: products_2 })
      );
      dispatch(UIActions.loadingPage(false));
    }, 2000);
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};

// get detail selected product
export const getDetailProduct = async (dispatch: Dispatch, id: number) => {
  let response;
  try {
    dispatch(UIActions.loadingPage(true));
    setTimeout(async () => {
      response = await axios.get(`${uriBase.server}/product/${id}`);
      const detailProduct = response.data;
      dispatch(productActions.selectedProductHandler(detailProduct));
      dispatch(UIActions.loadingPage(false));
    }, 2000);
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};

export const postShoppingCartById = async (dispatch: Dispatch, user: any, data: productShoppingCart[]) => {
  // console.log(data);
  const authAxios = axios.create({
    baseURL: uriBase.server,
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
    withCredentials: true,
  });
  let response;
  try {
    response = await authAxios.post(`${uriBase.server}/v1/user/${user?._id}/shopping-cart`, { data: data });
  } catch (error: any) {
    toast.error(error.response?.data.message);

    // console.log(error);
  }
};
export const getShoppingCartById = async (dispatch: Dispatch, user: any) => {
  const authAxios = axios.create({
    baseURL: uriBase.server,
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
    withCredentials: true,
  });
  let response;

  try {
    dispatch(UIActions.loadingPage(true));
    setTimeout(async () => {
      response = await authAxios.get(`${uriBase.server}/v1/user/${user?._id}/shopping-cart/products`);
      dispatch(cartActions.getShoppingCart(response.data[0].data));
      dispatch(UIActions.loadingPage(false));
    }, 2000);
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};

export const postLikedProductById = async (dispatch: Dispatch, user: any, data: productShoppingCart[]) => {
  // console.log(data);
  const authAxios = axios.create({
    baseURL: uriBase.server,
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
    withCredentials: true,
  });

  let response;
  try {
    dispatch(UIActions.loadingPage(true));
    setTimeout(async () => {
      response = await authAxios.post(`${uriBase.server}/v1/user/${user?._id}/liked`, { data: data });
    }, 2000);
    dispatch(UIActions.loadingPage(false));
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};
export const getLikedProductById = async (dispatch: Dispatch, user: any) => {
  // console.log(data);
  const authAxios = axios.create({
    baseURL: uriBase.server,
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
    withCredentials: true,
  });
  let response;
  try {
    response = await authAxios.get(`${uriBase.server}/v1/user/${user?._id}/liked/products`);
    dispatch(cartActions.getLikedProduct(response.data[0].data));
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};
