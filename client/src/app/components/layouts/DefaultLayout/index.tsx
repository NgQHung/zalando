import React, { Fragment } from "react";
import { useAppSelector } from "../../../hooks";
// import { useAppSelector } from "../../../hooks";
import Banner from "../components/banner";
import Favorite from "../components/favorite_brand_category";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../mobile/Navbar";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  const mobile_navbarActive = useAppSelector((state) => state.mobileSlice.navbarActive);

  return (
    <Fragment>
      <Header />
      <Navbar />
      {children}
      <Favorite />
      <Banner />
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
