import React from "react";
import { Home } from "../pages/home/Home";
import { MuziPage } from "../pages/muzi";
import { DetiPage } from "../pages/deti";
import { routeConfig } from "./routeConfig";
import { PublicRoutes } from "./types";
import { Login } from "../pages/login/Login";
import { Signup } from "../pages/signup/Signup";
import { NoFooterHeaderLayout } from "../components/layouts/NoFooter&HeaderLayout";
import FormLayout from "../components/layouts/FormLayout";
import Product from "../pages/product/Product";
import SearchMobile from "../pages/mobile/search";

const publicRoutes: PublicRoutes[] = [
  {
    path: routeConfig.home,
    redirect: routeConfig.damy,
    component: Home,
  },
  {
    path: routeConfig.muzi,
    component: MuziPage,
  },
  {
    path: routeConfig.deti,
    component: DetiPage,
  },
  {
    path: routeConfig.damy,
    component: Home,
  },
  {
    path: routeConfig.login,
    component: Login,
    layout: NoFooterHeaderLayout,
  },
  {
    path: routeConfig.signup,
    component: Signup,
    layout: FormLayout,
  },
  {
    path: routeConfig.product,
    component: Product,
    // layout: FormLayout,
  },
  {
    path: routeConfig.searchMobile,
    component: SearchMobile,
    layout: NoFooterHeaderLayout,
  },
];

export { publicRoutes };
