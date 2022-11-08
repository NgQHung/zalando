import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Products } from "../../../interfaces/Products";
// import { TransitionGroup } from "react-transition-group";
// import { Products } from "../../../interfaces/ProductShoppingCart";
import { cartActions } from "../../../stores/cart-slice";
import { productActions } from "../../../stores/product-slice";
import Wrapper from "../../components/UI/wrapper/wrapper";
// import { useAppDispatch, useAppSelector } from "../../hooks";
import WardrobeItems from "../../containers/wardrobe-list/WardrobeItems";
import WardrobeNotification from "../../containers/wardrobe-list/WardrobeNotification";
import WardrobePopup from "../../containers/wardrobe-list/WardrobePopup";
import WardrobePopup_Share from "../../containers/wardrobe-list/WardrobePopup_Share";
import { useAppDispatch, useAppSelector } from "../../hooks";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const WardrobeList = () => {
  const [notification, setNotification] = useState(false);
  const [optionPopup, setOptionPopup] = useState(false);
  const [shareProduct, setShareProduct] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState<Products>();
  const [selectedId, setSelectedId] = useState<number>();
  const [selectSize, setSelectSize] = React.useState(false);
  const [selectedSize, setSelectedSize] = useState<string>();
  const [restore, setRestore] = useState<boolean>(false);
  const [removedProduct, setRemovedProduct] = useState<Products[]>([]);

  // let removedItems: Products[] = [];

  const addedFavorite = useAppSelector((state) => state.cartSlice.addedFavorite);
  // const removedFavorite = useAppSelector((state) => state.productSlice.removedProduct);
  const dispatch = useAppDispatch();
  // const addedShoppingCart = useAppSelector((state) => state.cartSlice.addedShoppingCart);
  // console.log(addedShoppingCart);

  // const dispatch = useAppDispatch();
  const removeFavoriteHandler = (id: number) => {
    const removedFavorite = addedFavorite.find((item: Products) => item?.id === id);

    if (removedFavorite) {
      setRemovedProduct([removedFavorite!]);
      dispatch(cartActions.removeFavorite(removedFavorite));
      setNotification(true);
    }
    setOptionPopup(false);
  };

  console.log(restore);
  const addShoppingCartHandler = (selectedProduct?: Products) => {
    setSelectedId(selectedProduct?.id);

    if (!selectedSize) {
      setSelectedFavorite(selectedProduct);
      setSelectedId(selectedProduct?.id);
      setOptionPopup(true);
      setSelectSize(true);
      return;
    } else {
      dispatch(
        cartActions.addShoppingCartHandler({
          id: selectedProduct?.id,
          brand: selectedProduct?.brandName,
          name: selectedProduct?.name,
          imageUrl: selectedProduct?.imageUrl,
          currentPrice: selectedProduct?.price?.current?.value,
          previousPrice: selectedProduct?.price?.previous?.value,
          isFavorite: selectedProduct?.isFavorite,
          amount: 1,
          size: selectedSize,
          totalProduct: selectedProduct?.totalProduct,
        })
      );
      setSelectedSize("");
      setOptionPopup(false);
    }
  };

  useEffect(() => {
    addShoppingCartHandler(selectedFavorite);
    setOptionPopup(false);
  }, [selectedSize]);

  const restoreHandler = () => {
    setRestore(true);
    setNotification(false);
  };

  useEffect(() => {
    if (removedProduct.length === 1 && !notification && restore) {
      const idRemovedProduct = removedProduct[0]?.id;
      const checkExistingIndex = addedFavorite.findIndex((item) => item?.id === idRemovedProduct);
      const existingProduct = addedFavorite[checkExistingIndex];
      if (!existingProduct) {
        dispatch(cartActions.addFavoriteHandler(removedProduct[0]));
      }
      setRemovedProduct((prev) => prev.filter((item) => item.id !== idRemovedProduct));
      // setNotification(false);
      setRestore(false);
    }
  }, [notification]);

  let refInput = React.useRef<any>(null);

  useOnClickOutside(refInput, () => setOptionPopup(false));

  const optionsHandler = (selectedProduct: Products) => {
    setSelectedFavorite(selectedProduct);
    setSelectedId(selectedProduct.id);
    setSelectSize(false);

    setOptionPopup(true);
  };

  React.useEffect(() => {
    let subscribe = true;
    // let timer;
    if (subscribe && !restore) {
      const timer = setTimeout(() => {
        setNotification(false);
      }, 5000);
      return () => {
        subscribe = false;
        clearTimeout(timer);
      };
    }
  }, [notification, restore]);

  return (
    <>
      {notification && <WardrobeNotification restoreHandler={restoreHandler} />}
      {optionPopup ? (
        <WardrobePopup
          optionPopup={optionPopup}
          setOptionPopup={setOptionPopup}
          refInput={refInput}
          removeFavoriteHandler={removeFavoriteHandler}
          selectedFavorite={selectedFavorite!}
          setSelectSize={setSelectSize}
          selectSize={selectSize}
          setSelectedSize={setSelectedSize}
        />
      ) : null}
      {shareProduct && <WardrobePopup_Share setShareProduct={setShareProduct} />}
      <Wrapper className="">
        <>
          <div className="wardrobeList_back leading-[36px] text-[#6328e0]  text-[14px] px-2 mt-6">
            <Link to="/wardrobe" className="">
              <span className="h-[14px] w-[14px] text-center">
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              <span className="ml-2 affect_text">Zpět</span>
            </Link>
          </div>
          <div className="wardrobeList_title text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-[600] tracking-[-0.28px] mb-4">
            <h1>Oblíbené předměty</h1>
          </div>
          <div className="wardrobeList-shareProduct text-left md:text-right ">
            <button
              onClick={() => setShareProduct(true)}
              className="leading-[20px] text-[#6328e0] text-[14px] px-2 mt-3"
            >
              <span className="mr-2 affect_text">Vyberte zboží ke sdílení</span>
              <FontAwesomeIcon className="h-[14px] w-[14px] text-center" icon={faArrowRight} />
            </button>
          </div>
          <ul className="wardrobeList_images flex flex-wrap ">
            {addedFavorite.map((product: any, idx) => (
              <Fade key={idx}>
                <WardrobeItems
                  removeFavoriteHandler={removeFavoriteHandler}
                  optionsHandler={optionsHandler}
                  addShoppingCartHandler={addShoppingCartHandler}
                  product={product}
                />
              </Fade>
            ))}
          </ul>
        </>
      </Wrapper>
    </>
  );
};

export default WardrobeList;
