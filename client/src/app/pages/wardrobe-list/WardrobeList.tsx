import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../../hooks";
import WardrobeItems from "../../containers/wardrobe-list/WardrobeItems";
import WardrobeNotification from "../../containers/wardrobe-list/WardrobeNotification";
import WardrobePopup from "../../containers/wardrobe-list/WardrobePopup";
import WardrobePopup_Share from "../../containers/wardrobe-list/WardrobePopup_Share";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const WardrobeList = () => {
  const [notification, setNotification] = React.useState(false);
  const [optionPopup, setOptionPopup] = React.useState(false);
  const [shareProduct, setShareProduct] = React.useState(false);

  // const dispatch = useAppDispatch();
  const favoriteHandler = () => {
    //     const removedFavorite = addedFavorite.find(item => item.id === id)
    //   dispatch(cartActions.removeFavorite(removedFavorite));
    // alert("product id removed");
    setNotification(true);
  };

  const addShoppingCartHandler = () => {
    alert("added product");

    // if (!sizeProduct) {
    //   setNameDropdown((prev) => ({ ...prev, selectSize: "selectSize" }));
    //   return;
    // } else {
    //   dispatch(
    //     cartActions.addShoppingCartHandler({
    //       id: selectedProduct?.id,
    //       brand: selectedProduct?.brand.name,
    //       name: selectedProduct?.name,
    //       imageUrl: selectedProduct?.media.images[0].url,
    //       currentPrice: selectedProduct?.price.current.value,
    //       previousPrice: selectedProduct?.price.previous?.value,
    //       isFavorite: false,
    //       amount: 1,
    //       size: sizeProduct,
    //       totalProduct: selectedProduct?.price.current.value,
    //     })
    //   );
    // //   loadingHandler(dispatch, 500, "add");
    // //   backgroundColorHandler(dispatch, 2000);
    // //   dropdownShoppingCartHandler(dispatch, 5000);
    // }
  };

  let refInput = React.useRef<any>(null);

  useOnClickOutside(refInput, () => setOptionPopup(false));

  const optionsHandler = () => {
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
      {optionPopup && (
        <WardrobePopup
          optionPopup={optionPopup}
          setOptionPopup={setOptionPopup}
          refInput={refInput}
          favoriteHandler={favoriteHandler}
        />
      )}
      {shareProduct && <WardrobePopup_Share setShareProduct={setShareProduct} />}
      <div className=" w-full relative lg:max-w-[1216px]  mx-auto my-0 ">
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
          <button onClick={() => setShareProduct(true)} className="leading-[20px] text-[#6328e0] text-[14px] px-2 mt-3">
            <span className="mr-2 affect_text">Vyberte zboží ke sdílení</span>
            <FontAwesomeIcon className="h-[14px] w-[14px] text-center" icon={faArrowRight} />
          </button>
        </div>
        <ul className="wardrobeList_images flex">
          {/* {addedFavorite.map((product) => ( */}
          <WardrobeItems
            favoriteHandler={favoriteHandler}
            optionsHandler={optionsHandler}
            addShoppingCartHandler={addShoppingCartHandler}
            // product={product}
          />
          {/* ))} */}
        </ul>
      </div>
    </>
  );
};

export default WardrobeList;
