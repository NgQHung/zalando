import React, { Fragment, Suspense, useState } from "react";
import "./Home.css";
import { Products } from "../../../interfaces/Products";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { productActions } from "../../../stores/product-slice";
import { cartActions } from "../../../stores/cart-slice";
import Wrapper from "../../components/UI/wrapper/wrapper";
import ready from "../../../utils/intersectionObserver";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "../../components/UI/loader/Loader";
import ErrorFallback from "../../components/ErrorBoundary";
import HOME_TOPIC from "../../containers/home/Home_topic";
import HOME_PRODUCT from "../../containers/home/Home_product";

export const Home = () => {
  const dispatch = useAppDispatch();
  const products_1 = useAppSelector((state) => state.productSlice.products_1);
  const products_2 = useAppSelector((state) => state.productSlice.products_2);
  const [favoriteAnimated, setFavoriteAnimated] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<any>();

  const selectedProductHandler = (id: number) => {
    dispatch(productActions.selectedIdHandler(id));
  };

  const favoriteHandler = (selectedProduct: Products) => {
    const product = products_1.find((item) => item.id === selectedProduct.id);
    const initProduct = { ...product, isFavorite: false };
    const updateProduct = { ...initProduct, isFavorite: true };
    if (product) {
      setFavoriteAnimated((prev) => !prev);
    }
    if (!favoriteAnimated) {
      setSelectedProduct(updateProduct);
    } else {
      setSelectedProduct(initProduct);
    }
  };
  console.log("rendered");

  React.useEffect(() => {
    if (selectedProduct) {
      dispatch(cartActions.addFavoriteHandler(selectedProduct));
    }

    if (!selectedProduct?.isFavorite) {
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
                <Loader />
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
        <Wrapper className="bg-[#229967]">
          <div className="flex flex-col w-full h-full">
            <HOME_TOPIC />
            <HOME_PRODUCT
              products={products_1}
              selectedProductHandler={selectedProductHandler}
              favoriteHandler={favoriteHandler}
              selectedProduct={selectedProduct}
              favoriteAnimated={favoriteAnimated}
            />
          </div>
        </Wrapper>
        <Wrapper className="bg-[#229967] ">
          <div className="flex flex-col w-full h-full">
            <HOME_TOPIC />
            <HOME_PRODUCT
              products={products_2}
              selectedProductHandler={selectedProductHandler}
              favoriteHandler={favoriteHandler}
              selectedProduct={selectedProduct}
              favoriteAnimated={favoriteAnimated}
            />
          </div>
        </Wrapper>
      </div>
    </Fragment>
  );
};

// export default Home;
