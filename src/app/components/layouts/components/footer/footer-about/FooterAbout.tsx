import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../container";
import "./FooterAbout.css";

const FooterAbout = () => {
  return (
    <Container bg_color="bg-[#1a1a1a]">
      <div className="flex px-[8px] pt-[24px] pb-[36px] text-[#ffff] w-full ">
        {/* <div className="flex"> */}
        <ul className="flex footer_about_list space-x w-1/2 flex-wrap text-[14px] h-[64px]">
          <li className="footer_about_item_ pr-[12px]">
            <Link to="">Právní informace</Link>
          </li>
          <li className="footer_about_item">
            <Link to="">Obchodni podminky</Link>
          </li>
          <li className="footer_about_item">
            <Link to="">Zásady ochrany soukromí</Link>
          </li>
          <li className="footer_about_item">
            <Link to="">Tech blog</Link>
          </li>
          <li className="footer_about_item">
            <Link to="">Nastavení dat</Link>
          </li>
        </ul>
        <div className="w-1/2 grid grid-cols-2 px-[16px]">
          <div className="">
            <p className="pb-[16px]">Aplikace Zalando:</p>
            <div className="flex space-x-[8px]">
              <div className="h-[40px] mb-[8px]">
                <img
                  className="h-full object-cover"
                  src="https://helpdesk.jcu.cz/sluzby/studuju-mobilni-aplikace/appstore/image"
                  alt="downloadAppstore"
                />
              </div>
              <div className="h-[40px]">
                <img
                  className="h-full object-cover"
                  src="https://www.vylety-zabava.cz/images/Ikony/GooglePlay.png"
                  alt="downloadGooglePlay"
                />
              </div>
            </div>
          </div>
          <div className="px-[16px]">
            <p className="mb-[16px]">Můžete nás také najít na</p>
            <ul className="flex space-x-[8px]">
              <a href="https://www.facebook.com/zalando.cz/">
                <li className="h-[40px] ">
                  <img
                    className="h-full object-cover"
                    src="https://e7.pngegg.com/pngimages/178/852/png-clipart-computer-icons-facebook-f8-lsx-world-congress-usa-2018-like-button-facebook-logo-monochrome.png"
                    alt="facebook"
                  />
                </li>
              </a>
              <a
                href="
              https://www.instagram.com/zalando/
              "
              >
                <li className="h-[40px]">
                  <img
                    className="h-full object-cover"
                    src="https://image.similarpng.com/very-thumbnail/2020/07/Instagram-black-and-white-logo-Premium-vector-PNG-.png"
                    alt="instagram"
                  />
                </li>
              </a>
              <a href="https://twitter.com/zalando">
                <li className="h-[40px]">
                  <img
                    className="h-full object-cover"
                    src="https://toppng.com/uploads/preview/twitter-logo-black-11549680426ohdamjlf5z.png"
                    alt="twitter"
                  />
                </li>
              </a>
              <a
                href="https://cz.pinterest.com/zalandocz/
              "
              >
                <li className="h-[40px]">
                  <img
                    className="h-full object-cover"
                    src="https://www.citypng.com/public/uploads/preview/-11594987359wsqhsnkcge.png"
                    alt="pinterest"
                  />
                </li>
              </a>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </Container>
  );
};

export default FooterAbout;
