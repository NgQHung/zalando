import { createSlice } from "@reduxjs/toolkit";
import { AddressDelivery } from "../interfaces/addressDelivery";

interface InitialState {
  methodPayment: string;
  addressDelivery: AddressDelivery | null;
  updateAddressDelivery: boolean;
}

const initialState: InitialState = {
  methodPayment: "",
  addressDelivery: null,
  updateAddressDelivery: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: initialState,
  reducers: {
    methodPaymentHandler(state, action) {
      state.methodPayment = action.payload;
    },
    addressDeliveryHandler(state, action) {
      state.addressDelivery = action.payload;
    },
    updateAddressDeliveryHandler(state, action) {
      state.updateAddressDelivery = action.payload;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;
