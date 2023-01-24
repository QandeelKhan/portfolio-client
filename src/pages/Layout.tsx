import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ThemesGear from "../components/ThemesGear";
import SideNav from "../components/SideNav";
import PortfolioDetail from "./PortfolioDetail";
import { motion, AnimatePresence } from "framer-motion";

const Layout: React.FC = () => {
    return (
        <>
            <SideNav />
            <ThemesGear />
            <Outlet />
        </>
    );
};

export default Layout;
