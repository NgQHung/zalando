import React, { Fragment } from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./subHeader_category.css";
import { SubHeaderCategory_DATA } from "../../../../../../utils/data";

// import { Link } from "react-router-dom";

interface IProps {
  category: string;
}
interface ICategoryObj {
  GET_THE_LOOK: {
    title: string;
    type: string[];
  };
  NOVINKY: {
    title: string;
    type: string[];
  };
  OBLEČNÍ: {
    title: string;
    type: string[];
  };
}

const SubHeaderCategory: React.FC<IProps> = ({ category }) => {
  // const getKeyValue = function <T extends object, U extends keyof T>(obj: T, key: U) {
  //   return obj[key];
  // };
  // console.log()
  const categoryToUpperCase = category.toUpperCase().toString().split(" ").join("_");
  // const dataCategory = getKeyValue(SubHeaderCategory_DATA, categoryToUpperCase);
  // console.log(categoryToUpperCase);
  const dataCategory = SubHeaderCategory_DATA.filter((item) => item.title === categoryToUpperCase);
  return (
    <Fragment>
      <div className="sub_header_category_container mx-[152px] max-w-[1216px] ] bg-blue h-full">
        <ul className=" ">
          {dataCategory?.map((item, index) => (
            <div key={index} className="w-full flex py-[22px]">
              {item.type.map((type, idx) => {
                return (
                  <div key={idx} className="py-[10px] w-1/4">
                    <h5 className="mb-[12px] text-[18px] tracking-[-0.16px] my-0 mx-auto h-[24px] font-[400] text-[#66676e] font-[Tiempos] leading-[24px] ">
                      {type.title}
                    </h5>
                    {/* <Link to=""> */}
                    {type.types.map((typ, inx) => (
                      <li key={inx} className="h-[21px] flex flex-col mb-[12px] text-[14px] ">
                        <span className="h-full">{typ}</span>
                      </li>
                    ))}
                    {/* </Link> */}
                  </div>
                );
              })}
              <div className="  ">
                <div className="w-[288px] h-[438px] absolute bg-red-500 overflow-hidden">
                  <div className="w-[268px] h-[385px] absolute right-0 top-0 overflow-hidden">
                    <img className="object-none h-full" src={item.image} alt={item?.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default SubHeaderCategory;
