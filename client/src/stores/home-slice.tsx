import { createSlice } from "@reduxjs/toolkit";

// interface InitialState {
//   clickedProduct: string[];
// }

const initialState: any = {
  productToShowHome_1: [],
  productToShowHome_2: [],
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
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;
