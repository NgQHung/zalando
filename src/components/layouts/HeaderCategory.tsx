import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const HeaderCategory = () => {
  // const isHover = e => e.parentElement.querySelector('navbar_list:hover') === e;
  return (
    <Fragment>
      <div
        // initial={{ y: "-100vh" }}
        // animate={{
        //   y: 0,
        //   transition: {
        //     duration: 0.5,
        //   },
        // }}
        className="absolute top-full left-0 h-[488px] w-full bg-gray-200"
      >
        <div className="container grid_container gap-4 bg-blue h-full">
          {/* <div className="grid_inner"> */}
          <div className=" grid_item_1">
            {/* <div> */}
            <h5>Get the Look</h5>
            {/* </div> */}
            <ul className="w-full">
              <Link to="">
                <li className="grid_items">
                  <span>Všechny styly</span>
                </li>
              </Link>
              <Link to="">
                <li className="grid_items">
                  <span>Neformální</span>
                </li>
              </Link>
              <Link to="">
                <li className="grid_items">
                  <span>Sportovní</span>
                </li>
              </Link>
              <Link to="">
                <li className="grid_items">
                  <span>Klasické</span>
                </li>
              </Link>
              <Link to="">
                <li className="grid_items">
                  <span>Na večírek</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className=" grid_item_2">Inspirujte se stylem</div>
          <div className=" grid_item_3">Zalando x VOGUE CS</div>
          <div className=" grid_item_4">
            <img
              src="https://img01.ztat.net/banner/f8a81fd34cfe412f98cf8764884be70c/1e8731ce1e924d9e9b0bb65364ec2f82.jpg?imwidth=693"
              alt="image"
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderCategory;
