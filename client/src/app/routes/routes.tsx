import React from "react";
import { Home } from "../pages/home/Home";
import { routeConfig } from "./routeConfig";
import { PublicRoutes } from "./types";
import { Login } from "../pages/login/Login";
import { Signup } from "../pages/signup/Signup";
import { NoFooterHeaderLayout } from "../layouts/NoFooter&HeaderLayout";
import FormLayout from "../layouts/FormLayout";
import Product from "../pages/product/Product";
import SearchMobile from "../pages/mobile/search";
import Faq from "../pages/faq/Faq";
import Wardrobe from "../pages/wardrobe/Wardrobe";
import WardrobeList from "../pages/wardrobe-list/WardrobeList";
import MyAccount from "../pages/myAccount/MyAccount";
import { ListProducts } from "../pages/product-list/ListProducts";

const publicRoutes: PublicRoutes[] = [
  {
    path: routeConfig.home,
    redirect: routeConfig.women,
    component: Home,
  },
  {
    path: routeConfig.women,
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
  },
  {
    path: routeConfig.searchMobile,
    component: SearchMobile,
    layout: NoFooterHeaderLayout,
  },
  {
    path: routeConfig.listProducts,
    component: ListProducts,
  },
  {
    path: routeConfig.frequentlyAskedQuestion,
    component: Faq,
  },
  {
    path: routeConfig.wardrobe,
    component: Wardrobe,
  },
  {
    path: routeConfig.wardrobe_lists_liked,
    component: WardrobeList,
  },
  {
    path: routeConfig.wardrobe_lists_liked_outfits,
    component: WardrobeList,
  },
  {
    path: routeConfig.wardrobe_lists_owned,
    component: WardrobeList,
  },
  {
    path: routeConfig.wardrobe_lists_sell,
    component: WardrobeList,
  },
  {
    path: routeConfig.myAccount,
    component: MyAccount,
  },
];

export { publicRoutes };
