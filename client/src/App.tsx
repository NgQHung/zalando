import axios, { AxiosResponse } from "axios";
import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./app/components/layouts/DefaultLayout";
import { useAppDispatch } from "./app/hooks";
import { publicRoutes } from "./app/routes";
import { homeActions } from "./stores/home-slice";

// const options = {
//   method: "GET",
//   url: "https://asos2.p.rapidapi.com/products/v2/list",
//   params: {
//     store: "US",
//     offset: "0",
//     categoryId: "4209",
//     limit: "48",
//     country: "US",
//     sort: "freshness",
//     currency: "USD",
//     sizeSchema: "US",
//     lang: "en-US",
//   },
//   headers: {
//     "X-RapidAPI-Key": "c30a5399bcmsh42dc8185eb498d0p148cd7jsn8b6acc1f7ea2",
//     "X-RapidAPI-Host": "asos2.p.rapidapi.com",
//   },
// };
const options = {
  method: "GET",
  url: "https://asos2.p.rapidapi.com/products/v2/list",
  params: {
    store: "US",
    offset: "0",
    categoryId: "4209",
    limit: "48",
    country: "US",
    sort: "freshness",
    currency: "USD",
    sizeSchema: "US",
    lang: "en-US",
  },
  headers: {
    "X-RapidAPI-Key": "ef133ce62dmshd721312341522d5p1fab5ajsn971767a772cf",
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  },
};

function App() {
  const dispatch = useAppDispatch();

  const FetchProduct = async () => {
    const response: AxiosResponse = await axios.request(options);
    const products = response.data.products;
    const productToShowHome_1 = products.slice(0, 14);
    const productToShowHome_2 = products.slice(15, 30);
    dispatch(homeActions.productToShowHomeHandler_1(productToShowHome_1));
    dispatch(homeActions.productToShowHomeHandler_2(productToShowHome_2));
  };

  React.useEffect(() => {
    try {
      FetchProduct();
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
