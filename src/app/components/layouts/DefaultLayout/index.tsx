import React, { Fragment } from "react";
// import { useAppSelector } from "../../../hooks";
import Banner from "../components/banner";
import Favorite from "../components/favorite_brand_category";
import Footer from "../components/footer";
import Header from "../components/header";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  // const hideAllElement = useAppSelector(state => state.UISlice.hideAllElement)
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
