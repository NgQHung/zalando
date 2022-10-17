import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { Link } from "react-router-dom";
import { navbar_data_mobile } from "../../../../utils/data/mobile/navbar";
import { mobileActions } from "../../../../stores/mobile-slice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navbarActive = useAppSelector((state) => state.mobileSlice.navbarActive);
  const user = useAppSelector((state) => state.userSlice.user);
  const [navbarPopup, setNavbarPopup] = React.useState(false);

  const [category, setCategory] = React.useState("women");
  // const [bodyScroll, setBodyScroll] = React.useState(false);

  const categoryHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = e.currentTarget;
    setCategory(name);
  };

  const isWomen = category === "women";
  const isMen = category === "men";
  const isChildren = category === "children";

  let refInput = React.useRef<any>(null);

  // React.useEffect(() => {
  //   document.addEventListener("touchmove", function (e) {
  //     e.preventDefault();
  //     if (!refInput?.current?.contains(e.target)) {
  //       setBodyScroll(false);
  //     }
  //     setBodyScroll(true);
  //   });
  // }, [bodyScroll]);

  // let refInputOutside = React.useRef<any>(null);

  React.useEffect(() => {
    document.addEventListener("mousedown", (e: any) => {
      if (!refInput?.current?.contains(e.target)) {
        dispatch(mobileActions.mobile_navbar(false));
      }
    });
  }, []);
  // ref={refInput}

  return (
    <>
      <div className={"overlay " + (navbarActive ? "overlay-active" : "")} />
      <div
        className={
          "lg:hidden max-w-[376px] navbar__mobile h-[calc(100%-32px)] " + (navbarActive ? "navbar__mobile-active" : "")
        }
      >
        <div className="border-b-[2px] bg-[#ffff] border-[#d0d1d3] mb-4">
          {/* mobile title start */}
          <div className=" relative py-3 mx-3 border-b text-[16px] border-[#d0d1d3] text-center">
            <span className="leading-6">Prochazet podle kategory</span>
            <FontAwesomeIcon
              onClick={() => dispatch(mobileActions.mobile_navbar(false))}
              className="absolute top-1/2 right-0 translate-y-[-50%] h-6 w-6  p-2"
              icon={faXmark}
            />
          </div>
          {/* mobile title end */}
          {/* mobile navigation start */}
          <nav className="flex justify-center text-center items-center">
            <button
              onClick={categoryHandler}
              name="women"
              className={"py-3 px-3 grow border border-[#d0d1d3] " + (isWomen ? "mobile_underline" : "")}
            >
              Ženy
            </button>
            <button
              onClick={categoryHandler}
              name="men"
              className={"py-3 px-3 grow border border-[#d0d1d3] " + (isMen ? "mobile_underline" : "")}
            >
              Muži
            </button>
            <button
              onClick={categoryHandler}
              name="children"
              className={"py-3 px-3 grow border border-[#d0d1d3] " + (isChildren ? "mobile_underline" : "")}
            >
              Děti
            </button>
          </nav>
          {/* mobile navigation end  */}
          {/* mobile category start*/}
          <div className={"flex flex-wrap "}>
            {navbar_data_mobile?.map((item, idx) => (
              <li key={idx} className="basis-1/2 max-w-1/2 list-none">
                <img className="h-[88px] w-auto object-cover" src={item.image} alt={item.title} />
                <p className="pt-1 pr-1 pb-4 pl-[14px] text-[16px] font-[700]">{item.title}</p>
              </li>
            ))}
          </div>
          {/* mobile category end*/}
        </div>
        {/* mobile info start */}
        <div className="flex flex-col bg-[#ffff] mb-4 border-b border-[#d0d1d3]">
          <Link
            to="/faq"
            onClick={() => dispatch(mobileActions.mobile_navbar(false))}
            className="py-[18px]  grow relative text-left h-full"
          >
            <span className="leading-[24px] ml-[26px]">Nápověda</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className=" absolute right-0 top-1/2 translate-y-[-50%] h-6 object-cover mr-6  "
            />
          </Link>
          <Link to="" className="py-[18px]  grow relative text-left h-full">
            <span className="leading-[24px] ml-[26px]">Newsletter</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className=" absolute right-0 top-1/2 translate-y-[-50%] h-6 object-cover mr-6  "
            />
          </Link>
        </div>
        {user && (
          <div className="flex flex-col bg-[#ffff] mb-4 border-b border-[#d0d1d3]">
            <div
              onClick={() => dispatch(mobileActions.mobile_navbar(false))}
              className="py-[18px]  grow relative text-left h-full"
            >
              <span className="leading-[24px] ml-[26px]">Odhlásit se</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className=" absolute right-0 top-1/2 translate-y-[-50%] h-6 object-cover mr-6  "
              />
            </div>
          </div>
        )}

        {/* mobile info end */}
      </div>
    </>
  );
};

export default Navbar;
