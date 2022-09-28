import { createSlice } from "@reduxjs/toolkit";

// interface InitialState {
//   clickedProduct: string[];
// }

const initialState: any = {
  clickedProduct: {},
  selectedId: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    selectedProductHandler(state, action) {
      state.clickedProduct = action.payload;
    },
    selectedIdHandler(state, action) {
      state.selectedId = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
