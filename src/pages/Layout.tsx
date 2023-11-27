import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ThemesGear from "../components/ThemesGear";
import SideNav from "../components/sideNav/SideNav";
import ThemeWrapper from "../components/ThemeWrapper";
import LandingPage from "./LandingPage";
import BlogDetailSidebar from "../components/BlogDetailSidebar";
import { useDispatch } from "react-redux";
import {
    setGearOpen,
    setNavVisible,
    setSideBarVisible,
} from "../redux/reducers/eventsSlice";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Layout: React.FC = () => {
    const [showContent, setShowContent] = useState(false);
    const location: any = useLocation();
    const [key, setKey] = useState(0);

    const dispatch = useDispatch();
    const handleOutlet = () => {
        dispatch(setNavVisible(false));
        dispatch(setGearOpen(false));
        dispatch(setSideBarVisible(false));
    };

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
                        <div onClick={handleOutlet}>
                            <Outlet key={key} />
                        </div>
                    </ThemeWrapper>
                    <FloatingWhatsApp
                        phoneNumber="03157051720"
                        accountName="Qandeel Haider Khan"
                        avatar="images/other/profile-img.jpg"
                    />
                </>
            )}
        </>
    );
};
export default Layout;
