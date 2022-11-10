import React from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../utils/formatPrice";
import { ImgToHttp } from "../../../utils/imageToHTTP";
import Wrapper from "../../components/UI/wrapper/wrapper";
import { useAppSelector } from "../../hooks";

const Confirm = () => {
  const addedShoppingCart = useAppSelector((state) => state.cartSlice.addedShoppingCart);
  const total = useAppSelector((state) => state.cartSlice.total);
  const navigate = useNavigate();
  return (
    <Wrapper className="">
      <>
        <div className="payment-sumary mt-[36px]">
          <div className="flex justify-between items-center pb-[12px] border-b border-gray-300">
            <h2 className="uppercase self-end font-[700]">Shrnutí objednávky</h2>
            <button
              onClick={() => navigate("/checkout/done")}
              className="bg-[#ff4e00] text-[#ffff] font-[700] flex-wrap tracking-[0.5px] py-[10px] px-[16px] min-h-[40px] leading-[18px] text-[12px] w-[250px] "
            >
              OBJEDNÁVEJTE A PLAŤTE NA DOBÍRKU
            </button>
          </div>
          <div className="flex gap-[24px]">
            <div className="flex flex-col basis-1/2 max-w-1/2">
              <div className="mt-[36px]">
                <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">Možnost dopravy</h2>
                <div className="flex mt-[24px] px-[15px]">
                  <div className=" pr-[15px] py-[6px] relative top-1/2 translate-y-1/3 ">
                    <div className=" border border-[#ff4e00] w-[26px] h-[26px] rounded-[15px] absolute top-0 left-[-7px] "></div>
                    <input type="radio" name="radio" />
                  </div>

                  <div className="text-[16px] leading-[24px]">
                    <p className="font-[700]">Po, 14.11. - St, 16.11.</p>
                    <p className="text-[14px]">Standardní doručení</p>
                    <p className="text-[14px] font-[700]">Zdarma</p>
                  </div>
                </div>
              </div>
              <div className="mt-[36px]">
                <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">Objednávka</h2>
                <div className="flex flex-col mt-[24px]">
                  <p>Balíček doručí Zalando</p>
                  <p className="font-[700]">Po, 14.11. - St, 16.11.</p>
                  {addedShoppingCart.map((product, idx) => (
                    <div key={idx} className="flex py-[4px] text-[14px] leading-[20px]">
                      <div className="py-3 self-start shrink-0">
                        <img
                          src={ImgToHttp(product?.imageUrl)}
                          alt="photos"
                          className="w-[120px] h-auto object-cover "
                        />
                      </div>
                      <div className="flex flex-col grow py-3 px-2">
                        <div className=" ml-[15px] leading-[18px] ">
                          <div className="max-w-[400px] text-left ">
                            <p className="font-[700]">{product.brandName}</p>
                            <p className="leading-[23px] whitespace-nowrap text-ellipsis max-w-[400px] overflow-hidden ">
                              {product.name}
                            </p>
                          </div>
                          <div>
                            <span className=" pr-1">Size:</span> {product?.size}
                          </div>
                          <div className="flex flex-col text-[10px] pt-2 ">
                            <span className="text-[14px] mt-[2px] font-[700]">{formatPrice(product.currentPrice)}</span>
                            {product.previousPrice && <span>{formatPrice(product.previousPrice)}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col basis-1/2 max-w-1/2 ">
              <div className="mt-[36px]">
                <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">DORUČOVACÍ ADRESA</h2>
                <div className=" mt-[24px] text-[14px] leading-[20px]">
                  <div className="address-name mt-[24px] mb-[4px]">Hung Nguyen Quang</div>
                  <div className="address mb-[4px]">Your address and number of your address...</div>
                  <div className="address mb-[4px]">Your city...</div>
                  <div className="address mb-[4px]">Your country...</div>
                </div>
              </div>
              <div className="mt-[36px]">
                <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">FAKTURAČNÍ ADRESA</h2>
                <div className=" mt-[24px] text-[14px] leading-[20px]">
                  <p>Stejná jako doručovací adresa</p>
                </div>
              </div>
              <div className="mt-[36px]">
                <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">ZPŮSOB PLATBY</h2>
                <div className=" mt-[24px] text-[14px] leading-[20px]">
                  <p>Platba na dobírku</p>
                </div>
              </div>
              <div className="mt-[36px]">
                <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">POUKAZ</h2>
                <div className=" mt-[24px] text-[14px] leading-[20px]">
                  <input
                    placeholder="Enter your code"
                    type="text"
                    className="border border-[#dddd] h-[42px] w-full p-4"
                  />
                </div>
              </div>
              <div className="mt-[36px] bg-gray-100 font-[700] text-[16px] leading-[17px]">
                <div className="flex uppercase justify-between items-center p-2 m-4 border-b border-gray-300 mb-[12px]">
                  <p>Doprava</p>
                  <p>0,00kc</p>
                </div>
                <div className="flex uppercase justify-between items-center p-2 m-4 mb-[12px]">
                  <p>
                    Celkem <span className="text-gray-500 font-medium text-[14px] leading-[16px]">(Vč. DPH)</span>
                  </p>
                  <p>{formatPrice(total)}</p>
                </div>
                <div className="text-center mx-6 mb-[24px]">
                  <button
                    onClick={() => navigate("/checkout/done")}
                    className="bg-[#ff4e00] text-[#ffff] w-full px-6 font-[700] flex-wrap tracking-[0.5px] py-[10px] min-h-[40px] leading-[18px] text-[12px]  "
                  >
                    OBJEDNÁVEJTE A PLAŤTE NA DOBÍRKU
                  </button>
                </div>
              </div>
              <div className="mt-[36px] text-[12px] leading-[18px] tracking-[0.5px]">
                <p>
                  Zadáním objednávky sohlasíte s našimi zásadami ochrany soukromí, všeobecnými obchodními podmínkami a
                  podmínkami zrušení objednávek. Občas vám můžeme posílat doporučení některých produktů. Nebojte se, z
                  jejich odběru se můžete odhlásit kdykoli kliknutím na odkaz v našem e-mailu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default Confirm;
