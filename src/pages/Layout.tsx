import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ThemesGear from "../components/ThemesGear";
import SideNav from "../components/SideNav";
import ThemeWrapper from "../components/ThemeWrapper";
import LandingPage from "./LandingPage";
import { AnimatePresence } from "framer-motion";
import BlogDetailSidebar from "../components/BlogDetailSidebar";

const Layout: React.FC = () => {
    const [showContent, setShowContent] = useState(false);
    const location: any = useLocation();
    const [key, setKey] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setShowContent(true);
        }, 2000);
    }, []);

    useEffect(() => {
        setKey(location.key);
    }, [location]);
    return (
        <>
            <LandingPage />
            {showContent && (
                <>
                    <SideNav />
                    <ThemesGear />
                    <BlogDetailSidebar />
                    <ThemeWrapper key={key}>
                        <Outlet key={key} />
                    </ThemeWrapper>
                </>
            )}
        </>
    );
};
export default Layout;
