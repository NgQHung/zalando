import { faChevronLeft, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { data_sizes } from "./data";

interface Iprop {
  favoriteHandler: () => void;
  refInput: React.MutableRefObject<any>;
  optionPopup: boolean;
  setOptionPopup: (state: boolean) => void;
}

const WardrobePopup = (props: Iprop) => {
  const [selectSize, setSelectSize] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="hidden lg:block ">
      <div className={"overlay " + (props.optionPopup ? "overlay-active" : "")} />
      <div className="px-6 fixed flex justify-center items-center lg:max-w-[1216px] w-full z-[10000] left-0 right-0 mx-auto">
        <div
          ref={props.refInput}
          className={"flex flex-col  optionPopup " + (props.optionPopup ? "optionPopup-active" : "")}
        >
          <button className="p-4 text-right self-end ">
            <FontAwesomeIcon onClick={() => props.setOptionPopup(false)} className="h-6 w-6 " icon={faXmark} />
          </button>
          <div className="flex w-full">
            <div className="basis-[40%] min-w-[480px] max-h-[420px] min-h-[330px] max-w-[606px]">
              <img
                className="h-full w-full object-cover pb-8 pl-8"
                src="https://images.unsplash.com/photo-1665690366910-0c9684d50e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
            <div className="basis-[60%]">
              {selectSize ? (
                <>
                  <div className=" option_title p-6 text-[24px] leading-[28px] font-[600] tracking-[-0.24px] whitespace-nowrap">
                    <button onClick={() => setSelectSize(false)} className="h-6 w-6 text-center">
                      <FontAwesomeIcon className="mr-3 h-full object-cover" icon={faChevronLeft} />
                    </button>
                    <span>Zvolte velikost</span>
                  </div>
                  <div className="flex flex-col">
                    {data_sizes.map((size) => (
                      <button
                        onClick={() => setSelectSize(true)}
                        className="p-4 grow flex justify-between border-y border-[#dddd] hover:bg-[#f0f0f0]"
                      >
                        <span>{size}</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="option_title p-6 text-[24px] leading-[28px] font-[600] tracking-[-0.24px] whitespace-nowrap">
                    LOOSE FIT - Jednoduché triko - light blue
                  </div>
                  <div className="flex flex-col">
                    <button
                      onClick={() => setSelectSize(true)}
                      className="p-4 grow flex justify-between border-y border-[#dddd] hover:bg-[#f0f0f0]"
                    >
                      <span>Zvolte velikost</span>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <button
                      onClick={() => navigate("/clothes")}
                      className="p-4 grow flex justify-between border-y border-[#dddd] hover:bg-[#f0f0f0]"
                    >
                      <span>Zobrazit podobné předměty</span>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <button
                      onClick={props.favoriteHandler}
                      className="p-4 grow flex justify-between border-y border-[#dddd] hover:bg-[#f0f0f0]"
                    >
                      <span className="text-[red]">Odstranit</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardrobePopup;
