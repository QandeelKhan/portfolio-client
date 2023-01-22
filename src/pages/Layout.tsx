import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MyComponent from "../components/MyComponent";
import SideNav from "../components/SideNav";
import PortfolioDetail from "./PortfolioDetail";

const Layout: React.FC = () => {
    // useEffect(() => {
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);
    return (
        <>
            <SideNav />
            <MyComponent />
            <div className="pages">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
