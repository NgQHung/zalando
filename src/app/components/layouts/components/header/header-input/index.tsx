import React, { Fragment, useEffect } from "react";
import "./HeaderInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faBars, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderInput = () => {
  const [isTouched, setIsTouched] = React.useState(false);
  const [searchMobileClick, setSearchMobileClick] = React.useState(false);

  const onClickHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, type?: string) => {
    if (e.currentTarget.name === "searchMobile") {
      setSearchMobileClick(true);
    } else {
      setSearchMobileClick(false);
    }
    if (e.currentTarget.name === "searchScreen") {
      setIsTouched(true);
    } else {
      setIsTouched(false);
    }
  };

  let refInput = React.useRef<any>(null);

  // outside click
  useEffect(() => {
    document.addEventListener("mousedown", (e: any) => {
      if (!refInput.current.contains(e.target)) {
        setIsTouched(false);
        setSearchMobileClick(false);
      }
    });
  }, []);

  return (
    <Fragment>
      {/* search for screen start */}
      <div
        ref={refInput}
        className={
          "hidden lg:flex items-center w-[288px] h-[35px] text-[#1a1a1a] tracking-[0.5px]  bg-[#efeff0] " +
          (isTouched ? "header_search_transition" : "")
        }
      >
        <div className="w-[50px] text-center ">
          <span className="text-[18px] ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
        <div className={" h-full" + (isTouched ? " w-full" : " w-[238px]")}>
          <input
            onClick={onClickHandler}
            name="searchScreen"
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
      {/* search for screen end */}
      {/* search for mobile start */}
      <div className=" lg:hidden  ">
        <div className="flex items-center">
          <div className="border border-[#d0d1d3]">
            <FontAwesomeIcon icon={faBars} className="h-6 p-[10px]" />
          </div>

          <Link to="/search" className="w-full">
            <div className="border flex items-stretch justify-between grow border-[#d0d1d3] w-full   ">
              <input
                name="searchMobile"
                type="text"
                onClick={onClickHandler}
                className="w-full  pl-[13px] m-0 text-[16px] outline-none"
                placeholder="Hledat"
              />
              <FontAwesomeIcon className="h-6 p-[10px]" icon={faMagnifyingGlass} />
            </div>
          </Link>
        </div>
      </div>
      {/* search for mobile end */}
    </Fragment>
  );
};

export default HeaderInput;
