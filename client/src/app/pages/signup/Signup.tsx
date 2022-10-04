import { faEnvelope, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User_signup } from "../../../interfaces/authentication";
import { requestSignup } from "../../../stores/auth-slice";
import { useAppDispatch } from "../../hooks";
import "./Signup.css";

export const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [typeInput, setTypeInput] = React.useState("");
  const [isClick, setIsClick] = React.useState(false);
  const [checkbox, setCheckbox] = React.useState<any>({
    interest: [],
  });
  const [input, setInput] = React.useState<User_signup>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onClickHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setIsClick(true);
    setTypeInput(e.currentTarget.name);
  };

  let refInput = React.useRef<any>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput({ ...input, [name]: value });
  };

  const onChangeCheckboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.currentTarget;
    const { interest } = checkbox;

    if (checked) {
      setCheckbox({
        interest: [...interest, value],
      });
    } else {
      setCheckbox({
        interest: interest.filter((e: any) => e !== value),
      });
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ ...input, interest: checkbox?.interest });
    requestSignup(dispatch, { ...input, interest: checkbox?.interest }, navigate);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", (e: any) => {
      if (!refInput?.current?.contains(e.currentTarget)) {
        setIsClick(false);
      }
    });
  }, []);

  return (
    <Fragment>
      <div className="px-6 mt-12 mx-auto my-0 max-w-[33.3333%] min-w-[458px] ">
        <div className="mb-[72px]">
          <p className="font-[700] text-[28px] mb-6 ">Vítejte zpět</p>

          <Link to="/login">
            <div className="text-center p-3 border-[3px] font-[700] border-[#1a1a1a] text-4 hover:bg-[#1a1a1a] hover:text-[#ffff] hover:opacity-70">
              <button className="">Přihlásit se</button>
            </div>
          </Link>
        </div>
        <div className="absolute top-[250px] left-0 right-0 h-[1px] w-full bg-[#d0d1d3]" />
        <div className="login_content mt-[36px] ">
          <p className="text-[28px] font-[700] ">Jsem tu poprvé</p>
          <form className="pt-6" onSubmit={onSubmitHandler}>
            <div className="firstName_input pb-6 flex flex-col ">
              <p
                ref={refInput}
                className={
                  " relative top-[1px] py-1 px-2 text-[12px] border border-t-[#1a1a1a] border-l-[#1a1a1a] border-r-[#1a1a1a] self-start " +
                  (isClick && typeInput === "firstName" ? "bg-[#1a1a1a] text-[#ffff] " : "")
                }
              >
                Křestní jméno*
              </p>
              <div className="outline_onHover flex items-center ">
                {/* <FontAwesomeIcon icon={faEnvelope} className="h-6 py-2 pl-3" /> */}
                <input
                  className="py-3 px-[10px] w-full h-full outline-none "
                  type="text"
                  placeholder="Křestní jméno"
                  name="firstName"
                  onClick={onClickHandler}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="lastName_input pb-6 flex flex-col ">
              <p
                ref={refInput}
                className={
                  " relative top-[1px] py-1 px-2 text-[12px] border border-t-[#1a1a1a] border-l-[#1a1a1a] border-r-[#1a1a1a] self-start " +
                  (isClick && typeInput === "lastName" ? "bg-[#1a1a1a] text-[#ffff] " : "")
                }
              >
                Příjmení*
              </p>
              <div className="outline_onHover flex items-center ">
                <input
                  className="py-3 px-[10px] w-full h-full outline-none "
                  type="text"
                  placeholder="Příjmení"
                  name="lastName"
                  onClick={onClickHandler}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
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
              <p className="text-[14px] mt-2 ">Vaše heslo musí být delší než 6 znaků.</p>
            </div>
            <div className="text-[16px] pb-6 border-b-[1px]  border-[#d0d1d3] ">
              <p>
                Co vás nejvíc zajímá? <span className="text-[#66676e] text-[14px]">(Volitelné)</span>
              </p>
              <p className="pt-4 pb-6 text-[14px] text-[#66676e] ">
                Tuto informaci využijeme k výběru doporučení vám přesně na míru.
              </p>
              <ul className="flex flex-col w-1/2    ">
                <li className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    value="women"
                    className="h-[26px] w-[26px] cursor-pointer "
                    onChange={onChangeCheckboxHandler}
                  />
                  <label className="pl-[10px]" htmlFor="damy">
                    Dámská móda
                  </label>
                </li>
                <li className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    value="men"
                    className="h-[26px] w-[26px] cursor-pointer"
                    onChange={onChangeCheckboxHandler}
                  />
                  <label className="pl-[10px] " htmlFor="pani">
                    Pánská móda
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    type="checkbox"
                    value="noInterest"
                    className="h-[26px] w-[26px] cursor-pointer"
                    onChange={onChangeCheckboxHandler}
                  />
                  <label className="pl-[10px]" htmlFor="none">
                    Bez preference
                  </label>
                </li>
              </ul>
            </div>
            <div className="pb-6 flex items-start pt-6 justify-between">
              <input
                type="checkbox"
                value="dailyInfo"
                className="h-[26px] w-[26px] pr-[24px] shrink-0  cursor-pointer"
                onChange={onChangeCheckboxHandler}
              />
              <label className="pl-3">
                Ano, chci občas dostávat e-maily o speciálních nabídkách, nových produktech a exkluzivních propagačních
                akcích. Svůj odběr můžu kdykoli zrušit. (Volitelné)
              </label>
            </div>
            <button className="text-center p-4 bg-[#1a1a1a] text-[#ffff] hover:opacity-70 mb-3 w-full">
              <span className="text-4">Zaregistrovat se</span>
            </button>
            <p className="text-[12px] mb-4 text-[#66676e]">* povinné pole</p>
            <p>
              Registrací souhlasíte s našimi {""}
              <span className="mt-6 text-4 text-[#6328e0] affect_text"> Podmínkami použití</span>. Prosím přečtěte si
              naše <span className="mt-6 text-4 text-[#6328e0] affect_text">Zásady ochrany osobních údajů.</span>
            </p>
          </form>

          {/* <p className="affect_text mt-6 text-4 text-[#6328e0] font-[700]">Zapomněli jste své heslo?</p> */}
        </div>
      </div>
    </Fragment>
  );
};
