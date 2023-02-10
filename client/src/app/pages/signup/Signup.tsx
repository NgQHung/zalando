import React, { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User_signup } from "../../../interfaces/authentication";
import { requestSignup } from "../../../services/auth-slice";
import { useAppDispatch } from "../../hooks";
import "./Signup.css";
import SIGNUP_FORM from "../../containers/signup/Signup_Form";
import SIGNUP_LOGIN from "../../containers/signup/Signup_Login";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import SIGNUP_HEADER_MOBILE from "../../containers/signup/mobile/Signup_header_mobile";
import { motion } from "framer-motion";
import LOGIN_FORM from "../../containers/login/Login_form";

export const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [typeInput, setTypeInput] = React.useState("");
  const [isClick, setIsClick] = React.useState(false);
  const [checkbox, setCheckbox] = React.useState<any>({
    interest: [],
  });
  const location = useLocation();
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

  useOnClickOutside(refInput, () => setIsClick(false));

  return (
    <Fragment>
      <SIGNUP_HEADER_MOBILE />

      {/* <motion.div
        initial={{ y: "28px", opacity: 1 }}
        animate={{
          y: 350,
          opacity: 0,
          transition: {
            duration: 1,
          },
        }}
      > */}
      <div className={"login_form " + (location.pathname === "/signup" ? "login_form_hidden" : "")}>
        <LOGIN_FORM />
      </div>
      {/* </motion.div> */}

      <div className="login_content sm:max-w-[75%] sm:basis-3/4 md:max-w-[50%] md:basis-1/2 lg:max-w-[41.6%] lg:basis-[41.6%] xl:max-w-[33.33333%] px-6 xl:basis-1/3 mx-auto my-0">
        <SIGNUP_LOGIN />
      </div>
      <motion.div
        initial={{ y: "200px" }}
        animate={{
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        className="absolute top-[260px] left-0 right-0 h-[1px] w-full bg-[#d0d1d3]"
      />
      <motion.div
        initial={{ y: "200px" }}
        animate={{
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        className="login_content sm:max-w-[75%] sm:basis-3/4 md:max-w-[50%] md:basis-1/2 lg:max-w-[41.6%] lg:basis-[41.6%] xl:max-w-[33.33333%] px-6 xl:basis-1/3 mx-auto my-0"
      >
        <p className="font-[700] text-[20px] leading-[28px] mb-6">Jsem tu poprvé</p>
      </motion.div>
      <motion.div
        initial={{ y: "200px" }}
        animate={{
          y: 0,
          transition: {
            duration: 1,
          },
        }}
      >
        <SIGNUP_FORM
          onSubmitHandler={onSubmitHandler}
          refInput={refInput}
          isClick={isClick}
          typeInput={typeInput}
          onClickHandler={onClickHandler}
          onChangeHandler={onChangeHandler}
          onChangeCheckboxHandler={onChangeCheckboxHandler}
        />
      </motion.div>
    </Fragment>
  );
};
