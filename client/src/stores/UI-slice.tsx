import { createSlice, Dispatch } from "@reduxjs/toolkit";

interface InitialState {
  bg_color: false;
  loading__add: boolean;
  loading__total: boolean;
}

const initialState: InitialState = {
  bg_color: false,
  loading__add: false,
  loading__total: false,
};

const UISLice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    backgroundColor(state, action) {
      state.bg_color = action.payload;
    },
    loading(state, action) {
      state.loading__total = action.payload.loading__total;
      state.loading__add = action.payload.loading__add;
    },
  },
});

export const loadingHandler = (dispatch: Dispatch, timeout: number, type: string) => {
  if (type === "total") {
    dispatch(UIActions.loading({ loading__total: true }));
    setTimeout(() => {
      dispatch(UIActions.loading({ loading__total: false }));
    }, timeout);
  }
  if (type === "add") {
    dispatch(UIActions.loading({ loading__add: true }));
    setTimeout(() => {
      dispatch(UIActions.loading({ loading__add: false }));
    }, timeout);
  }
};
export const backgroundColorHandler = (dispatch: Dispatch, timeout: number) => {
  setTimeout(() => {
    dispatch(UIActions.backgroundColor({ bg_color: false }));
  }, timeout);
  dispatch(UIActions.backgroundColor({ bg_color: true }));
};

export const UIActions = UISLice.actions;

export default UISLice.reducer;
