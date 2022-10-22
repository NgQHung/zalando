import React, { Fragment, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./app/layouts/DefaultLayout";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { publicRoutes } from "./app/routes";
import { cartActions } from "./stores/cart-slice";
import { getProducts } from "./stores/apiRequest";
import { UIActions } from "./stores/UI-slice";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useAppDispatch();
  const addedShoppingCart = useAppSelector((state) => state.cartSlice.addedShoppingCart);

  useEffect(() => {
    try {
      getProducts(dispatch);
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

          const pathHome = "/home-page";

          return (
            <Route
              key={idx}
              element={
                route.redirect ? (
                  <Navigate to={pathHome} />
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
