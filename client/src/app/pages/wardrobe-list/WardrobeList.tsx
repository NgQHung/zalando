import { faArrowLeft, faArrowRight, faBagShopping, faEllipsis, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { cartActions } from "../../../stores/cart-slice";
import { ImgToHttp } from "../../../utils/imageToHTTP";
import { useAppDispatch, useAppSelector } from "../../hooks";

const WardrobeList = () => {
  const addedFavorite = useAppSelector((state) => state.cartSlice.addedFavorite);
  const [notification, setNotification] = React.useState(false);
  const dispatch = useAppDispatch();
  const favoriteHandler = () => {
    //     const removedFavorite = addedFavorite.find(item => item.id === id)
    //   dispatch(cartActions.removeFavorite(removedFavorite));
    // alert("product id removed");
    setNotification(true);
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
      {notification && (
        <div className="text-[#ffff] flex justify-between max-w-[460px] bg-[#1a1a1a] absolute bottom-0 left-4">
          <p className=" py-4 pr-4">Předmět odstraněn</p>
          <p className="py-4 pr-4">Vrátit</p>
        </div>
      )}
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
        <div className="wardrobeList-shareProduct text-left md:text-right leading-[20px] text-[#6328e0]  text-[14px] px-2 mt-3">
          <span className="mr-2 affect_text">Vyberte zboží ke sdílení</span>
          <FontAwesomeIcon className="h-[14px] w-[14px] text-center" icon={faArrowRight} />
        </div>
        <ul className="wardrobeList_images flex">
          {addedFavorite.map((product) => (
            <div className="px-2">
              <li className="relative max-w-[288px] mb-[36px] basis-full xs:basis-1/2 md:basis-1/4 mt-6">
                <button className="h-12 w-12 text-center absolute top-3 right-0 p-3 bg-[#ffff]">
                  <FontAwesomeIcon icon={faXmark} className="h-full object-cover" />
                </button>
                <div className="flex flex-col absolute bottom-3 right-0">
                  <button className="h-12 w-12 text-center p-3 bg-[#ffff]">
                    <FontAwesomeIcon icon={faEllipsis} className="h-full object-cover" />
                  </button>
                  <button className="h-12 w-12 text-center p-3 bg-[#1a1a1a] text-[#ffff]">
                    <FontAwesomeIcon icon={faBagShopping} className="h-full object-cover" />
                  </button>
                </div>
                <img src={ImgToHttp(product.imageUrl)} alt={product.name} />
              </li>
            </div>
          ))}
          <div className="px-2">
            <li className="relative max-w-[288px] mb-[36px] basis-full xs:basis-1/2 md:basis-1/4 mt-6">
              <button onClick={favoriteHandler} className="h-12 w-12 text-center absolute top-3 right-0 p-3 bg-[#ffff]">
                <FontAwesomeIcon icon={faXmark} className="h-full object-cover" />
              </button>
              <div className="flex flex-col absolute bottom-3 right-0">
                <button className="h-12 w-12 text-center p-3 bg-[#ffff]">
                  <FontAwesomeIcon icon={faEllipsis} className="h-full object-cover" />
                </button>
                <button className="h-12 w-12 text-center p-3 bg-[#1a1a1a] text-[#ffff]">
                  <FontAwesomeIcon icon={faBagShopping} className="h-full object-cover" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1665690366910-0c9684d50e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default WardrobeList;
