import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  methodPayment: string;
  addressDelivery: {
    firstName: string;
    lastName: string;
    address: string;
    infoDelivery: string;
    psc: number | "" | null;
    city: string;
  };
}

const initialState: InitialState = {
  methodPayment: "",
  addressDelivery: {
    firstName: "",
    lastName: "",
    address: "",
    infoDelivery: "",
    psc: null,
    city: "",
  },
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
  },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;
