import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { AddressDelivery } from "../interfaces/addressDelivery";
import { Products } from "../interfaces/Products";
import { ShoppingProducts } from "../interfaces/ShoppingProducts";
import { cartActions } from "../stores/cart-slice";
import { checkoutActions } from "../stores/checkout-slice";
import { productActions } from "../stores/product-slice";
import { UIActions } from "../stores/UI-slice";
import { AfterRefresh } from "../utils/pageIsRefreshed";

export interface User {
  accessToken: string;
  admin: string;
  email: string;
  firstName: string;
  _id: string;
}

const uriBase = {
  server: "http://localhost:8080",
};

const uriHeroku = {
  server: "https://zalando-be.herokuapp.com",
};

// get all products
export const getProducts = async (dispatch: Dispatch) => {
  let response;
  console.log("getproduct");
  try {
    dispatch(UIActions.loadingPage(true));
    setTimeout(async () => {
      response = await axios.get(`${uriHeroku.server}/products`);
      const all = await response.data;
      const newAllProduct = all.map((item: Products) => {
        return { ...item, isFavorite: false };
      });
      let getCart;
      let addedFavorite;
      let map: any;
      let newAllProducts;
      if (JSON.parse(localStorage.getItem("persist:root")!)) {
        getCart = JSON.parse(localStorage.getItem("persist:root")!) || [];
        addedFavorite = JSON.parse(getCart.cartSlice).addedFavorite;
        map = new Map(addedFavorite.map((o: Products) => [o?.id, o]));
        // update data from server with data from local storage
        newAllProducts = [...newAllProduct].map((o) => Object.assign({}, o, map.get(o.id)));
      }
      const allProducts = newAllProducts ? newAllProducts : newAllProduct;
      const products_1 = newAllProducts ? newAllProducts.slice(0, 14) : allProducts.slice(0, 14);
      const products_2 = newAllProducts ? newAllProducts.slice(15, 30) : allProducts.slice(15, 30);
      dispatch(
        productActions.productsHandler({
          allProducts: allProducts,
          products_1: products_1,
          products_2: products_2,
        })
      );
      dispatch(UIActions.loadingPage(false));
    }, 1000);
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};

// get detail selected product
export const getDetailProduct = async (dispatch: Dispatch, id: number | null) => {
  let response;
  console.log("getdetail");
  let getSelectedId: number;
  if (AfterRefresh()) {
    getSelectedId = JSON.parse(localStorage.getItem("selectedId")!) || [];
    if (getSelectedId) {
      dispatch(productActions.selectedIdHandler(getSelectedId));
    }
  }

  try {
    dispatch(UIActions.loadingPage(true));
    setTimeout(async () => {
      response = await axios.get(`${uriHeroku.server}/product/${id ? id : getSelectedId}`);
      const detailProduct = response.data;
      dispatch(productActions.selectedProductHandler(detailProduct));
      dispatch(UIActions.loadingPage(false));
    }, 1000);
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};

export const postShoppingCartById = async (dispatch: Dispatch, user: any, data: Products[] | ShoppingProducts[]) => {
  const authAxios = axios.create({
    baseURL: uriHeroku.server,
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
    withCredentials: true,
  });
  let response;
  try {
    response = await authAxios.post(`${uriHeroku.server}/v1/user/${user?._id}/shopping-cart`, { data: data });
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};
export const getShoppingCartById = async (dispatch: Dispatch, user: any) => {
  const authAxios = axios.create({
    baseURL: uriHeroku.server,
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
    withCredentials: true,
  });
  let response;

  try {
    dispatch(UIActions.loadingPage(true));
    setTimeout(async () => {
      response = await authAxios.get(`${uriHeroku.server}/v1/user/${user?._id}/shopping-cart/products`);
      dispatch(cartActions.getShoppingCart(response.data[0].data));
      dispatch(UIActions.loadingPage(false));
    }, 1000);
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};

export const postLikedProductById = async (dispatch: Dispatch, user: any, data: Products[]) => {
  const authAxios = axios.create({
    baseURL: uriHeroku.server,
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
    withCredentials: true,
  });

  let response;
  try {
    response = await authAxios.post(`${uriHeroku.server}/v1/user/${user?._id}/liked`, { data: data });
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};
export const getLikedProductById = async (dispatch: Dispatch, user: any) => {
  const authAxios = axios.create({
    baseURL: uriHeroku.server,
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
    withCredentials: true,
  });
  let response;
  try {
    response = await authAxios.get(`${uriHeroku.server}/v1/user/${user?._id}/liked/products`);
    dispatch(cartActions.getLikedProduct(response.data[0].data));
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};

export const postAddressDelivery = async (dispatch: Dispatch, user: any, data: AddressDelivery) => {
  const authAxios = axios.create({
    baseURL: uriHeroku.server,
    headers: {
      Authorization: `Bearer ${user?.accessToken}`,
    },
    withCredentials: true,
  });

  let response;
  try {
    response = await authAxios.post(`${uriBase.server}/v1/user/${user?._id}/address-delivery`, data);
    dispatch(checkoutActions.addressDeliveryHandler(data));
  } catch (error: any) {
    toast.error(error.response?.data.message);
  }
};
