import React, { Fragment } from "react";
import { FOOTER_DATA_1, FOOTER_DATA_2, FOOTER_DATA_3, FOOTER_DATA_4 } from "../../../../../utils/data";
import Container from "../../container";
import FooterAbout from "./footer-about/FooterAbout";
import FooterInfo from "./footer-info/FooterInfo";
// import FooterInfo from "./footer-info/FooterInfo";
import ScrollUp from "./footer-scoll_up";

const Footer = () => {
  return (
    <Fragment>
      {/* <Container bg_color="">
        <div className="flex flex-col"> */}
      <div className="transition-all">
        <FooterInfo />
        <FooterAbout />
        <ScrollUp />
      </div>
      {/* </div>
      </Container> */}
    </Fragment>
  );
};

export default Footer;
