import React, { Fragment } from "react";
import { FOOTER_DATA_1, FOOTER_DATA_2, FOOTER_DATA_3, FOOTER_DATA_4 } from "../../../../../../utils/data";
import Container from "../../../container";
import "./FooterInfo.css";

const FooterInfo = () => {
  return (
    <Fragment>
      <Container bg_color="bg-[#6328e0]">
        <div className="text-[#ffff] mt-[36px] mx-2 flex flex-wrap w-full  ">
          {/* first start */}
          <div className=" basis-1/2 max-w-1/2 ">
            <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
              Nápověda a kontakt
            </h2>
            <div className="flex">
              <ul className="basis-1/2 max-w-1/2">
                <p className="font-[700]">Všechny dotazy</p>
                <li className=" ">
                  <span className="affect_text">Sledovat objednávku</span>
                </li>
                <li className=" ">
                  <span className="affect_text">Podmínky dopravy</span>
                </li>
                <li className=" ">
                  <span className="affect_text">Jaké způsoby platby nabízíte?</span>
                </li>
                <li className=" ">
                  <span className="affect_text">Přihlašte se k odběru newsletteru</span>
                </li>
              </ul>
              <ul className="basis-1/2 max-w-1/2">
                <li className=" ">
                  <span className="affect_text">Vrácení objednávky</span>
                </li>
                <li className=" ">
                  <span className="affect_text">Kdy budu mít peníze zpět?</span>
                </li>
                <li className=" ">
                  <span className="affect_text">Mohu zboží vyměnit?</span>
                </li>
              </ul>
            </div>
          </div>
          {/* first end */}
          {/* second start */}
          <div className="flex basis-1/4 max-w-1/4">
            <div className="basis-1/2 max-w-1/2">
              <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                Poukazy a slevy
              </h2>
              <ul>
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
          <div className="flex basis-1/4 max-w-1/4">
            <div className="basis-1/2 max-w-1/2">
              <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                O Zalandu
              </h2>
              <ul>
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
          <div className="flex basis-1/4 max-w-1/4">
            <div className="basis-1/2 max-w-1/2">
              <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                Logističtí partneři
              </h2>
              <ul className="flex  space-x-[8px]">
                <li>
                  <img
                    className="w-[48px] h-[32px]"
                    src="https://banner2.cleanpng.com/20180515/kke/kisspng-dhl-express-logistics-freight-forwarding-agency-in-5afacf2232c924.124881091526386466208.jpg"
                    alt="DHL"
                  />
                </li>
                <li>
                  <img
                    className="w-[48px] h-[32px]"
                    src="https://www.zaspas.cz/wp-content/uploads/2016/04/Logo-ppl-1024x333.jpg"
                    alt="PPL"
                  />
                </li>
                <li>
                  <img
                    className="w-[48px] h-[32px]"
                    src="https://zlin.cz/wp-content/uploads/2020/08/Zakladni_dvoubarevna_varianta-768x512.jpg"
                    alt="CP"
                  />
                </li>
                <li>
                  <img
                    className="w-[48px] h-[32px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/50/Zasilkovna_logo.png"
                    alt="zasilkovna"
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* forth start */}
          {/* fifth start */}
          <div className="flex basis-1/4 max-w-1/4">
            <div className="basis-1/2 max-w-1/2">
              <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                Způsoby platby
              </h2>
              <ul className="flex  space-x-[8px]">
                <li>
                  <img
                    className="w-[48px] h-[32px]"
                    src="https://banner2.cleanpng.com/20180515/kke/kisspng-dhl-express-logistics-freight-forwarding-agency-in-5afacf2232c924.124881091526386466208.jpg"
                    alt="DHL"
                  />
                </li>
                <li>
                  <img
                    className="w-[48px] h-[32px]"
                    src="https://www.zaspas.cz/wp-content/uploads/2016/04/Logo-ppl-1024x333.jpg"
                    alt="PPL"
                  />
                </li>
                <li>
                  <img
                    className="w-[48px] h-[32px]"
                    src="https://zlin.cz/wp-content/uploads/2020/08/Zakladni_dvoubarevna_varianta-768x512.jpg"
                    alt="CP"
                  />
                </li>
                <li>
                  <img
                    className="w-[48px] h-[32px]"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/50/Zasilkovna_logo.png"
                    alt="zasilkovna"
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* fifth end */}
          {/* sixth start */}
          <div className="flex basis-1/4 max-w-1/4">
            <div className="basis-1/2 max-w-1/2">
              <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                Naše výhody
              </h2>
              <ul>
                {FOOTER_DATA_3.data.map((item, idx) => (
                  <li key={idx} className="">
                    <span className="affect_text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* sixth end */}
          {/* seventh start */}
          <div className="flex basis-1/4 max-w-1/4">
            <div className="basis-1/2 max-w-1/2">
              <h2 className="mb-4 text_tiempos pl-3 text-[22px] leading-[28px] font-[400] grow tracking-[-0.22px]">
                Naše služby
              </h2>
              <ul>
                {FOOTER_DATA_4.data.map((item, idx) => (
                  <li key={idx} className="">
                    <span className="affect_text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* seventh end */}
      </Container>
    </Fragment>
  );
};

export default FooterInfo;
