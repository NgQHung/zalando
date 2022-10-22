import React from "react";

interface IProps {
  children: JSX.Element;
  className: string;
  onClick?: () => void;
}

const ButtonPrimary = ({ children, className, onClick, ...props }: IProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-[16px] w-full leading-[24px] tracking-[-0.16px] whitespace-nowrap font-[700] text-ellipsis hover:opacity-80 p-3 transition-all text-[#ffff] text-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
