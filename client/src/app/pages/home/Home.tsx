import React, { Fragment, lazy, Suspense } from "react";
import "./Home.css";
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
import { refreshPage } from "../../../utils/refreshPage";
import HOME_PRODUCT from "../../containers/home/Home_product";

export const Home = () => {
  const dispatch = useAppDispatch();
  const products_1 = useAppSelector((state) => state.productSlice.products_1);
  const [selectedProduct, setSelectedProduct] = React.useState<any>();
  const loadingPage = useAppSelector((state) => state.UISlice.loading_page);

  const selectedProductHandler = (id: number) => {
    dispatch(productActions.selectedIdHandler(id));
    getDetailProduct(dispatch, id);
  };

  const favoriteHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const productIndex = products_1.findIndex((item) => item.name === target.getAttribute("datatype"));
    const product = products_1[productIndex];
    console.log("hello");

    let update;
    if (product) {
      const updateProduct = { ...product, isFavorite: !product.isFavorite };
      setSelectedProduct(updateProduct);
      update = [...products_1];
      update[productIndex] = updateProduct;
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

  // React.useEffect(() => {
  //   if (products_1 === undefined) {
  //     refreshPage();
  //   }
  // }, []);
  // console.log(products_1);
  // console.log(loadingPage);

  return (
    <Fragment>
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
          <Suspense
            fallback={
              <>
                {/* <Loading /> */}
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
        {products_1 && !loadingPage ? (
          <Wrapper className="bg-[#229967]">
            <div className="flex flex-col w-full h-full">
              <HOME_TOPIC />
              <HOME_PRODUCT
                products={products_1}
                selectedProductHandler={selectedProductHandler}
                favoriteHandler={favoriteHandler}
              />
            </div>
          </Wrapper>
        ) : null}

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
