import React from "react";
import classNames from "classnames";

interface IProps {
  children: JSX.Element;
  className: string;
}

const Button = ({ children, className, ...props }: IProps) => {
  return (
    <button type="button" className={classNames()} {...props}>
      {children}
    </button>
  );
};

export default Button;
