import { faBagShopping, faEllipsis, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IProps {
  favoriteHandler: () => void;
  optionsHandler: () => void;
  addShoppingCartHandler: () => void;
}

const WardrobeItems = ({ favoriteHandler, optionsHandler, addShoppingCartHandler }: IProps) => {
  return (
    <div className="px-2">
      <li className="relative max-w-[288px] mb-[36px] basis-full xs:basis-1/2 md:basis-1/4 mt-6">
        <button onClick={favoriteHandler} className="h-12 w-12 text-center absolute top-3 right-0 p-3 bg-[#ffff]">
          <FontAwesomeIcon icon={faXmark} className="h-full object-cover" />
        </button>
        <div className="flex flex-col absolute bottom-3 right-0">
          <button onClick={optionsHandler} className="h-12 w-12 text-center p-3 bg-[#ffff]">
            <FontAwesomeIcon icon={faEllipsis} className="h-full object-cover" />
          </button>
          <button onClick={addShoppingCartHandler} className="h-12 w-12 text-center p-3 bg-[#1a1a1a] text-[#ffff]">
            <FontAwesomeIcon icon={faBagShopping} className="h-full object-cover" />
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1665690366910-0c9684d50e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </li>
    </div>
  );
};

export default WardrobeItems;
