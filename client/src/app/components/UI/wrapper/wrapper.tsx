import React from "react";

interface IProps {
  children: JSX.Element;
  className: string;
}

const Wrapper = ({ children, className, ...props }: IProps) => {
  return (
    <div className={`font-[14px]  z-[100] transition-background ${className}`} {...props}>
      <div className="px-2 lg:max-w-[1216px] relative mx-6 md:mx-auto md:my-0 ">{children}</div>
    </div>
  );
};

export default Wrapper;
