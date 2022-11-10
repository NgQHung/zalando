import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/formatPrice";
import Wrapper from "../../components/UI/wrapper/wrapper";
import { useAppSelector } from "../../hooks";
import { paymentMethods } from "./data";

const Payment = () => {
  const total = useAppSelector((state) => state.cartSlice.total);

  return (
    <Wrapper className="">
      <>
        <div className="flex gap-[24px]">
          <div className="mt-[36px] basis-1/2 max-w-1/2">
            <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">ZPŮSOB PLATBY</h2>
            <div className="mt-[24px]">
              <ul className="text-[16px] leading-[24px]">
                {paymentMethods.map((method, idx) => (
                  <li key={idx} className="flex items-center py-[16px]">
                    <input type="checkbox" />
                    <span className="pl-9">{method.title}</span>
                    <div className="ml-auto flex space-x-1">
                      {method.imgUrl.map((url) => (
                        <img
                          className="w-[48px] border border-gray-300 rounded-md h-[32px] object-cover"
                          src={url}
                          alt={method.title}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-[36px] basis-1/2 max-w-1/2">
            <Link to="/checkout/confirm">
              <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">POUKAZ (Volitelné)</h2>
            </Link>
            <div className="mt-[24px] text-[14px] leading-[20px] tracking-[0.5px]">
              <p className="mb-6">
                Slevový poukaz: vyberte požadovaný způsob platby a zadejte číslo slevového poukazu v následujícím kroku
              </p>
              <p>
                Dárkový poukaz: Je-li hodnota dárkového poukazu vyšší nebo rovna celkové ceně objednávky, tento krok
                přeskočte výběrem jakéhokoliv typu platby a číslo dárkového poukazu zadejte na následující stránce
              </p>
              <div className="mt-[36px] py-4 bg-gray-100 font-[700] text-[16px] leading-[17px]">
                <div className="flex uppercase justify-between items-center p-2 m-4 border-b border-gray-300 mb-[12px]">
                  <p>Doprava</p>
                  <p>Zdarma</p>
                </div>
                <div className="flex uppercase justify-between items-center p-2 m-4 mb-[12px]">
                  <p>
                    Celkem <span className="text-gray-500 font-medium text-[14px] leading-[16px]">(Vč. DPH)</span>
                  </p>
                  <p>{formatPrice(total)}</p>
                </div>
                <div className="text-center mx-6 mb-[24px]">
                  <button className="bg-[#ff4e00] text-[#ffff] w-full px-6 font-[700] flex-wrap tracking-[0.5px] py-[10px] min-h-[40px] leading-[18px] text-[12px]  ">
                    OBJEDNÁVEJTE A PLAŤTE NA DOBÍRKU
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default Payment;
