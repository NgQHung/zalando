import React from "react";
import { Home } from "../pages/home/Home";
import { MuziPage } from "../pages/muzi";
import { DetiPage } from "../pages/deti";
import { routeConfig } from "./routeConfig";
import { PublicRoutes } from "./types";

const publicRoutes: PublicRoutes[] = [
  {
    path: routeConfig.home,
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
];

export { publicRoutes };
