import { faEnvelope, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/UI/button/Button";
import { User_login } from "../../../interfaces/authentication";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { DetectTabKey } from "../../../utils/detectTabKey";
import { UIActions } from "../../../stores/UI-slice";

interface IProps {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  refInput: React.MutableRefObject<any>;
  isClick: boolean;
  typeInput: string;
  input: User_login;
  onClickHandler: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LOGIN_FORM = ({
  onSubmitHandler,
  refInput,
  isClick,
  typeInput,
  onClickHandler,
  onChangeHandler,
  input,
  handleClickShowPassword,
  handleMouseDownPassword,
}: IProps) => {
  const loginFail = useAppSelector((state) => state.authenticationSlice.loginFail);
  // console.log(DetectTabKey);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(UIActions.inputTabKey(DetectTabKey));
  // }, [DetectTabKey]);

  return (
    <section className="login_section tex-center mx-auto my-0 border border-b-[#a0a0a0] pb-12 ">
      <div className="login_header_logo max-w-[1216px] mx-auto my-0 text-left px-6 pt-4 pb-6">
        <Link to="/home-page">
          <img className="h-[25px] object-cover leading-[25px]" src="Logo.png" alt="logo" />
        </Link>
      </div>
      <div className="login_content max-w-[33.33333%] px-6 basis-1/3 mx-auto my-0">
        <p className="font-[700] text-[28px] ">Vítejte zpět</p>
        <div className="bg-[#efeff0] p-4 flex flex-row ">
          <div className="h-5 w-5 rounded-xl bg-[#eb0037] flex justify-center items-center shrink-0 mr-2">
            <FontAwesomeIcon icon={faXmark} className="h-3 w-3 text-[#ffff] " />
          </div>
          <p className="text-[14px] leading-[20px] tracking-[0] font-[400] flex-wrap">{loginFail}</p>
        </div>
        <form className="pt-6" onSubmit={onSubmitHandler}>
          <div className="email_input pb-6 flex flex-col ">
            <p
              ref={refInput}
              className={
                " relative top-[0.4px] py-1 px-2 text-[12px] border border-[#1a1a1a] self-start " +
                (isClick && typeInput === "email" ? "bg-[#1a1a1a] text-[#ffff] " : "")
              }
            >
              E-mailová adresa
            </p>
            <div className="outline_onHover flex ">
              <FontAwesomeIcon icon={faEnvelope} className=" h-6 w-6 py-2 pl-3" />
              <input
                className="px-[10px] w-full   outline-none "
                type="text"
                placeholder="E-mailová adresa"
                name="email"
                // tabIndex={2}
                onKeyDown={DetectTabKey}
                onClick={onClickHandler}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="password_input pb-6 flex flex-col">
            <p
              ref={refInput}
              className={
                " relative top-[0.4px] py-1 px-2 text-[12px] border border-[#1a1a1a] self-start " +
                (isClick && typeInput === "password" ? "bg-[#1a1a1a] text-[#ffff] " : "")
              }
            >
              Heslo
            </p>
            <div className="outline_onHover flex   ">
              <FontAwesomeIcon icon={faLock} className="h-6 w-6 py-2 pl-3" />
              <input
                className=" px-[10px] w-full outline-none "
                type="text"
                placeholder="Heslo"
                name="password"
                // tabIndex={1}
                // onKeyDown={detectTabKey}
                onClick={onClickHandler}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <ButtonPrimary className=" bg-[#1a1a1a] text-[#ffff] w-full">
            <span className="text-4">Přihlásit se</span>
          </ButtonPrimary>
        </form>
        <p className=" mt-6 text-4 text-[#6328e0] font-[700]">
          <span className="affect_text">Zapomněli jste své heslo?</span>
        </p>
      </div>
    </section>
  );
};

export default memo(LOGIN_FORM);
