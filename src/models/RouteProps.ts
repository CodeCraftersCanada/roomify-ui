import React from "react";
import { RoutePath } from "../enums/RoutePath";

export interface RouteProps {
    name: string;
    path: RoutePath;
    origin?: string,
    component: React.ComponentType;
}
