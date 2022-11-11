import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  methodPayment: string;
}

const initialState: InitialState = {
  methodPayment: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: initialState,
  reducers: {
    methodPaymentHandler(state, action) {
      state.methodPayment = action.payload;
    },
  },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;
