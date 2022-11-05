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
const HOME_PRODUCT = lazy(() => import("../../containers/home/Home_product"));

export const Home = () => {
  const dispatch = useAppDispatch();
  const products_1 = useAppSelector((state) => state.productSlice.products_1);
  const [selectedProduct, setSelectedProduct] = React.useState<any>();
  const loadingPage = useAppSelector((state) => state.UISlice.loading_page);
  const allProducts = useAppSelector((state) => state.productSlice.allProducts);

  const selectedProductHandler = (id: number) => {
    dispatch(productActions.selectedIdHandler(id));
    getDetailProduct(dispatch, id);
  };

  const favoriteHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    const productIndex = allProducts.findIndex((item) => item.name === target.getAttribute("datatype"));
    const product = allProducts[productIndex];

    let update;
    if (product) {
      const updateProduct = { ...product, isFavorite: !product.isFavorite };
      setSelectedProduct(updateProduct);
      update = [...allProducts];
      update[productIndex] = updateProduct;
      dispatch(productActions.productsHandler({ allProducts: update }));
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

  React.useEffect(() => {
    if (products_1 === undefined) {
      refreshPage();
    }
  }, []);

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
