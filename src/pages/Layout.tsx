import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const Layout: React.FC = () => {
    return (
        <>
            <SideNav />
            <Outlet />
        </>
    );
};

export default Layout;
