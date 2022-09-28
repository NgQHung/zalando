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

interface Iprops {
  selectedProduct: ProductDetail;
}

const Product_info = ({ selectedProduct }: Iprops) => {
  const [dropdown, setDropDown] = React.useState(false);
  const [nameDropdown, setNameDropdown] = React.useState("");

  const dropdownHandler = (name: string) => {
    setDropDown((prev) => !prev);
    setNameDropdown(name);
  };

  return (
    <Fragment>
      <div className="min-w-1/2 max-w-1/2 flex flex-col basis-1/2 ">
        <div className="px-2 lg:ml-[100px] ">
          <div className="product_content">
            <p className="text-[28px] text_tiempos  ">{selectedProduct.brand.name}</p>
            <p className="text-[28px] font-[600] mt-2">{selectedProduct.name}</p>
            <p className="text-[22px] mt-2">{selectedProduct.price.current.text}</p>
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
                className={"size_dropdown_hidden " + (nameDropdown === "selectSize" && dropdown ? "size_dropdown" : "")}
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
                className={" font-[400] dropdown_hidden " + (dropdown && nameDropdown === "material" ? "dropdown" : "")}
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
                className={" font-[400] dropdown_hidden " + (dropdown && nameDropdown === "details" ? "dropdown" : "")}
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
              <div className={"font-[400]  dropdown_hidden " + (dropdown && nameDropdown === "size" ? "dropdown" : "")}>
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