import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { data_myAccount } from "./data";

const MyAccount = () => {
  return (
    <div>
      <div className="w-full relative lg:max-w-[1216px] mx-auto my-0  ">
        <div className="flex mt-6 mx-6">
          <div className="myAccount_navbar basis-[16.666%] hidden lg:block">
            {data_myAccount.map((items) => (
              <div className="mb-4">
                <p className="myAccount_navbar-title text-[16px] leading-[23.2px] font-[700] mb-2">{items.title}</p>
                {items.data.map((item) => (
                  <ul className="myAccount_navbar-list text-[14px] leading-[20px]">
                    <li className="myAccount_navbar-item ml-3 mb-3">
                      <span className="affect_text">{item}</span>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className="myAccount_content basis-[83.333%]">
            <div className="myAccount_content-title">
              <h1 className="text-[48px] leading-[40px] tracking-[-0.4px] text_tiempos font-[400] mb-4">Váš účet</h1>
              <p className="text-[16px] leading-[23.2px] tracking-[-0.16]">
                Vítejte na svém účtu na Zalandu. Zde si můžete kontrolovat objednávky, vrácení zboží či upravovat osobní
                údaje.
              </p>
            </div>
            <div className="myAccount_content mt-12 mb-9 text-center flex flex-col">
              <div className="h-12 w-12 shrink-0 self-center">
                <FontAwesomeIcon className="h-full w-full object-cover" icon={faShoppingBag} />
              </div>
              <p className="mb-4 mt-9 text-[16px] leading-[23.2px] tracking-[-0.16px]">
                Nic vám neuniklo, všechno víte! :)
              </p>
              <p className="text-[14px] leading-[20px] mb-6">
                Jakmile budeme vědět o vašich objednávkách, vráceném zboží nebo vrácení pěněz něco nového, dáme vám
                vědět!
              </p>
              <button className="p-3 self-center bg-[#1a1a1a] text-[#ffff] font-[700] text-center hover:opacity-80">
                <span>Pokračovat v nákupech</span>
              </button>
            </div>
          </div>
        </div>
        {/* {data_myAccount} */}
      </div>
    </div>
  );
};

export default MyAccount;
