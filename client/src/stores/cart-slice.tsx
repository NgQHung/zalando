import { createSlice } from "@reduxjs/toolkit";
import { productShoppingCart } from "../interfaces/ProductShoppingCart";

interface InitialState {
  addedShoppingCart: productShoppingCart[];
  addedFavorite: productShoppingCart[];
  initialAmount: number;
  totalProduct: number;
  total: number;
  removedProductNotification: boolean;
}

const initialState: InitialState = {
  addedShoppingCart: [],
  addedFavorite: [],
  initialAmount: 0,
  totalProduct: 0,
  total: 0,
  removedProductNotification: false,
};

// const MyContext = createContext(initialState);

const cartSlice = createSlice({
  name: "Shopping cart",
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
      // console.log(state.addedShoppingCart);
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
        state.removedProductNotification = true;
        updateProduct = state.addedShoppingCart.filter((product) => {
          return product.id !== idProduct || product.size !== sizeProduct;
        });
        // console.log("render");
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
      // console.log(state.addedShoppingCart);
    },
    calculateTotals(state) {
      let total = 0;
      state.addedShoppingCart.forEach((item) => {
        total += item.amount * item.currentPrice;
      });
      state.total = total;
    },
    notificationRemovedProduct(state, action) {
      state.removedProductNotification = action.payload;
    },
    addFavoriteHandler(state, action) {
      // console.log(action.payload);
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
    removeFavorite(state, action) {
      const idProduct = action?.payload?.id;
      let updateAddedFavorite;
      const existingProductIndex = state.addedFavorite.findIndex((item) => item.id === idProduct);
      const existingProduct = state.addedFavorite[existingProductIndex];
      if (existingProduct) {
        const newUpdateAddedFavorite = [...state.addedFavorite];
        updateAddedFavorite = newUpdateAddedFavorite.filter((item) => item.id !== idProduct);
        state.addedFavorite = updateAddedFavorite;
      } else return;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
