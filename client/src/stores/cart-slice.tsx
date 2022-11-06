import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { User } from "../app/containers/product/product_info/types/user";
import { ProductDetail } from "../interfaces/ProductDetail";
import { Products } from "../interfaces/Products";
import { AfterRefresh } from "../utils/pageIsRefreshed";

export interface UserShoppingCart {
  data: {
    id: number;
    brand: string;
    name: string;
    imageUrl: string;
    currentPrice: number;
    previousPrice?: number;
    amount: number;
    size: string;
    totalProduct: number;
  }[];
}

interface InitialState {
  addedShoppingCart: Products[];
  userAddedShoppingCart: UserShoppingCart[];
  addedFavorite: Products[];
  initialAmount: number;
  totalProduct: number;
  total: number;
  removedProductNotification: boolean;
}

const initialState: InitialState = {
  addedShoppingCart: [],
  userAddedShoppingCart: [],
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
    getShoppingCart(state, action) {
      // if(state.)
      state.addedShoppingCart = action.payload;
    },
    getLikedProduct(state, action) {
      state.addedFavorite = action.payload;
    },
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
          totalProduct: existingProductWithSize.totalProduct! + existingProductWithSize?.price?.current?.value,
        };
        updateProduct = [...state.addedShoppingCart];
        updateProduct[existingProductWithSizeIndex] = updatedProduct;
        state.addedShoppingCart = updateProduct;
      } else {
        state.addedShoppingCart.push(action.payload);
      }
      toast.success("Your product is added successfully");
    },
    removeShoppingCartHandler(state, action) {
      const idProduct = action.payload.id;
      const sizeProduct = action.payload.size;
      const existingProductWithSizeIndex = state.addedShoppingCart.findIndex((product) => {
        return product.id === idProduct && product.size === sizeProduct;
      });
      const existingProductWithSize: Products = state.addedShoppingCart[existingProductWithSizeIndex];

      let updateProduct;

      if (existingProductWithSize?.amount === 1) {
        state.removedProductNotification = true;
        updateProduct = state.addedShoppingCart.filter((product) => {
          return product.id !== idProduct || product.size !== sizeProduct;
        });
        // console.log("render");
        state.addedShoppingCart = updateProduct;
      } else {
        const updatedProduct: Products = {
          ...existingProductWithSize,
          amount: existingProductWithSize.amount! - 1,
          totalProduct: existingProductWithSize.totalProduct! - existingProductWithSize?.price?.current?.value,
        };

        updateProduct = [...state.addedShoppingCart];
        updateProduct[existingProductWithSizeIndex] = updatedProduct;
        state.addedShoppingCart = updateProduct;
      }
    },
    calculateTotals(state) {
      let total = 0;
      if (state.addedShoppingCart) {
        state.addedShoppingCart.forEach((item: Products) => {
          total += item.amount! * item?.price?.current?.value;
        });
      }

      state.total = total;
    },
    notificationRemovedProduct(state, action) {
      state.removedProductNotification = action.payload;
    },
    addFavoriteHandler(state, action) {
      const idProduct = action.payload?.id;
      const existingProductIndex = state.addedFavorite.findIndex((product: Products) => product?.id === idProduct);
      const existingProduct = state.addedFavorite[existingProductIndex];
      if (existingProduct) {
        return;
      } else {
        state.addedFavorite = [...state.addedFavorite, action.payload];
      }
      toast.success("Your product is added successfully");
    },
    removeFavorite(state, action) {
      console.log(action.payload);
      const idProduct = action?.payload?.id;
      let updateAddedFavorite;
      const existingProductIndex = state.addedFavorite.findIndex((item) => item?.id === idProduct);
      const existingProduct = state.addedFavorite[existingProductIndex];
      if (existingProduct) {
        const newUpdateAddedFavorite = [...state.addedFavorite];
        updateAddedFavorite = newUpdateAddedFavorite.filter((item) => item?.id !== idProduct);
        state.addedFavorite = updateAddedFavorite;
      } else return;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
