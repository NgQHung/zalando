import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductDetail } from "../../../interfaces/ProductDetail";
import { Products } from "../../../interfaces/Products";
// import { SelectedProduct } from "../../../interfaces/SelectedProduct";
import { cartActions } from "../../../stores/cart-slice";
import Wrapper from "../../components/UI/wrapper/wrapper";
// import { useAppDispatch, useAppSelector } from "../../hooks";
import WardrobeItems from "../../containers/wardrobe-list/WardrobeItems";
import WardrobeNotification from "../../containers/wardrobe-list/WardrobeNotification";
import WardrobePopup from "../../containers/wardrobe-list/WardrobePopup";
import WardrobePopup_Share from "../../containers/wardrobe-list/WardrobePopup_Share";
import { useAppDispatch } from "../../hooks";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const WardrobeList = () => {
  const [notification, setNotification] = useState(false);
  const [optionPopup, setOptionPopup] = useState(false);
  const [shareProduct, setShareProduct] = useState(false);
  const [addedFavorite, setAddedFavorite] = useState<Products[]>([]);
  const [selectedFavorite, setSelectedFavorite] = useState<ProductDetail>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("persist:root")!) || [];
    setAddedFavorite(JSON.parse(getCart.cartSlice).addedFavorite);
  }, []);

  // const dispatch = useAppDispatch();
  const favoriteHandler = () => {
    //     const removedFavorite = addedFavorite.find(item => item.id === id)
    //   dispatch(cartActions.removeFavorite(removedFavorite));
    // alert("product id removed");
    setNotification(true);
  };

  const addShoppingCartHandler = (selectedProduct: ProductDetail) => {
    // alert("added product");

    if (!selectedProduct.size) {
      setOptionPopup(true);
      // setNameDropdown((prev) => ({ ...prev, selectSize: "selectSize" }));
      return;
    } else {
      dispatch(
        cartActions.addShoppingCartHandler({
          id: selectedProduct?.id,
          brand: selectedProduct?.brand?.name,
          name: selectedProduct?.name,
          imageUrl: selectedProduct?.media?.images[0].url,
          currentPrice: selectedProduct?.price.current.value,
          previousPrice: selectedProduct?.price.previous?.value,
          isFavorite: false,
          amount: 1,
          size: selectedProduct.size,
          totalProduct: selectedProduct?.price.current.value,
        })
      );
      //   loadingHandler(dispatch, 500, "add");
      //   backgroundColorHandler(dispatch, 2000);
      //   dropdownShoppingCartHandler(dispatch, 5000);
    }
  };

  let refInput = React.useRef<any>(null);

  useOnClickOutside(refInput, () => setOptionPopup(false));

  const optionsHandler = (selectedProduct: ProductDetail) => {
    setSelectedFavorite(selectedProduct);
    setOptionPopup(true);
  };

  React.useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      setTimeout(() => {
        setNotification(false);
      }, 3000);
    }
    return () => {
      subscribe = false;
    };
  }, [notification]);

  return (
    <>
      {notification && <WardrobeNotification />}
      {optionPopup && selectedFavorite?.id ? (
        <WardrobePopup
          optionPopup={optionPopup}
          setOptionPopup={setOptionPopup}
          refInput={refInput}
          favoriteHandler={favoriteHandler}
          selectedFavorite={selectedFavorite}
        />
      ) : null}
      {shareProduct && <WardrobePopup_Share setShareProduct={setShareProduct} />}
      <Wrapper className="  ">
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
            {addedFavorite.map((product) => (
              <WardrobeItems
                favoriteHandler={favoriteHandler}
                optionsHandler={optionsHandler}
                addShoppingCartHandler={addShoppingCartHandler}
                product={product}
              />
            ))}
          </ul>
        </>
      </Wrapper>
    </>
  );
};

export default WardrobeList;
