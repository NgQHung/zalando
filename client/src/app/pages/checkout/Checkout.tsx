import { faHouse, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/UI/wrapper/wrapper";
import CheckoutAddressForm from "../../containers/checkout/checkout-address-form";
import { useAppSelector } from "../../hooks";

const Checkout = () => {
  const [addressIsClicked, setAdressIsClicked] = useState(false);
  const [selectTypeDelivery, setSelectTypeDelivery] = useState(false);
  const addressDelivery = useAppSelector((state) => state.checkoutSlice.addressDelivery);
  const navigate = useNavigate();

  return (
    <>
      {addressIsClicked ? (
        <Wrapper className="grow">
          <div className="flex tracking-[0.5px] gap-[24px]">
            <div className="flex flex-col gap-[24px] basis-1/2">
              <div className="delivery-address text-[14px]">
                <h2 className="pb-[12px] font-[700] text-[16px] leading-[24px] border-b border-gray-300">
                  DORUČOVACÍ ADRESA
                </h2>
                <div className="address-name mt-[24px] mb-[4px]">{addressDelivery.firstName}</div>
                <div className="address mb-[4px]">{addressDelivery.address}</div>
                <div className="address mb-[4px]">{addressDelivery.city}</div>
                <div className="address mb-[4px]">Ceska Republika</div>
              </div>
              <div className="delivery-contact text-[14px]">
                <h2 className="uppercase pb-[12px] font-[700] text-[16px] leading-[24px] border-b border-gray-300">
                  Kontaktní údaje
                </h2>
                <p className="flex-wrap mb-[12px] mt-[24px]">
                  Prosíme o poskytnutí preferovaného telefonního čísla, na které v den dodání obdržíte zprávu o
                  přibližném čase doručení s kontaktními údaji vašeho řidiče.
                </p>
                <p className="mb-[6px]">Číslo mobilního telefonu (Volitelné)</p>
                <input
                  placeholder="Enter your phone number"
                  type="text"
                  className="border border-[#dddd] h-[42px] w-full p-4"
                />
              </div>
            </div>
            <div className="billing-address basis-1/2">
              <h2 className="uppercase pb-[12px] font-[700] text-[16px] leading-[24px] border-b border-gray-300">
                Fakturační adresa
              </h2>
              <p className="my-[24px]">Stejná jako doručovací adresa</p>
              <button
                onClick={() => navigate("/checkout/payment")}
                className="w-full h-[40px] text-[12px] leading-[18px] text-[#ffff] font-[700] uppercase tracking-[0.5px] bg-[#ff4e00]"
              >
                <span>Další</span>
              </button>
            </div>
          </div>
        </Wrapper>
      ) : (
        <div className="delivery flex flex-col max-w-4/5 basis-4/5 ">
          {/* <div className="flex flex-col max-w-4/5 basis-4/5 "> */}
          <div className="delivery-title grow pb-2 border-b border-gray-300 text-left text-[16px] leading-[24px] tracking-[0.5px] font-[700]">
            DORUČOVACÍ ADRESA
          </div>
          <div className="delivery-content w-full flex gap-[24px] py-[24px]">
            <div className="delivery-point md:min-w-[300px] cursor-pointer h-[100px] grow flex justify-center items-center border border-gray-300 ">
              <span>Výdejní místo</span>
            </div>
            <div
              onClick={() => setSelectTypeDelivery((prev) => !prev)}
              className={
                "my-address cursor-pointer md:min-w-[300px]  h-[100px] grow flex flex-col justify-center items-center border border-gray-300 text-[12px] leading-[14px] " +
                (selectTypeDelivery ? "text-[#ff4e00] border-b-2 border-b-[#ff4e00]" : "")
              }
            >
              <FontAwesomeIcon className={"h-10 w-10 object-cover "} icon={faHouse} />
              <span>Moje adresa</span>
            </div>
          </div>
          {/* <div className="hidden"> */}
          {/* <p className="delivery-info text-left text-[14px] leading-[20px] tracking-[0.5px]">
            <span>
              Nechte si dodat své zboží domů nebo je zaslat na nedaleké výdejní místo, kde si jej můžete vyzvednout, kdy
              se vám to bude hodit.
            </span>
          </p> */}
          <div className={"deliveryDropdown-hidden " + (selectTypeDelivery ? "deliveryDropdown-show" : "")}>
            {/* <div className="flex mt-6 px-[6px] pb-6 border-b border-gray-300 text-[14px] leading-[20px]">
              <div className=" pr-[15px] py-[6px] relative top-1/2 ">
                <div className="border border-[#1a1a1a] w-[26px] h-[26px] rounded-[15px]  top-[0.3px] left-[-6.2px] hover:outline-2px outline_onHover absolute"></div>
                <input defaultChecked={true} className="h-0 w-0" type="radio" />
              </div>
              <div className="pl-9">
                <p>Hung Nguyen Quang</p>
                <p>Your address and number of your address...</p>
                <p>Your city...</p>
                <p>Your country...</p>
              </div>
              <FontAwesomeIcon className="ml-auto " icon={faPen} />
            </div>
            <div className="flex mt-6 px-[6px] pb-6 text-[14px] leading-[20px]">
              <div className=" pr-[15px] py-[6px] relative top-1/2 ">
                <div className="border border-[#1a1a1a] w-[26px] h-[26px] rounded-[15px]  top-[0.3px] left-[-6.2px] hover:outline-2px outline_onHover absolute"></div>
                <input className="h-0 w-0" type="radio" />
              </div>
              <div className="pl-9">
                <p>Přidat novou adresu</p>
              </div>
              <FontAwesomeIcon className="ml-auto " icon={faPen} />
            </div>
            <div className="text-center mb-[24px]">
              <button
                onClick={() => setAdressIsClicked((prev) => !prev)}
                className="bg-[#ff4e00] uppercase text-[#ffff] w-full px-6 font-[700] flex-wrap tracking-[0.5px] py-[10px] min-h-[40px] leading-[18px] text-[12px]  "
              >
                Další
              </button>
            </div> */}
            <CheckoutAddressForm setAdressIsClicked={setAdressIsClicked} />
          </div>
          {/* </div> */}
        </div>
        // </div>
      )}
    </>
    // </div>
  );
};

export default Checkout;
