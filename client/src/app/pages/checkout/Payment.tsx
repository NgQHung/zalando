import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkoutActions } from "../../../stores/checkout-slice";
import { formatPrice } from "../../../utils/formatPrice";
import Wrapper from "../../components/UI/wrapper/wrapper";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { paymentMethods } from "./data";

const Payment = () => {
  const total = useAppSelector((state) => state.cartSlice.total);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const methodPayment = useAppSelector((state) => state.checkoutSlice.methodPayment);
  const [inputValue, setInputValue] = useState(methodPayment);
  const [theLastPurchasedMethodPayment, setTheLastPurchasedMethodPayment] = useState<string>("");
  const InstantTransfer = methodPayment === "InstantTransfer";
  const CreditCard = methodPayment === "CreditCard";
  const PayPal = methodPayment === "PayPal";
  const BankTransfer = methodPayment === "BankTransfer";
  const OnDelivery = methodPayment === "OnDelivery";

  const theLastInstantTransfer = theLastPurchasedMethodPayment === "InstantTransfer";
  const theLastCreditCard = theLastPurchasedMethodPayment === "CreditCard";
  const theLastPayPal = theLastPurchasedMethodPayment === "PayPal";
  const theLastBankTransfer = theLastPurchasedMethodPayment === "BankTransfer";
  const theLastOnDelivery = theLastPurchasedMethodPayment === "OnDelivery";
  const allPurchasedProducts = useAppSelector((state) => state.checkoutSlice.allPurchasedProducts);

  useEffect(() => {
    if (allPurchasedProducts) {
      const theLastIndexPurchase = allPurchasedProducts.length - 1;
      if (theLastIndexPurchase >= 0) {
        setTheLastPurchasedMethodPayment(allPurchasedProducts[theLastIndexPurchase].methodPayment);
      }
    }
  }, []);

  const methodOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.currentTarget.value;
    setInputValue(type);
  };

  const methodPaymentHandler = (typeMethod: string) => {
    dispatch(checkoutActions.methodPaymentHandler(typeMethod));
    setTheLastPurchasedMethodPayment("");
  };

  useEffect(() => {
    setIsChecked(inputValue === methodPayment);
  }, [methodPayment, inputValue]);

  return (
    <Wrapper className="">
      <>
        <div className="flex gap-[24px]">
          <div className="mt-[36px] basis-1/2 max-w-1/2 ml-[8.33333%] px-3">
            <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">ZP??SOB PLATBY</h2>
            <div className="mt-[24px] text-[16px] leading-[24px] relative">
              <ul>
                {paymentMethods.map((method, idx) => (
                  <li key={idx} className={"flex flex-col py-[16px]  "}>
                    <div className={"flex items-center "}>
                      <div className=" pr-[15px] py-[6px] relative top-1/2 ">
                        <div className="border border-[#1a1a1a] w-[26px] h-[26px] rounded-[15px]  top-[5px] left-[-6.8px] hover:outline-2px outline_onHover absolute"></div>
                        <input
                          onChange={methodOnChange}
                          checked={
                            (isChecked && methodPayment === method.type) ||
                            theLastPurchasedMethodPayment === method.type
                          }
                          onClick={() => methodPaymentHandler(method.type)}
                          className="h-0 w-0"
                          type="radio"
                          name={method.type}
                          value={method.type}
                        />
                      </div>
                      <span className="pl-9">{method.title}</span>
                      <div className="ml-auto flex space-x-1">
                        {method.imgUrl ? (
                          <>
                            {method?.imgUrl.map((url, index) => (
                              <img
                                key={index}
                                className="w-[48px] border border-gray-300 rounded-md h-[32px] object-cover"
                                src={url}
                                alt={method.title}
                              />
                            ))}
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div
                      className={
                        "methodDropdown-hidden " +
                        (method.type === methodPayment ||
                        (theLastPurchasedMethodPayment === method.type && theLastInstantTransfer)
                          ? "methodDropdown-show"
                          : "")
                      }
                    >
                      <div className="">
                        {(InstantTransfer && method.type === methodPayment) ||
                        theLastPurchasedMethodPayment === method.type ? (
                          <p className="mb-2 mt-6 ml-9">
                            Po potvrzen?? objedn??vky budete p??esm??rov??ni na str??nku GoPay (via Przelewy24), kde budete
                            moci prov??st p????mou platbu p??evodem ze sv?? banky. V sou??asnosti je slu??ba k dispozici pro
                            klienty ??esk?? spo??itelny, ??SOB, Komer??n?? banky, Raiffeisen Bank, mBank a FIO Bank. Po
                            ??sp????n??m proveden?? platby bude objedn??vka dokon??ena.
                          </p>
                        ) : null}
                        {(CreditCard && method.type === methodPayment) ||
                        (theLastPurchasedMethodPayment === method.type && theLastCreditCard) ? (
                          <div className="mb-2 mt-6 ml-9 space-y-[32px]">
                            <div className=" flex p-4 bg-[#efeff0] text-[14px] leading-[20px] tracking-0 ">
                              <FontAwesomeIcon className="mr-2 h-5 w-5 object-cover" icon={faCircleInfo} />
                              <div>
                                <p className="font-[700] flex-wrap">
                                  Podm??nky platby kartou v Evropsk?? unii se zm??nily.
                                </p>
                                <p className="flex-wrap">
                                  Nyn?? budete muset p??i ka??d?? platb?? online ov????it svoji toto??nost. Spojte se se svoj??
                                  bankou, abyste si mohli identifika??n?? proces nastavit.
                                </p>
                                <p className="mt-4 cursor-pointer font-[700]">
                                  <span className="pb-1 border-b-[2px] border-[#1a1a1a]">V??ce informac??</span>
                                </p>
                              </div>
                            </div>
                            <div className="">
                              <div className=" pr-[15px] py-[6px] relative top-1/2 ">
                                <div className="border border-[#1a1a1a] w-[26px] h-[26px] rounded-[15px]  top-[5px] left-[-6.8px] hover:outline-2px outline_onHover absolute"></div>
                                <input className="h-0 w-0" defaultChecked={true} type="radio" name="radio" />
                                <span className="pl-9">Nov?? kreditn?? nebo debetn?? karta</span>
                              </div>
                              <div className="mb-2 mt-6 ml-9 space-y-4 text-[14px] leading-[20px] tracking-[0.5px] font-[700]">
                                <div className="space-y-1">
                                  <h4>Dr??itel karty</h4>
                                  <input
                                    className="p-3 border border-[#1a1a1a] rounded-[3px] w-[300px] h-[40px]"
                                    type="text"
                                    name=""
                                    id=""
                                  />
                                </div>
                                <div className="space-y-1">
                                  <h4>????slo karty</h4>
                                  <input
                                    className="p-3 border border-[#1a1a1a] rounded-[3px] w-[300px] h-[40px]"
                                    type="text"
                                    name=""
                                    id=""
                                  />
                                </div>
                                <div className="space-y-1">
                                  <h4>Datum platnosti</h4>
                                  <input
                                    className="p-3 border border-[#1a1a1a] rounded-[3px] w-[100px] h-[40px]"
                                    type="text"
                                    name=""
                                    id=""
                                  />
                                </div>
                                <div className="space-y-1">
                                  <h4>Bezpe??nostn?? k??d</h4>
                                  <input
                                    className="p-3 border border-[#1a1a1a] rounded-[3px] w-[100px] h-[40px]"
                                    type="text"
                                    name=""
                                    id=""
                                  />
                                </div>
                                <div className=" pr-[15px] py-[6px] relative top-1/2 flex items-center">
                                  <div className="border border-[#1a1a1a] w-[26px] h-[26px] rounded-[15px]  top-0 left-[-0.8px] hover:outline-2px outline_onHover absolute"></div>
                                  <input className="h-0 w-0 " type="radio" name="radio" />
                                  <span className="pl-9 font-normal">
                                    Ukl??dejte bezpe??n?? sv?? platebn?? ??daje pro budouc?? n??kupy
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {(PayPal && method.type === methodPayment) ||
                        (theLastPurchasedMethodPayment === method.type && theLastPayPal) ? (
                          <p className="mb-2 mt-6 ml-9">
                            Budete p??esm??rov??ni p????mo na slu??bu PayPal, kde budete moci platbu dokon??it.
                          </p>
                        ) : null}
                        {(BankTransfer && method.type === methodPayment) ||
                        (theLastPurchasedMethodPayment === method.type && theLastBankTransfer) ? (
                          <p className="mb-2 mt-6 ml-9">
                            Po vytvo??en?? objedn??vky v??m za??leme instrukce, jak pen??ze p??ev??st bankovn??m p??evodem na n????
                            ????et. Objednan?? produkty v??m m????eme rezervovat jen po dobu 7 dn??, tak pros??m nev??hejte. ????m
                            d????ve obdr????me va??i platbu, t??m d????ve budeme moci va??i z??silku odeslat.
                          </p>
                        ) : null}
                        {(OnDelivery && method.type === methodPayment) ||
                        (theLastPurchasedMethodPayment === method.type && theLastOnDelivery) ? (
                          <p className="mb-2 mt-6 ml-9">
                            V sou??asn?? dob?? se v??ichni sna????me omezit p????m?? osobn?? kontakt, proto v??s pros??me, abyste
                            pokud mo??no zvolili jednu z bezkontaktn??ch platebn??ch metod. Pokud se p??eci jen rozhodnete
                            pro dob??rku, p??ipravte pros??m pro kur??ra hotovost p??esn??.
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-[36px] basis-1/3 max-w-1/3 px-3">
            <Link to="/checkout/confirm">
              <h2 className="uppercase pb-[6px] font-[700] border-b border-gray-300">POUKAZ (Voliteln??)</h2>
            </Link>
            <div className="mt-[24px] text-[14px] leading-[20px] tracking-[0.5px]">
              <p className="mb-6">
                Slevov?? poukaz: vyberte po??adovan?? zp??sob platby a zadejte ????slo slevov??ho poukazu v n??sleduj??c??m kroku
              </p>
              <p>
                D??rkov?? poukaz: Je-li hodnota d??rkov??ho poukazu vy?????? nebo rovna celkov?? cen?? objedn??vky, tento krok
                p??esko??te v??b??rem jak??hokoliv typu platby a ????slo d??rkov??ho poukazu zadejte na n??sleduj??c?? str??nce
              </p>
              <div className="mt-[36px] py-4 bg-gray-100 font-[700] text-[16px] leading-[17px]">
                <div className="flex uppercase justify-between items-center p-2 m-4 border-b border-gray-300 mb-[12px]">
                  <p>Doprava</p>
                  <p>Zdarma</p>
                </div>
                <div className="flex uppercase justify-between items-center p-2 m-4 mb-[12px]">
                  <p>
                    Celkem <span className="text-gray-500 font-medium text-[14px] leading-[16px]">(V??. DPH)</span>
                  </p>
                  <p>{formatPrice(total)}</p>
                </div>
                <div className="text-center mx-6 mb-[24px]">
                  <button
                    onClick={() => navigate("/checkout/confirm")}
                    className="bg-[#ff4e00] text-[#ffff] w-full px-6 font-[700] flex-wrap tracking-[0.5px] py-[10px] min-h-[40px] leading-[18px] text-[12px]  "
                  >
                    OBJEDN??VEJTE A PLA??TE NA DOB??RKU
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
