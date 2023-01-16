import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import PortfolioCardClick from "../PortfolioCardClick";
import About from "./About";
import Blog from "./Blog";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Layout() {
    return (
        <>
            {/* <PortfolioCardClick /> */}
            <SideNav />
            <Outlet />
        </>
    );
}
