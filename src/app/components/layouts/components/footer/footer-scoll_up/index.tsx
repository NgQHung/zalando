import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ScrollUp = () => {
  const [y, setY] = React.useState<number>();
  const [isScrollUp, setIsScrollUp] = React.useState<boolean>(false);
  // const isScrollUp = window.scrollY >= 129;
  // console.log(y);

  const scrollHandler = () => {
    // setY(window.scrollY);
    if (window.scrollY >= 129) {
      setIsScrollUp(true);
    } else {
      setIsScrollUp(false);
    }
  };
  React.useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
  });
  // console.log(y);

  return (
    <div className="w-full h-[60px] bg-[#ffff] text-right">
      <div className="">
        {isScrollUp && (
          <button className="bg-[#1a1a1a] text-[#ffff] text-[12px] px-[16px] py-[8px] mr-[16px] mt-[8px] mb-[20px] cursor-pointer fixed bottom-0 right-0 transition-all ">
            <p className="inline mr-[8px]">PŘEJÍT NAHORU</p>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ScrollUp;