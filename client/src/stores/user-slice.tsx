import { createSlice } from "@reduxjs/toolkit";

interface InitialState {}

const initialState: InitialState = {};

const userSLice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
});

export const userActions = userSLice.actions;

export default userSLice.reducer;
