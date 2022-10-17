import { faEnvelope, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IProps {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  refInput: React.MutableRefObject<any>;
  isClick: boolean;
  typeInput: string;
  onClickHandler: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LOGIN_FORM = ({ onSubmitHandler, refInput, isClick, typeInput, onClickHandler, onChangeHandler }: IProps) => {
  return (
    <section className="login_section tex-center mx-auto my-0 border border-b-[#a0a0a0] pb-12 ">
      <div className="login_header_logo max-w-[1216px] mx-auto my-0 text-left px-6 pt-4 pb-6">
        <img
          className="h-[25px] object-cover leading-[25px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Zalando_logo.svg/2560px-Zalando_logo.svg.png"
          alt="logo"
        />
      </div>
      <div className="login_content max-w-[33.33333%] px-6 basis-1/3 mx-auto my-0">
        <p className="font-[700] text-[28px] ">Vítejte zpět</p>
        <form className="pt-6" onSubmit={onSubmitHandler}>
          <div className="email_input pb-6 flex flex-col ">
            <p
              ref={refInput}
              className={
                " relative top-[1px] py-1 px-2 text-[12px] border border-t-[#1a1a1a] border-l-[#1a1a1a] border-r-[#1a1a1a] self-start " +
                (isClick && typeInput === "email" ? "bg-[#1a1a1a] text-[#ffff] " : "")
              }
            >
              E-mailová adresa
            </p>
            <div className="outline_onHover flex items-center ">
              <FontAwesomeIcon icon={faEnvelope} className="h-6 py-2 pl-3" />
              <input
                className="py-3 px-[10px] w-full h-full outline-none "
                type="text"
                placeholder="E-mailová adresa"
                name="email"
                onClick={onClickHandler}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="password_input pb-6 flex flex-col">
            <p
              ref={refInput}
              className={
                " relative top-[1px] py-1 px-2 text-[12px] border border-t-[#1a1a1a] border-l-[#1a1a1a] border-r-[#1a1a1a] self-start " +
                (isClick && typeInput === "password" ? "bg-[#1a1a1a] text-[#ffff] " : "")
              }
            >
              Heslo
            </p>
            <div className="outline_onHover flex items-center   ">
              <FontAwesomeIcon icon={faLock} className="h-6 py-2 pl-3" />
              <input
                className="py-3 px-[10px] w-full h-full outline-none"
                type="text"
                placeholder="Heslo"
                name="password"
                onClick={onClickHandler}
                onChange={onChangeHandler}
              />
              <FontAwesomeIcon icon={faEye} className="h- py-2 pr-3" />
            </div>
          </div>
          <button className="text-center p-4 bg-[#1a1a1a] text-[#ffff] w-full">
            <span className="text-4">Přihlásit se</span>
          </button>
        </form>
        <p className="affect_text mt-6 text-4 text-[#6328e0] font-[700]">Zapomněli jste své heslo?</p>
      </div>
    </section>
  );
};

export default LOGIN_FORM;
