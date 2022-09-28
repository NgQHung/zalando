import axios, { AxiosResponse } from "axios";
import { useAppDispatch } from "../app/hooks";
import { productActions } from "../stores/product-slice";

const options = {
  method: "GET",
  url: "https://asos2.p.rapidapi.com/products/v2/list",
  params: {
    store: "US",
    offset: "0",
    categoryId: "4209",
    limit: "48",
    country: "US",
    sort: "freshness",
    currency: "USD",
    sizeSchema: "US",
    lang: "en-US",
  },
  headers: {
    "X-RapidAPI-Key": "c30a5399bcmsh42dc8185eb498d0p148cd7jsn8b6acc1f7ea2",
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  },
};
export const FetchProduct = async () => {
  const response: AxiosResponse = await axios.request(options);
  const products = response.data.products;
  const productToShowHome = products.slice(0, 14);
  return productToShowHome;
};
