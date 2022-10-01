import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import actionSlice from "./action-slice";
import productSlice from "./product-slice";
import UISlice from "./UI-slice";
import userSlice from "./user-slice";

export const store = configureStore({
  reducer: {
    productSlice: productSlice,
    UISlice: UISlice,
    actionSlice: actionSlice,
    userSlice: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // [thunkMiddleware]
});
applyMiddleware(thunk);

export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// export declare const useDispatch: <
//     AppDispatch extends Dispatch<AnyAction> = Dispatch<AnyAction>
// >() => AppDispatch;

export default store;
