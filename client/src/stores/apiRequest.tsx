import axios from "axios";
import { Dispatch } from "redux";
import { uriBase } from "../config/uriBase";
import { productActions } from "./product-slice";

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

export const getDetailProduct = async (dispatch: Dispatch, id: string) => {
  try {
    const response = await axios.get(`${uriBase.server}/product/${id}`);
    const detailProduct = response.data;
    const firstImage = detailProduct.media.images[0].url;
    console.log(firstImage);
    dispatch(productActions.selectedProductHandler({ detailProduct: detailProduct, firstImage: firstImage }));
  } catch (error) {
    console.log(error);
  }
};
