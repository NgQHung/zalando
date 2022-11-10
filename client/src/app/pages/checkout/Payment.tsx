import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../../../utils/formatPrice";
import Wrapper from "../../components/UI/wrapper/wrapper";
import { useAppSelector } from "../../hooks";
import { paymentMethods } from "./data";

const Payment = () => {
  const total = useAppSelector((state) => state.cartSlice.total);
  const navigate = useNavigate();
  const [methodContent, setMethodContent] = useState<string>("");
  const InstantTransfer = methodContent === "InstantTransfer";
  const CreditCard = methodContent === "CreditCard";
  const PayPal = methodContent === "PayPal";
  const BankTransfer = methodContent === "BankTransfer";
  const OnDelivery = methodContent === "OnDelivery";

  return (
    <Wrapper className="">
      <>
        <div className="flex gap-[24px]">
          <div className="mt-[36px] basis-1/2 max-w-1/2">
            <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">ZPŮSOB PLATBY</h2>
            <div className="mt-[24px] text-[16px] leading-[24px] relative">
              <ul>
                {paymentMethods.map((method, idx) => (
                  <li key={idx} className={"flex flex-col py-[16px]  "}>
                    <div className={"flex items-center "}>
                      <div className=" pr-[15px] py-[6px] relative top-1/2 ">
                        <div className="border border-[#1a1a1a] w-[26px] h-[26px] rounded-[15px]  top-[5px] left-[-6.8px] hover:outline-2px outline_onHover absolute"></div>
                        <input
                          onClick={() => setMethodContent(method.type)}
                          className="h-0 w-0"
                          type="radio"
                          name="radio"
                        />
                      </div>
                      {/* { <div>hello</div>} */}
                      <span className="pl-9">{method.title}</span>
                      <div className="ml-auto flex space-x-1">
                        {method.imgUrl.map((url, index) => (
                          <img
                            key={index}
                            className="w-[48px] border border-gray-300 rounded-md h-[32px] object-cover"
                            src={url}
                            alt={method.title}
                          />
                        ))}
                      </div>
                    </div>
                    <div
                      className={
                        "methodDropdown-hidden " + (methodContent === method.type ? "methodDropdown-show" : "")
                      }
                    >
                      <div className="">
                        {InstantTransfer && method.type === methodContent ? (
                          <p className="mb-2 mt-6 ml-9">
                            Po potvrzení objednávky budete přesměrováni na stránku GoPay (via Przelewy24), kde budete
                            moci provést přímou platbu převodem ze své banky. V současnosti je služba k dispozici pro
                            klienty České spořitelny, ČSOB, Komerční banky, Raiffeisen Bank, mBank a FIO Bank. Po
                            úspěšném provedení platby bude objednávka dokončena.
                          </p>
                        ) : null}

                        {PayPal && method.type === methodContent ? (
                          <p className="mb-2 mt-6 ml-9">
                            Budete přesměrováni přímo na službu PayPal, kde budete moci platbu dokončit.
                          </p>
                        ) : null}
                        {BankTransfer && method.type === methodContent ? (
                          <p className="mb-2 mt-6 ml-9">
                            Po vytvoření objednávky vám zašleme instrukce, jak peníze převést bankovním převodem na náš
                            účet. Objednané produkty vám můžeme rezervovat jen po dobu 7 dnů, tak prosím neváhejte. Čím
                            dříve obdržíme vaši platbu, tím dříve budeme moci vaši zásilku odeslat.
                          </p>
                        ) : null}
                        {OnDelivery && method.type === methodContent ? (
                          <p className="mb-2 mt-6 ml-9">
                            V současné době se všichni snažíme omezit přímý osobní kontakt, proto vás prosíme, abyste
                            pokud možno zvolili jednu z bezkontaktních platebních metod. Pokud se přeci jen rozhodnete
                            pro dobírku, připravte prosím pro kurýra hotovost přesně.
                          </p>
                        ) : null}
                      </div>
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
                  <button
                    onClick={() => navigate("/checkout/confirm")}
                    className="bg-[#ff4e00] text-[#ffff] w-full px-6 font-[700] flex-wrap tracking-[0.5px] py-[10px] min-h-[40px] leading-[18px] text-[12px]  "
                  >
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
