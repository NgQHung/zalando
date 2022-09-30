import { createSlice } from "@reduxjs/toolkit";

interface InitialState {}

const initialState: InitialState = {};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
