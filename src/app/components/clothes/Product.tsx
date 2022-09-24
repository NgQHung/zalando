import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ProductData } from "../../../utils/product";
import { useAppSelector } from "../../hooks";
import Container from "../layouts/container";

const Product = () => {
  const [imageShow, setImageShow] = React.useState<string>(
    "https://img01.ztat.net/article/spp-media-p1/e197cb24923a4defb4c11c55959f89cd/566ab1ee3e7143c1a91fcb9a8338f669.jpg?imwidth=1800"
  );
  const selectedProduct = useAppSelector((state) => state.productSlice.clickedProduct);
  // console.log(selectedProduct);

  return (
    // <Container bg_color="">
    <div className="mx-auto my-0 max-w-[1216px]">
      <div className="flex flex-row mt-6">
        {/* <div className="sticky "> */}
        <div className="relative max-w-1/2 product_image flex flex-row flex-wrap basis-1/2 self-start ">
          <div className="scrollbar_hide flex flex-col basis-[16.666%] max-w-[16.666%] px-2 absolute overflow-y-auto h-full ">
            {ProductData.product_1.map((item, idx) => (
              <ul key={idx}>
                {item.img.map((image) => (
                  <li className="mb-4">
                    <img src={image} alt="hi" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="basis-[83.333%] max-w-[83.333%] px-2 ml-[16.666%] relative">
            <img src={imageShow} alt="imgProduct" />
            <div className="absolute p-1 bg-[#ffff] top-[8px] text-[12px] font-[700]  ">Novinka</div>
          </div>
        </div>
        {/* </div> */}
        <div className="max-w-1/2 flex flex-col basis-1/2 ml-[100px]">
          <div className="product_content">
            <p className="text-[28px] text_tiempos  ">{selectedProduct.brand}</p>
            <p className="text-[28px] font-[600] mt-2">{selectedProduct.name}</p>
            <p className="text-[22px] mt-2">{selectedProduct.price}</p>
            <p className="mt-9">
              Barva: <span className="font-[700] mb-2 ">blue denim</span>
            </p>
          </div>
          <div className="mt-9">
            <div className="p-3 border border-[#1a1a1a] mb-2 ">
              <span>Zvolte svou velikost</span>
            </div>
            {/* <div className="f"> */}
            {/* <div className="p-3 bg-[#1a1a1a] text-[#ffff] text-center "> */}
            <div className="flex items-center">
              <button className="p-3 bg-[#1a1a1a] text-[#ffff] w-full">
                <span>Přidat do nákupního košíku</span>
              </button>
              <button>
                <FontAwesomeIcon icon={faHeart} className="p-2 border border-[#1a1a1a] h-6" />
              </button>
            </div>
          </div>
          <div className="border border-[#1a1a1a] mt-12 ">
            <div className="py-4 px-6 border-b border-[#1a1a1a]">
              <span>2-5 pracovní dny</span> <span>zdarma</span>
              <p className="">Standardní doručení</p>
            </div>
            <p className="border-b border-[#1a1a1a] py-4 px-6 ">Bezplatná doprava a vrácení zboží</p>
            <p className="border-b border-[#1a1a1a] py-4 px-6 ">Vrácení zboží do 100 dní</p>
            <p className="py-4 px-6">Vrácení zboží do 100 dní</p>
          </div>
          <div className="mt-12">
            <div className="px-4 py-6 border-t border-[#66676e]">
              <button>
                <span>Materiál a údržba</span>
              </button>
            </div>
            <div className="px-4 py-6 border-t border-[#66676e]">
              <button>
                <span>Podrobnosti</span>
              </button>
            </div>
            <div className="px-4 py-6 border-t border-[#66676e]">
              <button>
                <span>Velikost a střih</span>
              </button>
            </div>
            <div className="px-4 py-6 border-t border-[#66676e]">
              <button>
                <span>Velikost a střih</span>
              </button>
            </div>
            <div className="px-4 py-6 border-t border-b border-[#66676e]">
              <button>
                <span>Wrangler</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Container>
  );
};

export default Product;
