import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import "./Home.css";
import { Products } from "../../../interfaces/Products";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { productActions } from "../../../stores/product-slice";
import { cartActions } from "../../../stores/cart-slice";
import Wrapper from "../../components/UI/wrapper/wrapper";
import ready from "../../../utils/intersectionObserver";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/ErrorBoundary";
import HOME_TOPIC from "../../containers/home/Home_topic";
import { getDetailProduct } from "../../../services/apiRequest";
import Loading from "../../components/UI/loader/Loading";
// import { AfterRefresh } from "../../../utils/pageIsRefreshed";
const HOME_PRODUCT = lazy(() => import("../../containers/home/Home_product"));

export const Home = () => {
  const dispatch = useAppDispatch();
  const products_1 = useAppSelector((state) => state.productSlice.products_1);
  const [favoriteAnimated, setFavoriteAnimated] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<any>();
  const loadingPage = useAppSelector((state) => state.UISlice.loading_page);
  const [afterRefresh, setAfterRefresh] = useState(false);

  const selectedProductHandler = (id: number) => {
    dispatch(productActions.selectedIdHandler(id));
    getDetailProduct(dispatch, id);
  };

  const favoriteHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    const productIndex1 = products_1.findIndex((item) => item.name === target.getAttribute("datatype"));
    const product1 = products_1[productIndex1];

    console.log(product1);
    setAfterRefresh(false);
    let update;
    if (product1) {
      const updateProduct1 = { ...product1, isFavorite: !product1.isFavorite };
      setSelectedProduct(updateProduct1);
      update = [...products_1];
      update[productIndex1] = updateProduct1;
      dispatch(productActions.productsHandler({ products_1: update }));
    }
  };

  React.useEffect(() => {
    if (selectedProduct) {
      dispatch(cartActions.addFavoriteHandler(selectedProduct));
    }

    if (selectedProduct?.isFavorite === false) {
      dispatch(cartActions.removeFavorite(selectedProduct));
    }
  }, [selectedProduct]);

  return (
    <Fragment>
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
          <Suspense
            fallback={
              <>
                <Loading />
                {React.useEffect(() => {
                  let subscribe = true;
                  if (subscribe) {
                    ready();
                  }
                  return () => {
                    subscribe = false;
                  };
                })}
              </>
            }
          ></Suspense>
        </ErrorBoundary>
        {loadingPage && (
          <>
            <Loading /> <div className="h-screen" />
          </>
        )}
        {products_1 && (
          <Wrapper className="bg-[#229967]">
            <div className="flex flex-col w-full h-full">
              <HOME_TOPIC />
              <HOME_PRODUCT
                setAfterRefresh={setAfterRefresh}
                afterRefresh={afterRefresh}
                products={products_1}
                selectedProductHandler={selectedProductHandler}
                favoriteHandler={favoriteHandler}
                selectedProduct={selectedProduct}
                favoriteAnimated={favoriteAnimated}
              />
            </div>
          </Wrapper>
        )}

        {/* <Wrapper className="bg-[#229967] ">
          <div className="flex flex-col w-full h-full">
            <HOME_TOPIC />
            <HOME_PRODUCT
              products={products_2}
              selectedProductHandler={selectedProductHandler}
              favoriteHandler={favoriteHandler}
              selectedProduct={selectedProduct}
              favoriteAnimated={favoriteAnimated}
              updateAllProduct={updateAllProduct}
            />
          </div>
        </Wrapper> */}
      </div>
    </Fragment>
  );
};

// export default Home;
