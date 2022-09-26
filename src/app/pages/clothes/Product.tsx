import {
  faArrowRight,
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
import React from "react";
import { Link } from "react-router-dom";
import { productActions } from "../../../stores/product-slice";
import { data } from "../../../utils/data_muzi&deti";
import { ProductData } from "../../../utils/product";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./Product.css";

interface Idata {
  image: string;
  brand: string;
  name: string;
  price: number;
}

const Product = () => {
  const [imageShow, setImageShow] = React.useState<string>(
    "https://img01.ztat.net/article/spp-media-p1/e197cb24923a4defb4c11c55959f89cd/566ab1ee3e7143c1a91fcb9a8338f669.jpg?imwidth=1800"
  );
  const selectedProduct = useAppSelector((state) => state.productSlice.clickedProduct);

  const [dropdown, setDropDown] = React.useState(false);
  const [nameDropdown, setNameDropdown] = React.useState("");

  const scrollRef = React.useRef<any>(null);
  const [chevronUp, setChevronUp] = React.useState(false);
  const [chevronDown, setChevronDown] = React.useState(false);
  const dispatch = useAppDispatch();

  const viewData_1 = data.muzi.view[0];
  const viewData_2 = data.muzi.view[1];
  const productData_1 = data.muzi.product;

  const dropdownHandler = (name: string) => {
    setDropDown((prev) => !prev);
    setNameDropdown(name);
    console.log(nameDropdown);
    console.log(dropdown);
  };

  const clickedProduct = (data: Idata) => {
    const { name, price, brand } = data;
    dispatch(productActions.selectedProductHandler({ name: name, price: price, brand: brand }));
  };

  const typeImageHandler = (image: string) => {
    setImageShow(image);
  };

  const onScrollHandler = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    if (scrollTop === 0) {
      setChevronUp(false);
    } else {
      setChevronUp(true);
    }
    if (Math.floor(scrollTop) + clientHeight === scrollHeight) {
      setChevronDown(false);
    } else {
      setChevronDown(true);
    }
  };

  return (
    <div className=" mx-6 w-auto  lg:mx-auto lg:my-0  lg:max-w-[1216px]">
      <div className="flex flex-row mt-6 flex-wrap">
        {/* images */}
        <div className=" md:sticky md:top-[24px] max-w-1/2 basis-1/2 self-start flex-wrap product_image ">
          <div className="relative   flex flex-row  ">
            {chevronUp && (
              <FontAwesomeIcon
                icon={faChevronUp}
                className=" absolute top-0  h-6 p-2 bg-[#ffff] left-[8.333%] z-50 translate-x-[-50%]"
              />
            )}
            <div
              onScroll={onScrollHandler}
              ref={scrollRef}
              className="scrollbar_hide lg:flex flex-col basis-[16.666%] max-w-[16.666%] px-2 absolute overflow-y-auto h-full "
            >
              {ProductData.product_1.map((item, idx) => (
                <ul key={idx}>
                  {item.img.map((image) => (
                    <li
                      onMouseEnter={() => typeImageHandler(image)}
                      className="mb-4 hover:outline hover:outline-offset-[-3px] hover:outline-[3px] cursor-pointer"
                    >
                      <img src={image} alt="hi" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            {chevronDown && (
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute bottom-0 h-6 p-2 bg-[#ffff] left-[8.333%] z-50 translate-x-[-50%] "
              />
            )}
            <div className="max-w-full lg:basis-[83.333%] lg:max-w-[83.333%] px-2 lg:ml-[16.666%] relative">
              <img src={imageShow} alt="imgProduct" />
              <div className="absolute p-1 bg-[#ffff] top-[8px] text-[12px] font-[700]  ">Novinka</div>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="min-w-1/2 max-w-1/2 flex flex-col  basis-1/2 ">
          <div className="px-2 lg:ml-[100px] ">
            <div className="product_content">
              <p className="text-[28px] text_tiempos  ">{selectedProduct.brand}</p>
              <p className="text-[28px] font-[600] mt-2">{selectedProduct.name}</p>
              <p className="text-[22px] mt-2">{selectedProduct.price}</p>
              <p className="mt-9">
                Barva: <span className="font-[700] mb-2 ">blue denim</span>
              </p>
            </div>
            <div className="mt-9">
              {/* select your size start */}
              <div className="  mb-2 relative ">
                <button
                  className={"flex justify-between cursor-pointer w-full p-3 border border-[#1a1a1a]  "}
                  onClick={() => dropdownHandler("selectSize")}
                >
                  <span className="">Zvolte svou velikost</span>
                  {nameDropdown === "selectSize" && dropdown ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </button>

                <div
                  className={
                    "size_dropdown_hidden " + (nameDropdown === "selectSize" && dropdown ? "size_dropdown" : "")
                  }
                >
                  <div className="hover:bg-[#e9e9ed] transition-all">
                    <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
                      S
                    </div>
                  </div>
                  <div className="hover:bg-[#e9e9ed] transition-all">
                    <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
                      M
                    </div>
                  </div>
                  <div className="hover:bg-[#e9e9ed] transition-all">
                    <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
                      L
                    </div>
                  </div>
                  <div className="hover:bg-[#e9e9ed] transition-all">
                    <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
                      XL
                    </div>
                  </div>
                  <div className="hover:bg-[#e9e9ed] transition-all">
                    <div className="py-4 pr-3 ml-6 text-[16px] cursor-pointer border-b-[2px] border-[#e9e9ed] font-[700]">
                      XXL
                    </div>
                  </div>
                </div>
              </div>
              {/* select your size end */}

              <div className="flex items-center">
                <button className="p-3 bg-[#1a1a1a] text-[#ffff] w-full hover:opacity-70">
                  <span>Přidat do nákupního košíku</span>
                </button>
                <button>
                  <FontAwesomeIcon icon={faHeart} className="p-2 border border-[#1a1a1a] h-6" />
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
                  className="  w-full flex justify-between px-6 py-4 hover:bg-[#e9e9ed] "
                  onClick={() => dropdownHandler("material")}
                >
                  <span>Materiál a údržba</span>
                  {dropdown && nameDropdown === "material" ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                </button>

                <div
                  className={
                    " font-[400] dropdown_hidden " + (dropdown && nameDropdown === "material" ? "dropdown" : "")
                  }
                >
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
                  onClick={() => dropdownHandler("details")}
                  className="w-full flex justify-between px-6 py-4  hover:bg-[#e9e9ed] "
                >
                  <span>Podrobnosti</span>
                  {dropdown && nameDropdown === "details" ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                </button>
                <div
                  className={
                    " font-[400] dropdown_hidden " + (dropdown && nameDropdown === "details" ? "dropdown" : "")
                  }
                >
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
                  onClick={() => dropdownHandler("size")}
                  className="w-full flex justify-between px-6 py-4  hover:bg-[#e9e9ed] "
                >
                  <span>Velikost a střih</span>
                  {dropdown && nameDropdown === "size" ? (
                    <FontAwesomeIcon icon={faCaretUp} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                  )}
                </button>
                <div
                  className={"font-[400]  dropdown_hidden " + (dropdown && nameDropdown === "size" ? "dropdown" : "")}
                >
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
      </div>

      {/* sliding products start */}
      <div className="mt-9 pt-[36px] pb-[24px] text-[14px] row-full ">
        <ul className=" flex relative overflow-x-auto scrollbar_hide ">
          {productData_1.map((item, idx) => (
            <Link key={idx} to={`/${item.name}`} className="first:ml-[25.4px]">
              <li
                onClick={() => clickedProduct(item)}
                className=" relative min-w-[157px] max-w-[340px] sm:min-w-[344px] md:min-w-[304px] px-[8px]  cursor-pointer"
              >
                <div className="relative">
                  <img className="h-full w-full  object-cover " src={item.image} alt="product" />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fa-thin p-[8px] text-[24px] absolute bg-[#ffff] top-2 right-0 "
                  />
                </div>
                <div className=" leading-[20px] pt-2">
                  <div className="pb-[8px]">
                    <h3 className="text_tiempos text-[16px]  font-[400]">{item.brand}</h3>
                    <h3>{item.name}</h3>
                  </div>
                  <div className="flex flex-col leading-[1.25rem] text-[700]">
                    <span>{item.price}</span>
                    <div className="text-[12px] leading-[16px]">
                      {/* <span>Původně:</span>
                                <span>{item.originalPrice}</span>
                                <span>20%</span> */}
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="p-2 text-[24px] absolute cursor-pointer bg-[#ffff] right-0 top-1/2 translate-y-[-50%]"
        />
      </div>
      {/* sliding products end */}
    </div>
  );
};

export default Product;
