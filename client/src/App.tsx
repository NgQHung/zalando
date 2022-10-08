import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./app/components/layouts/DefaultLayout";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { publicRoutes } from "./app/routes";
import { actionActions } from "./stores/action-slice";
import { getProducts } from "./stores/apiRequest";
import { loadingHandler, UIActions } from "./stores/UI-slice";

function App() {
  const dispatch = useAppDispatch();
  // const loadingState = useAppSelector(state => state.UISlice.loading)
  const addedShoppingCart = useAppSelector((state) => state.actionSlice.addedShoppingCart);

  React.useEffect(() => {
    try {
      getProducts(dispatch);
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    // dispatch(UIActions.loadingHandler(true));
    // setTimeout(() => {
    // }, 300);
    // dispatch(UIActions.loadingHandler());
    loadingHandler(dispatch, 300, "total");
    dispatch(actionActions.calculateTotals());
  }, [addedShoppingCart]);

  // React.useEffect(() => {

  // },[])
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
