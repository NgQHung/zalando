import React, { Fragment } from "react";
import { ProductDetail } from "../../../../interfaces/ProductDetail";
import {
  faBox,
  faBoxOpen,
  faCaretDown,
  faCaretUp,
  faChevronDown,
  faChevronUp,
  faCircleInfo,
  faHeart,
  faPlus,
  faRotateLeft,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { cartActions } from "../../../../stores/cart-slice";
import { backgroundColorHandler, dropdownShoppingCartHandler, loadingHandler } from "../../../../stores/UI-slice";
import Loader from "../../../components/UI/Loader";

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
    if (!sizeProduct) {
      setNameDropdown((prev) => ({ ...prev, selectSize: "selectSize" }));
      return;
    } else {
      dispatch(
        cartActions.addShoppingCartHandler({
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
        })
      );
      loadingHandler(dispatch, 500, "add");
      backgroundColorHandler(dispatch, 2000);
      dropdownShoppingCartHandler(dispatch, 5000);
    }
  };

  const addProductFavoriteHandler = () => {
    dispatch(
      cartActions.addFavoriteHandler({
        id: selectedProduct?.id,
        brand: selectedProduct?.brand.name,
        name: selectedProduct?.name,
        imageUrl: selectedProduct?.media.images[0].url,
        currentPrice: selectedProduct?.price.current.value,
        previousPrice: selectedProduct?.price.previous?.value,
        totalProduct: selectedProduct?.price.current.value,
      })
    );
    setHeartAnimated((prev) => !prev);
  };

  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    if (nameDropdown.selectSize) {
      document.addEventListener("mousedown", (e: any) => {
        if (!ref?.current?.contains(e.target)) {
          setNameDropdown((prev) => ({ ...prev, selectSize: "" }));
        }
      });
    }
  }, [nameDropdown.selectSize]);

  // React.useEffect(() => {
  //   let subscribe = true
  //   if(subscribe) {
  //     setHeartAnimated(true)
  //   }
  //   return () => {
  //     subscribe = false
  //   }
  // })

  return (
    <Fragment>
      <div className="mx-6 mt-6 md:m-0 md:min-w-1/2 md:max-w-1/2 flex flex-col md:basis-1/2 ">
        <div className="px-2 lg:ml-[100px] ">
          <div className="product_content">
            <p className="text-[28px] text_tiempos  ">{selectedProduct?.brand?.name}</p>
            <p className="text-[28px] font-[600] mt-2">{selectedProduct?.name}</p>
            <p className="text-[22px] mt-2">{selectedProduct?.price.current.text}</p>
            <p className="mt-9">
              Barva: <span className="font-[700] mb-2 ">blue denim</span>
            </p>
          </div>
          <div className="mt-9">
            {/* select your size start */}
            <div ref={ref} className="  mb-2 relative ">
              <button
                name="selectSize"
                className={
                  "flex justify-between cursor-pointer w-full p-3 border border-[#1a1a1a] " +
                  (!sizeProduct ? "outline_onHover" : "outline_effect hover:bg-[#e9e9ed]")
                }
                onClick={dropdownHandler}
              >
                <span className="">{sizeProduct ? sizeProduct : "Zvolte svou velikost"} </span>
                {nameDropdown.selectSize ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </button>

              <div className={"size_dropdown_hidden z-[1000] " + (nameDropdown.selectSize ? "size_dropdown" : "")}>
                <div className="hover:bg-[#e9e9ed] transition-all">
                  <div
                    onClick={() => sizeProductHandler("S")}
                    className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]"
                  >
                    S
                  </div>
                </div>
                <div onClick={() => sizeProductHandler("M")} className="hover:bg-[#e9e9ed] transition-all">
                  <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
                    M
                  </div>
                </div>
                <div onClick={() => sizeProductHandler("L")} className="hover:bg-[#e9e9ed] transition-all">
                  <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
                    L
                  </div>
                </div>
                <div onClick={() => sizeProductHandler("XL")} className="hover:bg-[#e9e9ed] transition-all">
                  <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
                    XL
                  </div>
                </div>
                <div onClick={() => sizeProductHandler("XXL")} className="hover:bg-[#e9e9ed] transition-all">
                  <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
                    XXL
                  </div>
                </div>
              </div>
            </div>
            {/* select your size end */}

            <div className="flex items-center w-full justify-between ">
              <button
                onClick={addShoppingCartHandler}
                className={
                  "p-3 text-[#ffff] grow  h-[48px] transition-all " +
                  (!nameDropdown.selectSize ? "hover:opacity-70 " : "") +
                  (bg_color_shopping_cart ? "bg-[#47ac3a]" : "bg-[#1a1a1a]")
                }
              >
                {loading__add ? <Loader /> : <span>Přidat do nákupního košíku</span>}
              </button>
              <button
                onClick={addProductFavoriteHandler}
                className={"ml-2 h-[48px] w-[48px] border border-[#1a1a1a] outline_onHover "}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className={"p-2 h-6 w-6 " + (heartAnimated ? "favorite_added-active" : "")}
                />
              </button>
            </div>
          </div>
          <div className="border border-[#66676e] mt-12 ">
            <div className="py-4 px-6 border-b border-[#66676e]">
              <FontAwesomeIcon icon={faTruck} className="h-5 w-5" />
              <div className="flex justify-between mt-2">
                <span className="font-[700] text-[14px]">2-5 pracovní dny</span>{" "}
                <span className="font-[700] text-[14px]">zdarma</span>
              </div>
              <p className="mt-1">Standardní doručení</p>
            </div>
            <p className="border-b border-[#66676e] py-4 px-6 ">
              <FontAwesomeIcon className="h-5 w-5 mr-3" icon={faBox} />
              <span>Bezplatná doprava a vrácení zboží</span>
            </p>
            <p className="border-b border-[#66676e] py-4 px-6 ">
              <FontAwesomeIcon className="h-5 w-5 mr-3" icon={faRotateLeft} />
              <span>Vrácení zboží do 100 dní</span>
            </p>
            <div className="py-4 px-6 flex justify-between">
              <p>
                <FontAwesomeIcon className="h-5 w-5 mr-3" icon={faBoxOpen} />

                <span>Prodejte je zpět</span>
              </p>
              <FontAwesomeIcon className="h-5 w-5 cursor-pointer" icon={faCircleInfo} />
            </div>
          </div>
          {/* infor start */}
          <div className="mt-12 font-[700]">
            <div className={" border-y border-[#66676e] relative"}>
              <button
                name="material"
                className="  w-full flex justify-between px-6 py-4 hover:bg-[#e9e9ed] "
                onClick={dropdownHandler}
              >
                <span>Materiál a údržba</span>
                {nameDropdown.material ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
              </button>

              <div className={" font-[400] dropdown_hidden " + (nameDropdown.material ? "dropdown" : "")}>
                <div className="text-[14px] pt-4 px-6 pb-9 ">
                  <p className="mb-1">
                    <span className="font-[700]">Materiál svrchní látka</span>: 100% bavlna
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Podšívka</span>: 100% polyester
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Tloušťka podšívky</span>: Lehce vycpané
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Konstrukce materiálu</span>: Denim
                  </p>
                  <p>
                    <span className="font-[700]">Pokyny pro péči</span>: Nesušit v sušičce, praní v pračce při 30 °C
                  </p>
                </div>
              </div>
            </div>
            <div className={" border-b border-[#66676e] relative"}>
              <button
                name="details"
                onClick={dropdownHandler}
                className="w-full flex justify-between px-6 py-4  hover:bg-[#e9e9ed] "
              >
                <span>Podrobnosti</span>
                {nameDropdown.details ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
              </button>
              <div className={" font-[400] dropdown_hidden " + (nameDropdown.details ? "dropdown" : "")}>
                <div className="text-[14px] pt-4 px-6 pb-9 ">
                  <p className="mb-1">
                    <span>Límec:</span> Polstrovaný límeček
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Zapínání:</span> Knoflík
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Detaily:</span> Hluboké kapsy
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Délka:</span> Normální
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Číslo položky:</span> WR122T02Y-K11
                  </p>
                </div>
              </div>
            </div>

            <div className={" border-b border-[#66676e] relative"}>
              <button
                name="size"
                onClick={dropdownHandler}
                className="w-full flex justify-between px-6 py-4  hover:bg-[#e9e9ed] "
              >
                <span>Velikost a střih</span>
                {nameDropdown.size ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
              </button>
              <div className={"font-[400]  dropdown_hidden " + (nameDropdown.size ? "dropdown" : "")}>
                <div className="text-[14px] pt-4 px-6 pb-9 ">
                  <p>
                    <span>Velikost modelu:</span> Náš model / naše modelka je vysoký/a 189 cm a má velikost M
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Střih:</span> Regular fit
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Tvar:</span> Rovný
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Délka:</span> Normální
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Délka rukávů:</span> Dlouhé
                  </p>
                  <p className="mb-1">
                    <span className="font-[700]">Celková délka:</span> 70 cm (velikost M)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between px-6 py-2 border-b border-[#66676e] items-center z-50 ">
              <span>Wrangler</span>
              <button className="p-2 text-[14px] border border-[#1a1a1a] hover:outline hover:outline-offset-[-2px] hover:outline-[2px]">
                <FontAwesomeIcon icon={faPlus} />
                <span>Sledovat</span>
              </button>
            </div>
          </div>
          {/* infor end */}

          {/* stars start */}
          <div className="mt-12">
            <p>Hodnocení</p>
            <div className="flex justify-between items-center">
              <p>5/5</p>
              <p>
                <FontAwesomeIcon className="h-6" icon={faStar} />
                <FontAwesomeIcon className="h-6" icon={faStar} />
                <FontAwesomeIcon className="h-6" icon={faStar} />
                <FontAwesomeIcon className="h-6" icon={faStar} />
                <FontAwesomeIcon className="h-6" icon={faStar} />
              </p>
            </div>
            <ul className="mt-6">
              <li className="flex justify-between items-center">
                <label className="mr-2 text-[12px] min-w-[24px] mb-1">5</label>
                <span className="h-[3px] bg-[#1a1a1a] w-full" />
              </li>
              <li className="flex justify-between items-center mb-1">
                <label className="mr-2 text-[12px] min-w-[24px] ">4</label>
                <span className="h-[3px] bg-[#1a1a1a] w-full" />
              </li>
              <li className="flex justify-between items-center mb-1">
                <label className="mr-2 text-[12px] min-w-[24px] ">3</label>
                <span className="h-[3px] bg-[#1a1a1a] w-full" />
              </li>
              <li className="flex justify-between items-center mb-1">
                <label className="mr-2 text-[12px] min-w-[24px] ">2</label>
                <span className="h-[3px] bg-[#1a1a1a] w-full" />
              </li>
              <li className="flex justify-between items-center mb-1">
                <label className="mr-2 text-[12px] min-w-[24px] ">1</label>
                <span className="h-[3px] bg-[#1a1a1a] w-full" />
              </li>
            </ul>
          </div>
          {/* stars end */}
        </div>
      </div>
    </Fragment>
  );
};

export default Product_info;
