import React, { Fragment, useState } from "react";
import { ProductDetail } from "../../../../interfaces/ProductDetail";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { cartActions } from "../../../../stores/cart-slice";
import {
  backgroundColorHandler,
  dropdownShoppingCartHandler,
  loadingHandler,
  UIActions,
} from "../../../../stores/UI-slice";
import { postLikedProductById, postShoppingCartById } from "../../../../stores/apiRequest";
import Product_info_intro from "./Product_info_intro";
import PRODUCT_INFO_SELECTSIZE from "./Product_info_selectSize";
import PRODUCT_INFO_BASICINFO from "./Product_info_basicInfo";
import PRODUCT_INFO_DETAILEDINFO from "./Product_info_detailedInfo";
import PRODUCT_INFO_RATE from "./Product_info_rate";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { toast } from "react-toastify";

interface Iprops {
  selectedProduct: ProductDetail | null;
}

const Product_info = ({ selectedProduct }: Iprops) => {
  const [nameDropdown, setNameDropdown] = React.useState<Record<string, any>>({
    selectSize: "",
    material: "",
    details: "",
    size: "",
  });
  const [sizeProduct, setSizeProduct] = React.useState("");
  const [heartAnimated, setHeartAnimated] = React.useState(false);
  const loading__add = useAppSelector((state) => state.UISlice.loading__add);
  const bg_color_shopping_cart = useAppSelector((state) => state.UISlice.bg_color_shopping_cart);
  const user = useAppSelector((state) => state.userSlice.user);
  const addedShoppingCart = useAppSelector((state) => state.cartSlice.addedShoppingCart);
  const addedLikedProduct = useAppSelector((state) => state.cartSlice.addedFavorite);
  // const toast = useAppSelector(state => state.)
  // const [cartUnregisteredUser, setCartUnregisteredUser] = useState();
  // const [likedUnregisteredUser, setLikedUnregisteredUser] = useState();

  const dispatch = useAppDispatch();

  const dropdownHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = e.currentTarget;
    if (nameDropdown[name] === name) {
      setNameDropdown((prev) => ({ ...prev, [name]: "" }));
    } else {
      setNameDropdown((prev) => ({ ...prev, [name]: name }));
    }
  };

  const sizeProductHandler = (size: string) => {
    setSizeProduct(size);
    setNameDropdown((prev) => ({ ...prev, selectSize: "" }));
  };

  const addShoppingCartHandler = () => {
    const product = {
      id: selectedProduct?.id,
      brand: selectedProduct?.brand.name,
      name: selectedProduct?.name,
      imageUrl: selectedProduct?.media.images[0].url,
      currentPrice: selectedProduct?.price.current.value,
      previousPrice: selectedProduct?.price.previous?.value,
      isFavorite: false,
      amount: 1,
      size: sizeProduct,
      totalProduct: selectedProduct?.price.current.value,
    };
    if (!sizeProduct) {
      setNameDropdown((prev) => ({ ...prev, selectSize: "selectSize" }));
      return;
    } else {
      dispatch(cartActions.addShoppingCartHandler(product));
      loadingHandler(dispatch, 500, "add");
      backgroundColorHandler(dispatch, 2000);
      dropdownShoppingCartHandler(dispatch, 5000);
      toast.success("Your product is added successfully");
    }
  };

  const addProductFavoriteHandler = () => {
    dispatch(
      cartActions.addFavoriteHandler({
        id: selectedProduct?.id,
        brand: selectedProduct?.brand.name,
        name: selectedProduct?.name,
        isFavorite: false,
        imageUrl: selectedProduct?.media.images[0].url,
        currentPrice: selectedProduct?.price.current.value,
        previousPrice: selectedProduct?.price.previous?.value,
        totalProduct: selectedProduct?.price.current.value,
      })
    );
    setHeartAnimated((prev) => !prev);
    toast.success("Your product is added successfully");
  };

  const ref = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setNameDropdown((prev) => ({ ...prev, selectSize: "" })));

  React.useEffect(() => {
    let subscribe = true;

    if (subscribe && user) {
      // console.log("send request");
      postShoppingCartById(dispatch, user, addedShoppingCart);
      postLikedProductById(dispatch, user, addedLikedProduct);
    }

    return () => {
      subscribe = false;
    };
  }, [addedShoppingCart, user]);

  return (
    <Fragment>
      <div className="mx-6 mt-6 md:m-0 md:min-w-1/2 md:max-w-1/2 flex flex-col md:basis-1/2 ">
        <div className="px-2 lg:ml-[100px] ">
          <Product_info_intro selectedProduct={selectedProduct} />
          {/* <div className="mt-9"> */}
          {/* select your size start */}
          <PRODUCT_INFO_SELECTSIZE
            inputRef={ref}
            sizeProduct={sizeProduct}
            dropdownHandler={dropdownHandler}
            sizeProductHandler={sizeProductHandler}
            addShoppingCartHandler={addShoppingCartHandler}
            addProductFavoriteHandler={addProductFavoriteHandler}
            bg_color_shopping_cart={bg_color_shopping_cart}
            loading__add={loading__add}
            heartAnimated={heartAnimated}
            nameDropdown={nameDropdown}
          />
          {/* select your size end */}
          {/* </div> */}
          <PRODUCT_INFO_BASICINFO />
          {/* infor start */}
          <PRODUCT_INFO_DETAILEDINFO dropdownHandler={dropdownHandler} nameDropdown={nameDropdown} />
          {/* infor end */}

          {/* stars start */}
          <PRODUCT_INFO_RATE />
          {/* stars end */}
        </div>
      </div>
    </Fragment>
  );
};

export default Product_info;
