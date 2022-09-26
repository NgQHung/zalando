import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { FOOTER_DATA_1, FOOTER_DATA_2, FOOTER_DATA_3, FOOTER_DATA_4 } from "../../../../../../utils/data";
import Container from "../../../container";
import "./FooterInfo.css";

const FooterInfo = () => {
  return (
    <Fragment>
      <Container bg_color="bg-[#6328e0]">
        {/* screen start */}
        <div className="hidden md:block mx-6">
          <div className="text-[#ffff] text-[14px] mt-[36px] mx-2 flex flex-wrap w-full  ">
            {/* first start */}
            <div className=" md:basis-2/3 md:max-w-2/3 lg:basis-1/2 lg:max-w-1/2 px-2 pb-[36px] ">
              <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                Nápověda a kontakt
              </h2>
              <p className="px-2 font-[700] mb-2">Všechny dotazy</p>
              <div className="flex">
                <ul className="basis-1/2 max-w-1/2 space-y-3 px-2">
                  <li>
                    <span className="affect_text">Sledovat objednávku</span>
                  </li>
                  <li>
                    <span className="affect_text">Podmínky dopravy</span>
                  </li>
                  <li>
                    <span className="affect_text">Jaké způsoby platby nabízíte?</span>
                  </li>
                  <li>
                    <span className="affect_text">Přihlašte se k odběru newsletteru</span>
                  </li>
                </ul>
                <ul className="basis-1/2 max-w-1/2 space-y-3 px-2">
                  <li>
                    <span className="affect_text">Vrácení objednávky</span>
                  </li>
                  <li>
                    <span className="affect_text">Kdy budu mít peníze zpět?</span>
                  </li>
                  <li>
                    <span className="affect_text">Mohu zboží vyměnit?</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* first end */}
            {/* second start */}
            <div className="flex md:basis-1/3 md:max-w-1/3 lg:basis-1/4 lg:max-w-1/4">
              <div className="basis-1/2 max-w-1/2 grow">
                <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                  Poukazy a slevy
                </h2>
                <ul className="space-y-3 px-2">
                  {FOOTER_DATA_1.data.map((item, idx) => (
                    <li key={idx} className="">
                      <span className="affect_text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* second end */}

            {/* third start */}
            <div className="flex md:basis-1/3 md:max-w-1/3 lg:basis-1/4 lg:max-w-1/4 px-2 pb-[36px]">
              <div className="basis-1/2 max-w-1/2 grow">
                <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                  O Zalandu
                </h2>
                <ul className="space-y-3 px-2">
                  {FOOTER_DATA_2.data.map((item, idx) => (
                    <li key={idx} className="">
                      <span className="affect_text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* third end */}
            {/* forth start */}
            <div className="flex md:basis-1/3 md:max-w-1/3 lg:basis-1/4 lg:max-w-1/4 px-2 pb-[36px]">
              <div className="basis-1/2 max-w-1/2 grow">
                <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                  Logističtí partneři
                </h2>
                <ul className="flex flex-wrap">
                  <li className=" shrink-0 mr-2 mb-3">
                    <img
                      className="w-[48px] h-[32px] object-cover rounded-md"
                      src="https://banner2.cleanpng.com/20180515/kke/kisspng-dhl-express-logistics-freight-forwarding-agency-in-5afacf2232c924.124881091526386466208.jpg"
                      alt="DHL"
                    />
                  </li>
                  <li className="shrink-0 mr-2 mb-3">
                    <img
                      className="w-[48px] h-[32px] object-cover rounded-md"
                      src="https://www.zaspas.cz/wp-content/uploads/2016/04/Logo-ppl-1024x333.jpg"
                      alt="PPL"
                    />
                  </li>
                  <li className="shrink-0 mr-2 mb-3">
                    <img
                      className="w-[48px] h-[32px] object-cover rounded-md"
                      src="https://zlin.cz/wp-content/uploads/2020/08/Zakladni_dvoubarevna_varianta-768x512.jpg"
                      alt="CP"
                    />
                  </li>
                  <li className="shrink-0 mr-2 mb-3">
                    <img
                      className="w-[48px] h-[32px] object-cover rounded-md"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/50/Zasilkovna_logo.png"
                      alt="zasilkovna"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* forth end */}
            {/* fifth start */}
            <div className="flex md:basis-1/3 md:max-w-1/3 lg:basis-1/4 lg:max-w-1/4 px-2 pb-[36px]">
              <div className="basis-1/2 max-w-1/2 grow">
                <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                  Způsoby platby
                </h2>
                <ul className="flex flex-wrap ">
                  <li className="shrink-0 mr-2 mb-3">
                    <img
                      className="w-[48px] h-[32px] object-cover rounded-md"
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
                      alt="visa"
                    />
                  </li>
                  <li className="shrink-0 mr-2 mb-3">
                    <img
                      className="w-[48px] h-[32px] object-cover rounded-md"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
                      alt="mastercard"
                    />
                  </li>
                  <li className="shrink-0 mr-2 mb-3">
                    <img
                      className="w-[48px] h-[32px] object-cover rounded-md"
                      src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png"
                      alt="paypal"
                    />
                  </li>
                  <li className="shrink-0 mr-2 mb-3">
                    <img
                      className="w-[48px] h-[32px] object-cover rounded-md"
                      src="https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/product/images/img-WEBLOGO1-01.jpg"
                      alt="AMX"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* fifth end */}
            {/* sixth start */}
            <div className="flex md:basis-1/3 md:max-w-1/3 lg:basis-1/4 lg:max-w-1/4 px-2 pb-[36px]">
              <div className="basis-1/2 max-w-1/2 grow">
                <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                  Naše výhody
                </h2>
                <ul className="space-y-3 px-2">
                  {FOOTER_DATA_3.data.map((item, idx) => (
                    <li key={idx}>
                      <span className="affect_text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* sixth end */}
            {/* seventh start */}
            <div className="flex md:basis-1/3 md:max-w-1/3 lg:basis-1/4 lg:max-w-1/4 px-2 pb-[36px]">
              <div className="basis-1/2 max-w-1/2 grow">
                <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                  Naše služby
                </h2>
                <ul className="space-y-3 px-2">
                  {FOOTER_DATA_4.data.map((item, idx) => (
                    <li key={idx}>
                      <span className="affect_text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* seventh end */}
          </div>
        </div>
        {/* screen end */}
      </Container>
      {/* <Container bg_color=""> */}
      {/* mobile start */}
      <div className="md:hidden w-full ">
        <div className="flex flex-col px-[6px]  ">
          <button className="py-4 flex w-full bg-[#efeff0]">
            <FontAwesomeIcon icon={faChevronDown} className="h-6 object-cover ml-6 " />
            <span className="pl-4 grow text-left text-[16px] leading-6  ">Nápověda a kontakt</span>
            <FontAwesomeIcon icon={faChevronDown} className="ml-auto h-6 object-cover " />
          </button>
          <button className="py-4 flex w-full bg-[#efeff0]">
            <FontAwesomeIcon icon={faChevronDown} className="h-6 object-cover ml-6 " />
            <span className="pl-4 grow text-left text-[16px] leading-6  ">Poukazy a slevy</span>
            <FontAwesomeIcon icon={faChevronDown} className="ml-auto h-6 object-cover " />
          </button>
          <button className="py-4 flex w-full bg-[#efeff0]">
            <FontAwesomeIcon icon={faChevronDown} className="h-6 object-cover ml-6 " />
            <span className="pl-4 grow text-left text-[16px] leading-6  ">O Zalandu</span>
            <FontAwesomeIcon icon={faChevronDown} className="ml-auto h-6 object-cover " />
          </button>
          <button className="py-4 flex w-full bg-[#efeff0]">
            <FontAwesomeIcon icon={faChevronDown} className="h-6 object-cover ml-6 " />
            <span className="pl-4 grow text-left text-[16px] leading-6  ">Logističtí partneři</span>
            <FontAwesomeIcon icon={faChevronDown} className="ml-auto h-6 object-cover " />
          </button>
          <button className="py-4 flex w-full bg-[#efeff0]">
            <FontAwesomeIcon icon={faChevronDown} className="h-6 object-cover ml-6 " />
            <span className="pl-4 grow text-left text-[16px] leading-6  ">Způsoby platby</span>
            <FontAwesomeIcon icon={faChevronDown} className="ml-auto h-6 object-cover " />
          </button>
          <button className="py-4 flex w-full bg-[#efeff0]">
            <FontAwesomeIcon icon={faChevronDown} className="h-6 object-cover ml-6 " />
            <span className="pl-4 grow text-left text-[16px] leading-6  ">Naše výhody</span>
            <FontAwesomeIcon icon={faChevronDown} className="ml-auto h-6 object-cover " />
          </button>
          <button className="py-4 flex w-full bg-[#efeff0]">
            <FontAwesomeIcon icon={faChevronDown} className="h-6 object-cover ml-6 " />
            <span className="pl-4 grow text-left text-[16px] leading-6  ">Naše služby</span>
            <FontAwesomeIcon icon={faChevronDown} className="ml-auto h-6 object-cover " />
          </button>
        </div>
      </div>
      {/* mobile end */}
      {/* </Container> */}
    </Fragment>
  );
};

export default FooterInfo;
