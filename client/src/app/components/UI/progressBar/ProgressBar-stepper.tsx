import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProgressBar = () => {
  return (
    <>
      <div className="p-5">
        <div className="mx-4 p-4">
          <div className="flex items-center">
            <div className="flex items-center text-teal-600 relative">
              <div className="rounded-full flex justify-center items-center transition duration-500 ease-in-out h-[30px] w-[30px] py-3 border-2 border-teal-600">
                <FontAwesomeIcon className="h-4 w-4" icon={faCheck} />
              </div>
              <div className="absolute bottom-[-6px] left-0 translate-x-[calc(-50%+16px)] translate-y-[100%] text-center w-32  text-[10px] leading-[11px] font-medium tracking-[0.5px] whitespace-nowrap  text-teal-600 ">
                Přihlasit se
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
            <div className="flex items-center text-white relative">
              <div className="rounded-full flex justify-center items-center transition duration-500 ease-in-out h-[30px] w-[30px] py-3 border-2 bg-teal-600 border-teal-600">
                <span className="text-[12px]">2</span>
              </div>
              <div className="absolute bottom-[-6px] left-0 translate-x-[calc(-50%+16px)] translate-y-[100%] text-center w-32  text-[10px] leading-[11px] font-medium tracking-[0.5px] whitespace-nowrap  text-teal-600 ">
                Adresa
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div className="flex items-center text-gray-500 relative">
              <div className="rounded-full flex justify-center items-center transition duration-500 ease-in-out h-[30px] w-[30px] py-3 border-2 border-gray-300">
                <span className="text-[12px]">3</span>
              </div>
              <div className="absolute bottom-[-6px] left-0 translate-x-[calc(-50%+16px)] translate-y-[100%] text-center w-32  text-[10px] leading-[11px] font-medium tracking-[0.5px] whitespace-nowrap  text-gray-500">
                Platba
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div className="flex items-center text-gray-500 relative">
              <div className="rounded-full flex justify-center items-center transition duration-500 ease-in-out h-[30px] w-[30px] py-3 border-2 border-gray-300">
                <span className="text-[12px]">4</span>
              </div>
              <div className="absolute bottom-[-6px] left-0 translate-x-[calc(-50%+16px)] translate-y-[100%] text-center w-32  text-[10px] leading-[11px] font-medium tracking-[0.5px] whitespace-nowrap  text-gray-500">
                Potvrdit
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div className="flex items-center text-gray-500 relative">
              <div className="rounded-full flex justify-center items-center transition duration-500 ease-in-out h-[30px] w-[30px] py-3 border-2 border-gray-300">
                <span className="text-[12px]">5</span>
              </div>
              <div className="absolute bottom-[-6px] left-0 translate-x-[calc(-50%+16px)] translate-y-[100%] text-center w-32  text-[10px] leading-[11px] font-medium tracking-[0.5px] whitespace-nowrap  text-gray-500">
                Hotovo!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
