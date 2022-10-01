import axios from "axios";
import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./app/components/layouts/DefaultLayout";
import { useAppDispatch } from "./app/hooks";
import { publicRoutes } from "./app/routes";
import { getProducts } from "./stores/apiRequest";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    try {
      getProducts(dispatch);
    } catch (error) {
      console.log(error);
    }
  }, []);
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
