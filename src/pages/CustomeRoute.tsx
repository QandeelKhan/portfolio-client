import React from "react";
import { Route, RouteProps } from "react-router-dom";

const CustomRoute: React.FC<RouteProps> = (props) => {
    return <Route {...props} />;
};

export default CustomRoute;
