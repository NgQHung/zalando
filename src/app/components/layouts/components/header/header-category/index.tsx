import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { UIActions } from "../../../../../../stores/UI-slice";
import { HeaderCategory_DATA } from "../../../../../../utils/data";
import { useAppDispatch } from "../../../../../hooks";
import HeaderInput from "../header-input";
import SubHeaderCategory from "../subHeader-category";
import "./header_category.css";

const HeaderCategory = () => {
  const [category, setCategory] = React.useState("");
  const dispatch = useAppDispatch();

  const onMouseHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(e.currentTarget.name);
    dispatch(UIActions.headerChangeBgOnHoverHandler(true));
  };
  const onMouseLeaveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCategory("");
    dispatch(UIActions.headerChangeBgOnHoverHandler(false));
  };

  return (
    <Fragment>
      <div className=" lg:mx-auto my-0 lg:max-w-[1216px] lg:flex items-center justify-between text-[16px] ">
        <ul className=" hidden max-w-[900px] lg:flex justify-between items-center text-[0.875rem] w-full ">
          {HeaderCategory_DATA.map((item, idx) => {
            return (
              <div key={idx}>
                <li className="navbar_list">
                  <button
                    name={item}
                    className=" first:pl-0 pt-[10px]  px-[8px] font-[400]"
                    onMouseEnter={onMouseHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <span className="affect_text">{item}</span>
                  </button>
                  <div
                    className={
                      "sub_header_category_hidden absolute w-full top-full left-0  " +
                      (category ? "sub_header_category" : "")
                    }
                  >
                    <SubHeaderCategory category={category} />
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
        <div className="header_search ">
          <HeaderInput />
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderCategory;
