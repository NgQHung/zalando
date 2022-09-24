import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productSlice from "./product-slice";

export const store = configureStore({
  reducer: {
    productSlice: productSlice,
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
