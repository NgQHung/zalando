import React from "react";
import { DATA_BANNER } from "../../../../../utils/data_banner";
import Container from "../../container";
import "./Banner.css";

const Banner = () => {
  const [isClick, setIsClicked] = React.useState(false);

  return (
    // <div className="my-[64px]">
    <Container bg_color="bg-[#efeff0]" margin="my-16">
      <div className="flex w-full pt-6 transition-transform ">
        <div className="w-1/2 flex flex-col">
          <h3 className="text-[24px] font-[600]">Co takhle sleva 10 % na váš příští nákup?</h3>
          <h3 className="text-[24px] text_tiempos ">Dostávejte novinky od Zalando.cz e-mailem</h3>
          <p className="text-[16px] text_tiempos mt-4">Přihlaste se, abyste měli přehled o nejnovějších nabídkách.</p>
        </div>
        <div className="w-1/2">
          <div className="bg-[#ffff] py-6 px-16 w-full ">
            <div className="flex flex-col">
              <p className="py-1 px-2 border border-[#1a1a1a] text-[14px] self-start">Vaše e-mailová adresa</p>
              <input
                className="py-[10px] px-[12px] border border-[#1a1a1a] mb-6 w-full leading-11"
                type="text"
                placeholder="Hunghunghung273@gmail.com"
              />
              <div className="flex w-full">
                <div className="w-1/2">
                  <h3 className="font-[700] leading-6">Upravte své preference</h3>
                  <h3 className="text_tiempos ">Co vás zajímá nejvíce?</h3>
                </div>
                <ul className="flex flex-col w-1/2 ">
                  <li className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      className="h-[26px] w-[26px] appearance-none border border-[#1a1a1a] rounded-[50%] cursor-pointer "
                    />
                    <label className="pl-[10px]" htmlFor="damy">
                      Dámská móda
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-[26px] w-[26px] appearance-none border border-[#1a1a1a] rounded-[50%] cursor-pointer"
                    />
                    <label className="pl-[10px]" htmlFor="pani">
                      Pánská móda
                    </label>
                  </li>
                </ul>
              </div>

              {/* <div> */}
              <div className={"banner_obsah mt-4 " + (isClick ? "isClicked" : "")}>
                <button onClick={() => setIsClicked((prev) => !prev)} className={"banner_obsah_title "}>
                  Obsah
                </button>
                <div className={"banner_list_wrapper pt-4 pb-9 px-6"}>
                  <ul className={"banner_list flex flex-wrap " + (!isClick ? "banner_list_hidden" : "")}>
                    {DATA_BANNER.map((item, idx) => (
                      <li key={idx} className="basis-1/2 items-start ">
                        <input
                          type="checkbox"
                          className="h-[26px] w-[26px] appearance-none border border-[#1a1a1a] rounded-[50%] cursor-pointer "
                        />
                        <span className="pl-[10px]">{item}</span>
                      </li>
                    ))}
                    <div className="text-right mt-4 px-4 text-[#6230E0] text-[14px]">
                      <a href="" className="affect_text">
                        Zobrazit víc (pro více informací se musíte přihlásit)
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-3 mt-[25px] text-[#ffff] text-center font-[700] ">
                <button>Přihlaste mě</button>
              </div>
              <p className="text-[12px] font-[400] mt-[25px] ">
                Jak vaše data zpracováváme se dozvíte v našich zásady ochrany soukromí. Z newsletteru se můžete kdykoliv
                zdarma odhlásit.
              </p>
              <p className="mt-[25px] font-[700] text-[#66676e] text-[12px] cursor-pointer">
                *Zde najdete informace o používání dárkových karet a voucherů.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
    // </div>
  );
};

export default Banner;
