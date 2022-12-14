import React, { Fragment, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./app/layouts/DefaultLayout";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { privateRoutes, publicRoutes } from "./app/routes";
import { cartActions } from "./stores/cart-slice";
import { getProducts } from "./services/apiRequest";
import { UIActions } from "./stores/UI-slice";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useAppDispatch();
  const addedShoppingCart = useAppSelector((state) => state.cartSlice.addedShoppingCart);
  const addedFavoriteProducts = useAppSelector((state) => state.cartSlice.addedFavorite);
  const user = useAppSelector((state) => state.userSlice.user);

  useEffect(() => {
    try {
      getProducts(dispatch, user!, addedFavoriteProducts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    dispatch(UIActions.loading__total({ loading__total: true }));
    setTimeout(() => {
      dispatch(UIActions.loading__total({ loading__total: false }));
    }, 300);
    dispatch(cartActions.calculateTotals());
  }, [addedShoppingCart]);

  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, idx) => {
          let Layout: any = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          const PageComponent = route.component;

          const homePath = "/home-page";
          return (
            <Route
              key={idx}
              element={
                route.redirect ? (
                  <Navigate to={homePath} />
                ) : (
                  <Layout>
                    <PageComponent />
                  </Layout>
                )
              }
              path={route.path}
            />
          );
        })}
        {privateRoutes.map((route, idx) => {
          let Layout: any = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          const PageComponent = route.component;

          const loginPath = "/login";

          return (
            <Route
              key={idx}
              element={
                // !user ? (
                //   <Navigate to={loginPath} />
                // ) : (
                <Layout>
                  <PageComponent />
                </Layout>
                // )
              }
              path={route.path}
            />
          );
        })}
      </Routes>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        // limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
