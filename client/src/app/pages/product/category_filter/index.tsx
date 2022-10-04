import { faChevronDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { FILTER_DATA } from "../../../../utils/data/filter";
import "./category_filter.module.css";

const Category_filter = () => {
  const [dropdown, setDropdown] = React.useState(false);
  const [typeFilter, setTypeFilter] = React.useState<string>("");
  // const getData = typeFilter === FILTER_DATA.map(item => item.title)
  const typeIndex = FILTER_DATA.findIndex((item) => item.title === typeFilter);
  const getData = FILTER_DATA[typeIndex]?.data;

  const dropdownHandler = (type: string) => {
    setTypeFilter(type);
    setDropdown((prev) => !prev);
  };
  // console.log(getData);

  // console.log(typeFilter);
  return (
    <Fragment>
      <div className="flex xs:flex-wrap gap-2 relative w-screen xs:w-full overflow-x-auto scrollbar_hide ml-[calc(-50vw+50%-8.5px)] xs:ml-0 ">
        {FILTER_DATA.map((item, idx) => (
          <button
            key={idx}
            onClick={() => dropdownHandler(item.title)}
            className="hidden xs:flex border border-[#1a1a1a] items-center outline_onHover relative "
          >
            <span className="text-[16px] py-3 pl-3 pr-2">{item.title}</span>
            <FontAwesomeIcon icon={faChevronDown} className="h-5 object-cover mr-3" />
            {dropdown && typeFilter ? <div className="absolute top-full left-0">{getData}</div> : null}
          </button>
        ))}
        <button className=" flex border border-[#1a1a1a] items-center outline_onHover whitespace-nowrap">
          <FontAwesomeIcon icon={faFilter} className="h-5 object-cover ml-3" />
          <span className="text-[16px] py-3 pl-3 pr-2">Zobrazit všechny filtry</span>
        </button>
      </div>
    </Fragment>
  );
};

export default Category_filter;
