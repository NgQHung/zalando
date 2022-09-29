import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productShoppingCart } from "../interfaces/ProductShoppingCart";

interface InitialState {
  addedShoppingCart: productShoppingCart[];
  addedFavorite: productShoppingCart[];
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
      const idProduct = action.payload.id;
      const existingProductIndex = state.addedShoppingCart.findIndex((product) => product.id === idProduct);
      const existingProduct = state.addedShoppingCart[existingProductIndex];
      let updateProduct;
      if (existingProduct) {
        const updatedProduct = {
          ...existingProduct,
          amount: existingProduct.amount + action.payload.amount,
        };
        updateProduct = [...state.addedShoppingCart];
        updateProduct[existingProductIndex] = updatedProduct;
        state.addedShoppingCart = updateProduct;
      } else {
        state.addedShoppingCart.push(action.payload);
      }
    },
    removeShoppingCartHandler(state, action) {
      const idProduct = action.payload.id;
      const existingProductIndex = state.addedShoppingCart.findIndex((product) => product.id === idProduct);
      const existingProduct = state.addedShoppingCart[existingProductIndex];
      let updateProduct;
      if (existingProduct.amount === 1) {
        updateProduct = state.addedShoppingCart.filter((product) => product.id !== idProduct);
        state.addedShoppingCart = updateProduct;
      } else {
        const updatedProduct = {
          ...existingProduct,
          amount: existingProduct.amount - 1,
        };

        updateProduct = [...state.addedShoppingCart];
        updateProduct[existingProductIndex] = updatedProduct;
        state.addedShoppingCart = updateProduct;
      }
    },
    addFavoriteHandler(state, action) {
      const idProduct = action.payload.id;
      const existingProductIndex = state.addedFavorite.findIndex((product) => product.id === idProduct);
      const existingProduct = state.addedFavorite[existingProductIndex];
      // let updateProduct
      if (existingProduct) {
        return;
      } else {
        state.addedFavorite = [...state.addedFavorite, action.payload];
      }
    },
  },
});

export const actionActions = actionSlice.actions;

export default actionSlice.reducer;
