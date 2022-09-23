import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "./app/components/layouts/DefaultLayout";
import { publicRoutes } from "./app/routes";
// import Main from "./app/pages/Main";

function App() {
  // const navigate = useNavigate()
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, idx) => {
          const PageComponent = route.component;

          const pathHome = "/damy-domovska-stranka/";

          return (
            <Route
              key={idx}
              element={
                route.redirect ? (
                  <Navigate to={pathHome} />
                ) : (
                  <DefaultLayout>
                    <PageComponent />
                  </DefaultLayout>
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
