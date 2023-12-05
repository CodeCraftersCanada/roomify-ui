import React from "react";
import { RoutePath } from "../enums/RoutePath";
// import { SidebarNavItemProps } from "./SidebarNavItemProps";

export interface RouteProps {
    name: string;
    path: RoutePath;
    component: React.ComponentType;
}
