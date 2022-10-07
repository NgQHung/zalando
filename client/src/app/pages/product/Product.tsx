import { faChevronDown, faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./Product.css";
import Product_info from "./product_info";
import Sliding_products from "./sliding_products";
import { ImgToHttp } from "../../../utils/imageToHTTP";
import { getDetailProduct } from "../../../stores/apiRequest";
import { Swiper, SwiperSlide } from "swiper/react";

const Product = () => {
  const selectedId = useAppSelector((state) => state.productSlice.selectedId);
  const selectedProduct = useAppSelector((state) => state.productSlice.selectedProduct);
  const firstImage = selectedProduct?.media?.images[0].url;

  const dispatch = useAppDispatch();
  const [imageShow, setImageShow] = React.useState<string>("");

  const scrollRef = React.useRef<any>(null);
  const [chevronUp, setChevronUp] = React.useState(false);
  const [chevronDown, setChevronDown] = React.useState(false);
  const [swipe, setSwipe] = React.useState(false);
  const [my_swiper, set_my_swiper] = React.useState<any>({});

  // const imgUrl = selectedProduct?.media.images

  const typeImageHandler = (image: string, index: number) => {
    console.log(index);
    setImageShow(ImgToHttp(image));
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
  React.useEffect(() => {
    try {
      getDetailProduct(dispatch, selectedId);
    } catch (error) {
      console.log(error);
    }
  }, []);
  React.useEffect(() => {
    setImageShow(ImgToHttp(firstImage!));
  }, [firstImage]);

  return (
    <div className=" md:mx-6 w-auto lg:mx-auto lg:my-0 lg:max-w-[1216px] ">
      <div className="flex md:flex-row md:mt-6 flex-wrap md:flex-nowrap">
        {/* images */}
        <div className=" basis-full md:sticky md:top-[24px] md:min-w-1/2 md:max-w-1/2 md:basis-1/2 flex md:self-start flex-wrap  ">
          <div className="relative flex flex-row w-full ">
            {chevronUp && (
              <FontAwesomeIcon
                icon={faChevronUp}
                className=" absolute top-0  h-6 p-2 bg-[#ffff] left-[8.333%] z-50 translate-x-[-50%]"
              />
            )}
            <div
              onScroll={onScrollHandler}
              ref={scrollRef}
              className="scrollbar_hide hidden lg:flex flex-col basis-[16.666%] max-w-[16.666%] md:px-2 absolute overflow-y-auto h-full "
            >
              <ul>
                {selectedProduct?.media.images.map((image, idx) => (
                  <li
                    key={idx}
                    onMouseEnter={() => typeImageHandler(image.url, idx)}
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
            <div
              className={
                "flex max-w-full basis-full lg:basis-[83.333%] lg:max-w-[83.333%] lg:ml-[16.666%] overflow-x-auto scrollbar_hidden"
              }
            >
              <img src={imageShow} alt="imgProduct" className="hidden lg:inline w-full object-cover" />

              <div className="lg:hidden flex ">
                <div className="flex ">
                  {selectedProduct?.media.images.map((image: any, idx) => (
                    <img key={idx} className="min-w-full h-auto object-cover" src={ImgToHttp(image.url)} alt="img" />
                  ))}
                </div>
                <FontAwesomeIcon
                  onClick={() => my_swiper.slideNext()}
                  icon={faChevronRight}
                  className="absolute right-0 top-1/2 translate-y-[-50%] bg-[#ffff] h-6 p-2 cursor-pointer"
                />
              </div>

              <div className="absolute p-1 bg-[#ffff] top-[8px] text-[12px] font-[700]">Novinka</div>
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
