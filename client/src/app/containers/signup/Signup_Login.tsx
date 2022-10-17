import React from "react";
import { Link } from "react-router-dom";

const SIGNUP_LOGIN = () => {
  return (
    <div className="mb-[72px]">
      <p className="font-[700] text-[28px] mb-6 ">Vítejte zpět</p>

      <Link to="/login">
        <div className="text-center p-3 border-[3px] font-[700] border-[#1a1a1a] text-4 hover:bg-[#1a1a1a] hover:text-[#ffff] hover:opacity-70">
          <button className="">Přihlásit se</button>
        </div>
      </Link>
    </div>
  );
};

export default SIGNUP_LOGIN;
