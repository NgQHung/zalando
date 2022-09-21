import React, { Fragment } from "react";
import { FOOTER_DATA_1, FOOTER_DATA_2, FOOTER_DATA_3, FOOTER_DATA_4 } from "../../../../../utils/data";
import FooterAbout from "./footer-about/FooterAbout";
import FooterInfo from "./footer-info/FooterInfo";
import ScrollUp from "./footer-scoll_up";

const Footer = () => {
  return (
    <Fragment>
      <FooterInfo />
      <FooterAbout />
      <ScrollUp />
    </Fragment>
  );
};

export default Footer;
