import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../interfaces/Products";

interface InitialState {
  productToShowHome_1: Products[];
  productToShowHome_2: Products[];
  allProducts: Products[];
}

const initialState: InitialState = {
  productToShowHome_1: [],
  productToShowHome_2: [],
  allProducts: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    productToShowHomeHandler_1(state, action) {
      state.productToShowHome_1 = action.payload;
    },
    productToShowHomeHandler_2(state, action) {
      state.productToShowHome_2 = action.payload;
    },
    allProducts(state, action) {
      state.allProducts = action.payload;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;
