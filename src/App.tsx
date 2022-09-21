import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./app/components/layouts/DefaultLayout";
import { publicRoutes } from "./app/routes";
// import Main from "./app/pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, idx) => {
          const PageComponent = route.component;
          return (
            <Route
              key={idx}
              element={
                <DefaultLayout>
                  <PageComponent />
                </DefaultLayout>
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
