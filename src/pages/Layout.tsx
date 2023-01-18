import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Portfolio from "./Portfolio";
import PortfolioDetail from "./PortfolioDetail";

export default function Layout() {
    return (
        <>
            {/* <PortfolioDetail /> */}

            <SideNav />
            <Outlet />
        </>
    );
}
