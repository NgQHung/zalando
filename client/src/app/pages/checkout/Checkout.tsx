import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../components/UI/progressBar/ProgressBar-stepper";
import Wrapper from "../../components/UI/wrapper/wrapper";
// import progressBar from "../../components/UI/progressBar/progressBar";

const Checkout = () => {
  const [addressIsClicked, setAdressIsClicked] = useState(false);
  return (
    // <div className="grow h-full">
    <Wrapper className="grow">
      <>
        {addressIsClicked ? (
          <div className="flex tracking-[0.5px] gap-[24px]">
            <div className="flex flex-col gap-[24px] basis-1/2">
              <div className="delivery-address text-[14px]">
                <h2 className="pb-[12px] font-[700] text-[16px] leading-[24px] border-b border-gray-300">
                  DORUČOVACÍ ADRESA
                </h2>
                <div className="address-name mt-[24px] mb-[4px]">Hung Nguyen Quang</div>
                <div className="address mb-[4px]">Your address and number of your address...</div>
                <div className="address mb-[4px]">Your city...</div>
                <div className="address mb-[4px]">Your country...</div>
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
              <button className="w-full h-[40px] text-[12px] leading-[18px] text-[#ffff] font-[700] uppercase tracking-[0.5px] bg-[#ff4e00]">
                <Link to="/checkout/payment">
                  <span>Další</span>
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="delivery flex flex-col text-center max-w-[630px] basis-[630px] mx-auto my-0">
            <div className="delivery-title text-left text-[16px] leading-[24px] tracking-[0.5px] font-[700]">
              DORUČOVACÍ ADRESA
            </div>
            <div className="delivery-content w-full flex gap-[24px] py-[24px]">
              <div className="delivery-point cursor-pointer h-[100px] grow flex justify-center items-center border border-gray-300 ">
                <span>Výdejní místo</span>
              </div>
              <div
                onClick={() => setAdressIsClicked((prev) => !prev)}
                className="my-address cursor-pointer h-[100px] grow flex justify-center items-center border border-gray-300 "
              >
                <span>Moje adresa</span>
              </div>
            </div>
            <p className="delivery-info text-left text-[14px] leading-[20px] tracking-[0.5px]">
              <span>
                Nechte si dodat své zboží domů nebo je zaslat na nedaleké výdejní místo, kde si jej můžete vyzvednout,
                kdy se vám to bude hodit.
              </span>
            </p>
          </div>
        )}
      </>
    </Wrapper>
    // </div>
  );
};

export default Checkout;
