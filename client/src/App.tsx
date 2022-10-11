import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./app/components/layouts/DefaultLayout";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { publicRoutes } from "./app/routes";
import { actionActions } from "./stores/action-slice";
import { getProducts } from "./stores/apiRequest";
import { loadingHandler } from "./stores/UI-slice";
import { NoFooterHeaderLayout } from "./app/components/layouts/NoFooter&HeaderLayout";

function App() {
  const dispatch = useAppDispatch();
  const addedShoppingCart = useAppSelector((state) => state.actionSlice.addedShoppingCart);
  const mobile_navbarActive = useAppSelector((state) => state.mobileSlice.navbarActive);

  React.useEffect(() => {
    try {
      getProducts(dispatch);
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    loadingHandler(dispatch, 300, "total");
    dispatch(actionActions.calculateTotals());
  }, [addedShoppingCart]);

  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, idx) => {
          let Layout: any = DefaultLayout;
          let LayoutMobile: any = NoFooterHeaderLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          // else if (mobile_navbarActive) {
          //   Layout = LayoutMobile;
          // }

          const PageComponent = route.component;

          const pathHome = "/damy-domovska-stranka/";

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
    </div>
  );
}

export default App;
