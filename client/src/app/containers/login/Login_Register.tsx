import React, { memo } from "react";
import { Link } from "react-router-dom";

const LOGIN_REGISTER = () => {
  return (
    <section className="signup_section  ">
      <div className="px-6 mt-12 mx-auto my-0 max-w-[33.3333%]  ">
        {/* <p className="text-[28px] font-[700] mb-6">Jsem tu poprvé</p> */}
        <Link to="/signup">
          <div className="text-center p-3 border border-[#1a1a1a] text-4 hover:bg-[#1a1a1a] hover:text-[#ffff] ">
            <button className="">Zaregistrovat se</button>
          </div>
        </Link>
      </div>
      <div className=" p-6 text-center">
        <span className="affect_text text-[14px] m-4  ">Zásady ochrany soukromí</span>
        <span className="affect_text text-[14px] m-4 ">Podmínky použití</span>
        <span className="affect_text text-[14px] mZapomněli jste své heslo?-4 ">Právní informace</span>
        <div className="sign_logo pt-4 pb-12 ">
          <img
            className="h-8 object-cover relative left-1/2 translate-x-[-50%] "
            src="https://cdn-images-1.medium.com/max/1200/1*fYAdvwatzBRQ4S6l7rGnTQ.png"
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(LOGIN_REGISTER);
