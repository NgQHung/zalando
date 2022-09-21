import React from "react";

interface IProps {
  children: React.ReactNode;
  bg_color: string;
}

const Container: React.FC<IProps> = ({ children, bg_color }) => {
  return (
    <div className={" w-full " + bg_color}>
      <div className="max-w-[1216px] flex justify-between items-center mx-[152px]">{children}</div>
    </div>
  );
};

export default Container;
