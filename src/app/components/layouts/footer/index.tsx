import React from "react";
import { FOOTER_DATA_1, FOOTER_DATA_2, FOOTER_DATA_3, FOOTER_DATA_4 } from "../../../../utils/data";

const Footer = () => {
  return (
    <div className="bg-[#6328e0] text-[Tiempos] text-[#ffff]">
      <div className="mx-[152px] max-w-[1216px]">
        <div className="flex px-[8px] pt-[36px]">
          <div className="w-1/2">
            <div className="px-[8px] pb-[36px]">
              <p className="text-[22px] mb-[16px]">Nápověda a kontakt</p>
              <p className="mb-[12px]">Všechny dotazy</p>
              <div className="flex w-full">
                <ul className="space-y-[12px]">
                  <li>Sledovat objednávku</li>
                  <li>Podmínky dopravy</li>
                  <li>Jaké způsoby platby nabízíte?</li>
                  <li>Přihlašte se k odběru newsletteru</li>
                </ul>
                <ul className="space-y-[12px]">
                  <li>Vrácení objednávky</li>
                  <li>Kdy budu mít peníze zpět?</li>
                  <li>Mohu zboží vyměnit?</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="px-[8px] pb-[36px]">
                <p className="text-[22px] mb-[16px]">Logističtí partneři</p>
                <ul className="flex">
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
              <div className="px-[8px] pb-[36px]">
                <p className="text-[22px] mb-[16px]">Způsoby platby</p>
                <ul className="flex">
                  <li>
                    <img
                      className="w-[48px] h-[32px]"
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg"
                      alt="visa"
                    />
                  </li>
                  <li>
                    <img
                      className="w-[48px] h-[32px]"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
                      alt="mastercard"
                    />
                  </li>
                  <li>
                    <img
                      className="w-[48px] h-[32px]"
                      src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png"
                      alt="paypal"
                    />
                  </li>
                  <li>
                    <img
                      className="w-[48px] h-[32px]"
                      src="https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/product/images/img-WEBLOGO1-01.jpg"
                      alt="AMX"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex w-full">
              <div className="px-[8px] pb-[36px]">
                <p className="px-[8px] pb-[36px]">{FOOTER_DATA_1.title}</p>
                <ul className="space-y-[12px]">
                  {FOOTER_DATA_1.data.map((item) => (
                    <li className="">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="px-[8px] pb-[36px]">
                <p className="px-[8px] pb-[36px]">{FOOTER_DATA_2.title}</p>
                <ul className="space-y-[12px]">
                  {FOOTER_DATA_2.data.map((item) => (
                    <li className="">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" flex w-full">
              <div className="px-[8px] pb-[36px]">
                <p className="px-[8px] pb-[36px]">{FOOTER_DATA_3.title}</p>
                <ul className="space-y-[12px]">
                  {FOOTER_DATA_3.data.map((item) => (
                    <li className="">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="px-[8px] pb-[36px]">
                <p className="px-[8px] pb-[36px]">{FOOTER_DATA_4.title}</p>
                <ul className="space-y-[12px]">
                  {FOOTER_DATA_4.data.map((item) => (
                    <li className="">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
