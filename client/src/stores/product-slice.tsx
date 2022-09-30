import { createSlice } from "@reduxjs/toolkit";
import { Idata } from "../app/pages/muzi";
import { ProductDetail } from "../interfaces/ProductDetail";
import { Products } from "../interfaces/Products";

interface InitialState {
  allProducts: Products[]; // all products
  products_1: Products[]; // products to show 2
  products_2: Products[]; // products to show 2
  selectedProduct: ProductDetail | null; // detail selected product
  firstImage: string;
  selectedId: any;
}

const initialState: InitialState = {
  allProducts: [],
  products_1: [],
  products_2: [],
  selectedProduct: null,
  firstImage: "",
  selectedId: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    productsHandler(state, action) {
      state.allProducts = action.payload.allProducts;
      state.products_1 = action.payload.products_1;
      state.products_2 = action.payload.products_2;
    },
    selectedProductHandler(state, action) {
      state.selectedProduct = action.payload.detailProduct;
      state.firstImage = action.payload.firstImage;
    },
    selectedIdHandler(state, action) {
      state.selectedId = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
