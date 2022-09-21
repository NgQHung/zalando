import React, { Fragment } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
