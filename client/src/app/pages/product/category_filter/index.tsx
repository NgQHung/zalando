import { faChevronDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const Category_filter = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap gap-2">
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Seřadit podle</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Velikost</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Značka</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Barva</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Udržitelnost</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Cena</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Materiál</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Balení</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Licencované značky</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Vzor</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <span className="text-[16px] py-3 pl-3 pr-2">Střih</span>
          <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
        </button>
        <button className=" flex border border-[#1a1a1a] items-center">
          <FontAwesomeIcon icon={faFilter} className="h-5 object-cover ml-3" />
          <span className="text-[16px] py-3 pl-3 pr-2">Zobrazit všechny filtry</span>
        </button>
      </div>
    </Fragment>
  );
};

export default Category_filter;
