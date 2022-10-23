import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
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
// import HOME_PRODUCT from "../../containers/home/Home_product";
import { getDetailProduct } from "../../../services/apiRequest";
import Loading from "../../components/UI/loader/Loading";
const HOME_PRODUCT = lazy(() => import("../../containers/home/Home_product"));

export const Home = () => {
  const dispatch = useAppDispatch();
  // const allProduct = useAppSelector((state) => state.productSlice.allProducts);
  const products_1 = useAppSelector((state) => state.productSlice.products_1);
  const products_2 = useAppSelector((state) => state.productSlice.products_2);
  const [favoriteAnimated, setFavoriteAnimated] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<any>();
  // const [updateAllProduct, setUpdateAllProduct] = useState<Products[]>([]);
  const [updateProducts1, setUpdateProducts1] = useState<Products[]>([]);
  // const [updateProducts2, setUpdateProducts2] = useState<Products[]>([])
  const loadingPage = useAppSelector((state) => state.UISlice.loading_page);

  useEffect(() => {
    setUpdateProducts1([...products_1]);
  }, [products_1]);
  const selectedProductHandler = (id: number) => {
    dispatch(productActions.selectedIdHandler(id));
    getDetailProduct(dispatch, id);
  };

  const favoriteHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    const productIndex1 = updateProducts1.findIndex((item) => item.name === target.getAttribute("datatype"));
    const product1 = updateProducts1[productIndex1];
    setSelectedProduct(product1);

    let update;
    if (product1) {
      const updateProduct1 = { ...product1, isFavorite: !product1.isFavorite };
      update = [...updateProducts1];
      update[productIndex1] = updateProduct1;
      setUpdateProducts1(update);
    }
  };

  React.useEffect(() => {
    if (selectedProduct) {
      dispatch(cartActions.addFavoriteHandler(selectedProduct));
      // localStorage.setItem('liked', JSON.stringify())
    }

    if (selectedProduct?.isFavorite === true) {
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
        {updateProducts1 && (
          <Wrapper className="bg-[#229967]">
            <div className="flex flex-col w-full h-full">
              <HOME_TOPIC />
              <HOME_PRODUCT
                products={updateProducts1}
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
