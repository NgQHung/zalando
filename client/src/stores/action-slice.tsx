import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productShoppingCart } from "../interfaces/ProductShoppingCart";

interface InitialState {
  addedShoppingCart: productShoppingCart[];
  addedFavorite: [];
}

const initialState: InitialState = {
  addedShoppingCart: [],
  addedFavorite: [],
};

const actionSlice = createSlice({
  name: "action",
  initialState: initialState,
  reducers: {
    addShoppingCartHandler(state, action) {
      state.addedShoppingCart.push(action.payload);
    },
    addedFavoriteHandler(state, action) {},
  },
});

export const actionActions = actionSlice.actions;

export default actionSlice.reducer;
