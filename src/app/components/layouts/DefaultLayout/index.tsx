import React, { Fragment } from "react";
import Banner from "../components/banner";
import Favorite from "../components/favorite_brand_category";
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
      <Favorite />
      <Banner />
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
