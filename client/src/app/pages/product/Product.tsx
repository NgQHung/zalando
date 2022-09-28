import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { AxiosResponse } from "axios";
import React from "react";
import { ProductDetail } from "../../../interfaces/ProductDetail";
import { useAppSelector } from "../../hooks";
import "./Product.css";
import Product_info from "./product_info";
import Sliding_products from "./sliding_products";
import { ImgToHttp } from "../../../utils/imageToHTTP";

const Product = () => {
  const selectedId = useAppSelector((state) => state.productSlice.selectedId);
  const selectedIdToString = String(selectedId);
  const [imageShow, setImageShow] = React.useState<string>("");

  const [selectedProduct, setSelectedProduct] = React.useState<ProductDetail>({
    name: "",
    media: {
      images: [],
    },
    price: {
      current: {
        text: "",
      },
    },
    brand: {
      name: "",
    },
  });

  // const options = {
  //   method: "GET",
  //   url: "https://asos2.p.rapidapi.com/products/v3/detail",
  //   params: { id: selectedIdToString, lang: "en-US", store: "US", sizeSchema: "US", currency: "USD" },
  //   headers: {
  //     "X-RapidAPI-Key": "c30a5399bcmsh42dc8185eb498d0p148cd7jsn8b6acc1f7ea2",
  //     "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  //   },
  // };
  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v3/detail",
    params: { id: selectedIdToString, lang: "en-US", store: "US", sizeSchema: "US", currency: "USD" },
    headers: {
      "X-RapidAPI-Key": "ef133ce62dmshd721312341522d5p1fab5ajsn971767a772cf",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  React.useEffect(() => {
    try {
      FetchProduct();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const FetchProduct = async () => {
    const response: AxiosResponse = await axios.request(options);
    const products = response.data;
    setSelectedProduct(products);
    setImageShow(ImgToHttp(products.media.images[0]?.url));
  };

  const scrollRef = React.useRef<any>(null);
  const [chevronUp, setChevronUp] = React.useState(false);
  const [chevronDown, setChevronDown] = React.useState(false);

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
              <ul>
                {selectedProduct.media.images.map((image: any, idx) => (
                  <li
                    key={idx}
                    onMouseEnter={() => typeImageHandler(ImgToHttp(image.url))}
                    className="mb-4 hover:outline hover:outline-offset-[-3px] hover:outline-[3px] cursor-pointer"
                  >
                    <img src={ImgToHttp(image.url)} alt="img" />
                  </li>
                ))}
              </ul>
            </div>
            {chevronDown && (
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute bottom-0 h-6 p-2 bg-[#ffff] left-[8.333%] z-50 translate-x-[-50%] "
              />
            )}
            <div className="max-w-full lg:basis-[83.333%] lg:max-w-[83.333%] px-2 lg:ml-[16.666%] relative">
              <img src={imageShow} alt="imgProduct" className="w-full object-cover" />
              <div className="absolute p-1 bg-[#ffff] top-[8px] text-[12px] font-[700]  ">Novinka</div>
            </div>
          </div>
        </div>
        {/* content start */}
        <Product_info selectedProduct={selectedProduct} />
        {/* content end */}
      </div>
      {/* sliding products start */}
      <Sliding_products />
      {/* sliding products end */}
    </div>
  );
};

export default Product;
