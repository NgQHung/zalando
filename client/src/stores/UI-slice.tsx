import { createSlice, Dispatch } from "@reduxjs/toolkit";

interface InitialState {
  bg_color_shopping_cart: boolean;
  bg_color_header: boolean;
  loading__add: boolean;
  loading__total: boolean;
  dropdown_shoppingCart: boolean;
  dropdown_onHover_shoppingCart: boolean;
}

const initialState: InitialState = {
  bg_color_shopping_cart: false,
  bg_color_header: false,
  loading__add: false,
  loading__total: false,
  dropdown_shoppingCart: false,
  dropdown_onHover_shoppingCart: false,
};

const UISLice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    backgroundColor__shoppingCart(state, action) {
      state.bg_color_shopping_cart = action.payload;
    },
    backgroundColor__header(state, action) {
      state.bg_color_header = action.payload;
    },
    loading__total(state, action) {
      const { loading__total } = action.payload;
      state.loading__total = loading__total;
    },
    loading__add(state, action) {
      const { loading__add } = action.payload;
      state.loading__add = loading__add;
    },
    dropdown_shoppingCart(state, action) {
      state.dropdown_shoppingCart = action.payload;
    },
    dropdown_onHover(state, action) {
      state.dropdown_onHover_shoppingCart = action.payload;
    },
  },
});

export const loadingHandler = (dispatch: Dispatch, timeout: number, type: string) => {
  if (type === "total") {
    dispatch(UIActions.loading__total({ loading__total: true }));
    setTimeout(() => {
      dispatch(UIActions.loading__total({ loading__total: false }));
    }, timeout);
  }
  if (type === "add") {
    // console.log("hi");
    dispatch(UIActions.loading__add({ loading__add: true }));
    setTimeout(() => {
      dispatch(UIActions.loading__add({ loading__add: false }));
    }, timeout);
  }
};
export const backgroundColorHandler = (dispatch: Dispatch, timeout: number) => {
  setTimeout(() => {
    dispatch(UIActions.backgroundColor__shoppingCart(true));
  }, timeout / 3);
  setTimeout(() => {
    dispatch(UIActions.backgroundColor__shoppingCart(false));
  }, timeout);
};

export const dropdownShoppingCartHandler = (dispatch: Dispatch, timeout: number) => {
  dispatch(UIActions.dropdown_shoppingCart(true));
  setTimeout(() => {
    dispatch(UIActions.dropdown_shoppingCart(false));
  }, timeout);
};

export const UIActions = UISLice.actions;

export default UISLice.reducer;
