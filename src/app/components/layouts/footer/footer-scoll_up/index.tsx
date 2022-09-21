import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ScrollUp = () => {
  return (
    <div className="w-full h-[60px] bg-[#ffff] text-right">
      <div className="">
        <button className="bg-[#1a1a1a] text-[#ffff] text-[12px] px-[16px] py-[8px] mr-[16px] mt-[8px] cursor-pointer ">
          <p className="inline mr-[8px]">PŘEJÍT NAHORU</p>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default ScrollUp;
