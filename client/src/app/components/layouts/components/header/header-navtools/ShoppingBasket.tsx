import React, { Fragment } from "react";
import { productShoppingCart } from "../../../../../../interfaces/ProductShoppingCart";
import { actionActions } from "../../../../../../stores/action-slice";
import { formatPrice } from "../../../../../../utils/formatPrice";
import { ImgToHttp } from "../../../../../../utils/imageToHTTP";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import "./navtools.css";

const ShoppingBasket = () => {
  const addedShoppingCart = useAppSelector((state) => state.actionSlice.addedShoppingCart);
  const total = useAppSelector((state) => state.actionSlice.total);
  const lengthAddedShoppingCart = addedShoppingCart.length;
  const dispatch = useAppDispatch();
  const removeProductShoppingCartHandler = (id: number) => {
    dispatch(actionActions.removeShoppingCartHandler({ id: id }));
  };
  const addProductFavoriteHandler = (product: productShoppingCart) => {
    dispatch(actionActions.addFavoriteHandler(product));
  };

  return (
    <Fragment>
      <div className="absolute w-[336px] bg-white top-full right-[-1px] border border-black z-50 ">
        {lengthAddedShoppingCart === 0 ? (
          <Fragment>
            <div className="text-center">
              <div className="mt-[24px] text-[16px] font-[700]">
                <p>VÁŠ NÁKUPNÍ KOŠÍK JE PRÁZDNÝ</p>
              </div>
              <div className="px-[24px] text-[12px]">
                <p>Jděte a splňte si své módní sny a touhy.</p>
              </div>
            </div>
            <div className="bg-[#eeee] text-[#1a1a1a] w-full h-full text-center">
              <div className="pt-[36px] pb-[23px] px-[20px]  ">
                <div className="text-[16px] font-[700]">
                  <p>NEVÍTE, KDE ZAČÍT?</p>
                </div>
                <div className="effect_bg relative text-[12px] mt-[16px] border border-[#1a1a1a] ">
                  <div className="z-50">
                    <button className="py-[8px] px-[14px] font-[700]">
                      <span className=" relative z-50">Podívejte se, co je nového</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <div className="text-center">
            <p className="text-[16px] mt-[24px] px-[36px] font-[700]">VÁŠ NÁKUPNÍ KOŠÍK</p>
            {addedShoppingCart.map((product: productShoppingCart) => (
              <div key={product.id} className="flex text-[14px] flex-col">
                <div className="flex py-[18px] text-[12px] px-[15px]">
                  <div className="py-3 px-2 self-start shrink-0">
                    <img src={ImgToHttp(product.imageUrl)} alt="photos" className="h-[96px] object-cover " />
                  </div>
                  <div className="flex flex-col grow py-3 px-2">
                    <div className=" ml-[15px] leading-[18px] ">
                      <div className="flex">
                        <div className="max-w-[100px] text-left">
                          <p>{product.brand}</p>
                          <p className="pt-[5px] leading-[23px] whitespace-nowrap text-ellipsis max-w-[200px] overflow-hidden ">
                            {product.name}
                          </p>
                        </div>
                        <div className="flex flex-col w-full text-[10px] text-right  ">
                          <span className="text-[14px] text-[#eb0037] mt-[2px] font-[700]">
                            {formatPrice(product.currentPrice)}
                          </span>
                          <span>{formatPrice(product.previousPrice)}</span>
                        </div>
                      </div>
                      <div className="text-left">
                        <p>{product.size}</p>
                        <p>{product.amount}</p>
                      </div>
                    </div>
                    <div className="flex mt-[22px] flex-col text-left ml-[15px] leading-[20px] text-[#999] tracking-[0.5px] cursor-pointer  ">
                      <div>
                        <span onClick={() => addProductFavoriteHandler(product)} className="text-[10px] affect_text">
                          Přesunout na seznam přání
                        </span>
                      </div>
                      <div>
                        <span
                          onClick={() => removeProductShoppingCartHandler(product.id)}
                          className="text-[10px] cursor-pointer affect_text"
                        >
                          Odebrat položku
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="px-[18px] flex justify-between items-center text-[14px]">
              <p className="self-start leading-[20px]">Doprava</p>
              <p className="self-end leading-[20px]">0.00</p>
            </div>
            <div className="py-2 px-[18px] flex justify-between items-center">
              <p className="text-[12px] text-left ">Celkem(Vč. DPH)</p>
              <p className="self-end text-[16px] font-bold leading-[23px]">{formatPrice(total)}</p>
            </div>
            <div className=" pb-[18px] text-[14px] px-[18px] leading-[18px]  hover:opacity-70 text-center text-[#ffff] ">
              <button className="px-4  py-[10px] rounded-sm bg-[#1a1a1a] w-full font-[700]">
                <span className="">Přejít do nákupního košíku</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ShoppingBasket;
