import React, { Fragment, useEffect } from "react";
import "./HeaderInput.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const HeaderInput = () => {
  const [isTouched, setIsTouched] = React.useState(false);

  const onClickHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setIsTouched(true);
  };

  let refInput = React.useRef<any>(null);

  // outside click
  useEffect(() => {
    document.addEventListener("mousedown", (e: any) => {
      if (!refInput.current.contains(e.target)) {
        setIsTouched(false);
      }
    });
  }, []);

  return (
    <div className={"absolute top-1/2 translate-y-[-47%] right-0"}>
      <div
        ref={refInput}
        className={
          " flex items-center w-[288px] h-[35px] text-[#1a1a1a] tracking-[0.5px]  bg-[#efeff0] " +
          (isTouched ? "header_search_transition" : "")
        }
      >
        {isTouched && (
          <div className="header_search_dropdown">
            <div className="sub_dropdown ">
              <div className="h-[45px] flex justify-between py-[12px]">
                <p className="font-[700]">Předchozí hledání</p>
                <p className="text-[#6238e0] font-[700]">Vymazat</p>
              </div>
              <ul>
                <li className="dropdown_list"></li>
                <li className="dropdown_list"></li>
                <li className="dropdown_list"></li>
              </ul>
            </div>
          </div>
        )}
        <div className="w-[50px] text-center ">
          <span className="text-[18px] ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
        <div className={" h-full" + (isTouched ? " w-full" : " w-[238px]")}>
          <input
            onClick={onClickHandler}
            className="bg-transparent h-full w-full py-[6px] outline-none text-[14px] "
            type="text"
            placeholder="Hledat"
          />
        </div>
        {isTouched && (
          <div onClick={() => setIsTouched(false)} className="absolute right-0 px-[4px] cursor-pointer ">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default HeaderInput;
