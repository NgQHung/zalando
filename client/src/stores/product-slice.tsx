import { createSlice } from "@reduxjs/toolkit";
import { ProductDetail } from "../interfaces/ProductDetail";
import { Products } from "../interfaces/Products";

interface InitialState {
  allProducts: Products[]; // all products
  products_1: Products[]; // products to show 2
  products_2: Products[]; // products to show 2
  selectedProduct: ProductDetail; // detail selected product
  selectedId: number | null;
}

const initialState: InitialState = {
  allProducts: [],
  products_1: [],
  products_2: [],
  selectedProduct: {},
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
      state.selectedProduct = action.payload;
    },
    selectedIdHandler(state, action) {
      state.selectedId = action.payload;
      localStorage.setItem("selectedId", JSON.stringify(action.payload));
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
