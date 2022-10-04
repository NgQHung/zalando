import axios from "axios";
import { Dispatch } from "redux";
import { uriBase } from "../config/uriBase";
// import { AxiosJWT } from "../utils/authentication/axiosJWT";
import { productActions } from "./product-slice";
import UISlice, { UIActions } from "./UI-slice";
// const axiosJWT = AxiosJWT();

// get all products
export const getProducts = async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`${uriBase.server}/products`);
    const allProducts = await response.data;
    const products_1 = allProducts.slice(0, 14);
    const products_2 = allProducts.slice(15, 30);
    dispatch(
      productActions.productsHandler({ allProducts: allProducts, products_1: products_1, products_2: products_2 })
    );
  } catch (error) {
    console.log(error);
  }
};

// get detail selected product
export const getDetailProduct = async (dispatch: Dispatch, id: string) => {
  try {
    const response = await axios.get(`${uriBase.server}/product/${id}`);
    const detailProduct = response.data;
    dispatch(productActions.selectedProductHandler(detailProduct));
  } catch (error) {
    console.log(error);
  }
};
