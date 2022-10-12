import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { UIActions } from "../../../../../../stores/UI-slice";
import { HeaderCategory_DATA } from "../../../../../../utils/data";
import { useAppDispatch } from "../../../../../hooks";
import HeaderInput from "../header-input";
import SubHeaderCategory from "../subHeader-category";
import "./header_category.css";

const HeaderCategory = () => {
  const [category, setCategory] = React.useState<any>("");
  const dispatch = useAppDispatch();

  const onMouseHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    setCategory(target.getAttribute("datatype"));
    dispatch(UIActions.backgroundColor__header(true));
  };
  const onMouseLeaveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCategory("");
    dispatch(UIActions.backgroundColor__header(false));
  };

  return (
    <Fragment>
      <div className=" max-w-full lg:max-w-[1216px] lg:flex items-end text-[16px] min-h-[35px] ">
        <div className=" hidden min-w-[925px] lg:flex justify-between text-[0.875rem] cursor-pointer ">
          {HeaderCategory_DATA.map((item, idx) => {
            return (
              <div
                key={idx}
                datatype={item}
                onMouseEnter={onMouseHandler}
                className="navbar_list pt-[10px] pb-[6px] px-[8px] font-[400]"
                onMouseLeave={onMouseLeaveHandler}
              >
                <button className=" first:pl-0 ">
                  <Link to="/clothes">
                    <span className="affect_text">{item}</span>
                  </Link>
                </button>
                <div
                  className={
                    "sub_header_category_hidden absolute w-full top-full left-0 border-t border-[#efeff0] " +
                    (category ? "sub_header_category" : "")
                  }
                >
                  <SubHeaderCategory category={category} />
                </div>
              </div>
            );
          })}
        </div>
        <div className=" grow ">
          <HeaderInput />
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderCategory;
