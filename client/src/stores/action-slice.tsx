import { createSlice, current, original } from "@reduxjs/toolkit";
import { productShoppingCart } from "../interfaces/ProductShoppingCart";

interface InitialState {
  addedShoppingCart: productShoppingCart[];
  addedFavorite: productShoppingCart[];
  initialAmount: number;
  totalProduct: number;
  total: number;
  arr: any[];
}

const initialState: InitialState = {
  addedShoppingCart: [],
  addedFavorite: [],
  initialAmount: 0,
  totalProduct: 0,
  total: 0,
  arr: [],
};

const actionSlice = createSlice({
  name: "action",
  initialState: initialState,
  reducers: {
    addShoppingCartHandler(state, action) {
      const idProduct = action.payload.id;
      const sizeProduct = action.payload.size;
      const existingProductWithSizeIndex = state.addedShoppingCart.findIndex((product) => {
        return product.id === idProduct && product.size === sizeProduct;
      });
      const existingProductWithSize = state.addedShoppingCart[existingProductWithSizeIndex];

      let updateProduct;
      if (existingProductWithSize) {
        const updatedProduct = {
          ...existingProductWithSize,
          amount: existingProductWithSize.amount + action.payload.amount,
          totalProduct: existingProductWithSize.totalProduct + existingProductWithSize.currentPrice,
        };
        updateProduct = [...state.addedShoppingCart];
        updateProduct[existingProductWithSizeIndex] = updatedProduct;
        state.addedShoppingCart = updateProduct;
      } else {
        state.addedShoppingCart.push(action.payload);
      }
    },
    removeShoppingCartHandler(state, action) {
      const idProduct = action.payload.id;
      const sizeProduct = action.payload.size;
      const existingProductWithSizeIndex = state.addedShoppingCart.findIndex((product) => {
        return product.id === idProduct && product.size === sizeProduct;
      });
      const existingProductWithSize = state.addedShoppingCart[existingProductWithSizeIndex];

      let updateProduct;
      if (existingProductWithSize.amount === 1) {
        updateProduct = state.addedShoppingCart.filter((product) => {
          return product.id !== idProduct || product.size !== sizeProduct;
        });

        state.addedShoppingCart = updateProduct;
      } else {
        const updatedProduct = {
          ...existingProductWithSize,
          amount: existingProductWithSize.amount - 1,
          totalProduct: existingProductWithSize.totalProduct - existingProductWithSize.currentPrice,
        };

        updateProduct = [...state.addedShoppingCart];
        updateProduct[existingProductWithSizeIndex] = updatedProduct;
        state.addedShoppingCart = updateProduct;
      }
    },
    calculateTotals(state) {
      let total = 0;
      state.addedShoppingCart.forEach((item) => {
        total += item.amount * item.currentPrice;
      });
      state.total = total;
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
