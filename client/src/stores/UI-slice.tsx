import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  bg_color: boolean;
  // hideAllElement: boolean;
}

const initialState: InitialState = {
  bg_color: false,
  // hideAllElement: false,
};

const UISLice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    headerChangeBgOnHoverHandler(state, action) {
      state.bg_color = action.payload;
    },
  },
});

export const UIActions = UISLice.actions;

export default UISLice.reducer;
