import React, { Fragment } from "react";
import { FOOTER_DATA_1, FOOTER_DATA_2, FOOTER_DATA_3, FOOTER_DATA_4 } from "../../../../../utils/data";
import Container from "../../container";
import "./FooterInfo.css";

const FooterInfo = () => {
  return (
    <Fragment>
      <Container bg_color="bg-[#6328e0]">
        <div className="footer_info_container ">
          <h2 className="footer_info_title">Nápověda a kontakt</h2>
          <h2 className="footer_info_title">Logističtí partneři</h2>
          <h2 className="footer_info_title">Způsoby platby</h2>
          <h2 className="footer_info_title">Poukazy a slevy</h2>
          <h2 className="footer_info_title">O Zalandu</h2>
          <h2 className="footer_info_title">Naše výhody</h2>
          <h2 className="footer_info_title">Naše služby</h2>

          <ul className="footer_info_list">
            <p className="font-[700]">Všechny dotazy</p>
            <li className="footer_info_item">Sledovat objednávku</li>
            <li className="footer_info_item">Podmínky dopravy</li>
            <li className="footer_info_item">Jaké způsoby platby nabízíte?</li>
            <li className="footer_info_item">Přihlašte se k odběru newsletteru</li>
          </ul>

          <ul className="footer_info_list mt-[18.4px] ">
            <li className="footer_info_item">Vrácení objednávky</li>
            <li className="footer_info_item">Kdy budu mít peníze zpět?</li>
            <li className="footer_info_item">Mohu zboží vyměnit?</li>
          </ul>
          <ul className="flex footer_info_list space-x-[8px]">
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

          <ul className="flex footer_info_list space-x-[8px]">
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
          <ul className="footer_info_list">
            {FOOTER_DATA_1.data.map((item) => (
              <li className="footer_info_item">{item}</li>
            ))}
          </ul>
          <ul className="footer_info_list">
            {FOOTER_DATA_2.data.map((item) => (
              <li className="footer_info_item">{item}</li>
            ))}
          </ul>
          <ul className="footer_info_list">
            {FOOTER_DATA_3.data.map((item) => (
              <li className="footer_info_item">{item}</li>
            ))}
          </ul>
          <ul className="footer_info_list">
            {FOOTER_DATA_4.data.map((item) => (
              <li className="footer_info_item">{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Fragment>
  );
};

export default FooterInfo;
