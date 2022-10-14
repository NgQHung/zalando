import React, { Fragment, useMemo } from "react";
import Content from "../../components/layouts/container";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Products } from "../../../interfaces/Products";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { productActions } from "../../../stores/product-slice";
import { Link } from "react-router-dom";
import { cartActions } from "../../../stores/cart-slice";

export const Home = () => {
  const dispatch = useAppDispatch();
  const products_1 = useAppSelector((state) => state.productSlice.products_1);

  const products_2 = useAppSelector((state) => state.productSlice.products_2);
  const [favoriteAnimated, setFavoriteAnimated] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<any>();
  const selectedProductHandler = (id: number) => {
    dispatch(productActions.selectedIdHandler(id));
  };

  const favoriteHandler = (selectedProduct: Products) => {
    const product = products_1.find((item) => item.id === selectedProduct.id);
    const initProduct = { ...product, isFavorite: false };
    const updateProduct = { ...initProduct, isFavorite: true };
    if (product) {
      setFavoriteAnimated((prev) => !prev);
    }
    if (!favoriteAnimated) {
      setSelectedProduct(updateProduct);
    } else {
      setSelectedProduct(initProduct);
    }
  };

  React.useEffect(() => {
    // console.log(selectedProduct);
    if (selectedProduct) {
      dispatch(cartActions.addFavoriteHandler(selectedProduct));
    }

    if (!selectedProduct?.isFavorite) {
      dispatch(cartActions.removeFavorite(selectedProduct));
    }
  }, [selectedProduct]);

  // mobile

  return (
    <Fragment>
      <div>
        <Content bg_color="bg-[#229967] ">
          <div className="flex flex-col w-full h-full">
            <div className="pt-[24px] flex justify-between w-full ">
              <div className="mt-[36px] px-[8px]">
                <p className="text-[32px] font-[700] leading-[2.25rem]">Klasické tenisky</p>
                <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">Objevte nadčasové modely</p>
                <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700]">Zobrazit víc</p>
              </div>
              <div>
                <img
                  src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
                  alt="img"
                />
              </div>
            </div>
            <div className="row_full h-[584px] bg-[#34d27b] mb-[64px]">
              <div className=" flex pt-[36px] pb-[24px] text-[14px] ">
                {products_1.map((item: Products) => (
                  <div key={item.id} onClick={() => selectedProductHandler(item.id)} className="first:ml-[152px]">
                    <div
                      onClick={() => favoriteHandler(item)}
                      className="relative h-[415px] w-[296px] px-[8px] cursor-pointer"
                    >
                      <span className="absolute bg-[#ffff] top-2 right-2">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className={
                            "fa-thin p-[8px] text-[24px]  " +
                            (selectedProduct?.id === item.id && favoriteAnimated ? "favorite_added-active" : "")
                          }
                        />
                      </span>
                      <Link to={`/${item.name}`}>
                        <img
                          className="w-[288px] h-[415px] object-cover"
                          src={`https://${item.imageUrl}`}
                          alt="product"
                        />
                        <div className=" leading-[20px] pt-2">
                          <div className="pb-[8px]">
                            <h3>{item.brandName}</h3>
                            <h3>{item.name}</h3>
                          </div>
                          <div className="flex flex-col leading-[1.25rem] text-[700]">
                            <span>{item.price.current.text}</span>
                            {item.price.previous.value !== null && (
                              <div className="text-[12px] leading-[16px]">
                                <span>Původně:</span>
                                <span>{item.price.previous.text}</span>
                                <span>20%</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
                <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
              </div>
            </div>
          </div>
        </Content>
        <Content bg_color="bg-[#a3a505] ">
          <div className="flex flex-col w-full h-full">
            <div className="pt-[24px] flex justify-between w-full ">
              <div className="mt-[36px] px-[8px]">
                <p className="text-[32px] font-[700] leading-[2.25rem]">Klasické tenisky</p>
                <p className="text_tiempos text-[32px] font-[400] leading-[2.25rem]">Objevte nadčasové modely</p>
                <p className="text-[16px] pt-[24px] leading-[1.5rem] font-[700]">Zobrazit víc</p>
              </div>
              <div>
                <img
                  src="https://img01.ztat.net/banner/a115499feaab412b8690d8e381f92b93/980c2102f2ea439eae997c678faf6158.jpg?imwidth=693"
                  alt="img"
                />
              </div>
            </div>
            <div className="row_full h-[584px] bg-[#e3e707] mb-[64px]">
              <div className=" flex pt-[36px] pb-[24px] text-[14px] ">
                {products_2.map((item: Products) => (
                  <Link
                    to={`/${item.name}`}
                    key={item.id}
                    onClick={() => selectedProductHandler(item.id)}
                    className="first:ml-[152px]"
                  >
                    <div
                      onClick={() => favoriteHandler(item)}
                      className="relative h-[415px] w-[296px] px-[8px] cursor-pointer"
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={
                          "fa-thin p-[8px] text-[24px] absolute bg-[#ffff] top-2 right-2 " +
                          (favoriteAnimated ? "favorite_added-active" : "")
                        }
                      />
                      <img
                        className="w-[288px] h-[415px] object-cover"
                        src={`https://${item.imageUrl}`}
                        alt="product"
                      />
                      <div className=" leading-[20px] pt-2">
                        <div className="pb-[8px]">
                          <h3>{item.brandName}</h3>
                          <h3>{item.name}</h3>
                        </div>
                        <div className="flex flex-col leading-[1.25rem] text-[700]">
                          <span>{item.price.current.text}</span>
                          {item.price.previous.value !== null && (
                            <div className="text-[12px] leading-[16px]">
                              <span>Původně:</span>
                              <span>{item.price.previous.text}</span>
                              <span>20%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="absolute bg-[#ffff] right-[152px] top-1/2 translate-y-[-50%]">
                <FontAwesomeIcon icon={faArrowRight} className="p-2 text-[24px]" />
              </div>
            </div>
          </div>
        </Content>
      </div>
    </Fragment>
  );
};

// export default Home;
