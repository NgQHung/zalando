// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { HeaderCategory_DATA } from "../../../../../../utils/data";
import HeaderInput from "../header-input";
import SubHeaderCategory from "../subHeader-category";
import "./header_category.css";
// import { Link } from "react-router-dom";

const HeaderCategory = () => {
  const [category, setCategory] = React.useState("");

  const onMouseHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.name);
  };

  return (
    <Fragment>
      {/* <div className="absolute"> */}
      <div className="w-[900px]">
        <ul className="flex justify-between items-center text-[0.875rem] w-full ">
          {HeaderCategory_DATA.map((item, idx) => {
            return (
              <div key={idx}>
                <li className="navbar_list py-[10px] pr-[8px] font-[400]">
                  <button name={item} className="navbar_item" onMouseEnter={onMouseHandler}>
                    {item}
                  </button>
                  <div className="sub_header_category absolute w-full top-full left-0  ">
                    <SubHeaderCategory category={category} />
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="header_search ">
        <HeaderInput />
      </div>
      {/* </div> */}
    </Fragment>
  );
};

export default HeaderCategory;
