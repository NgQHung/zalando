import { createSlice, current } from "@reduxjs/toolkit";
import { productShoppingCart } from "../interfaces/ProductShoppingCart";

interface InitialState {
  addedShoppingCart: productShoppingCart[];
  addedFavorite: productShoppingCart[];
  initialAmount: number;
  totalProduct: number;
  total: number;
}

const initialState: InitialState = {
  addedShoppingCart: [],
  addedFavorite: [],
  initialAmount: 0,
  totalProduct: 0,
  total: 0,
};

const actionSlice = createSlice({
  name: "action",
  initialState: initialState,
  reducers: {
    addShoppingCartHandler(state, action) {
      const idProduct = action.payload.id;
      const existingProductIndex = state.addedShoppingCart.findIndex((product) => product.id === idProduct);
      const existingProduct = state.addedShoppingCart[existingProductIndex];
      let existingSizeProduct = false;
      // console.log(action.payload.size);
      let updateProduct;
      if (existingProduct) {
        existingSizeProduct = existingProduct.size === action.payload.size;
        console.log(existingSizeProduct);
        console.log(existingProduct.size);
        console.log(action.payload.size);
        if (existingSizeProduct) {
          const updatedProduct = {
            ...existingProduct,
            amount: existingProduct.amount + action.payload.amount,
            totalProduct: existingProduct.totalProduct + existingProduct.currentPrice,
          };
          updateProduct = [...state.addedShoppingCart];
          updateProduct[existingProductIndex] = updatedProduct;
          state.addedShoppingCart = updateProduct;
        } else {
          state.addedShoppingCart.push(action.payload);
        }
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
          totalProduct: existingProduct.totalProduct - existingProduct.currentPrice,
        };

        updateProduct = [...state.addedShoppingCart];
        updateProduct[existingProductIndex] = updatedProduct;
        state.addedShoppingCart = updateProduct;
      }
    },
    calculateTotals(state) {
      let amount = 0;
      let total = 0;
      state.addedShoppingCart.forEach((item) => {
        amount += item.amount;
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
