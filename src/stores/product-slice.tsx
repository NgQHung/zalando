import { createSlice } from "@reduxjs/toolkit";

// interface InitialState {
//   clickedProduct: string[];
// }

const initialState: any = {
  clickedProduct: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    selectedProductHandler(state, action) {
      state.clickedProduct = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
