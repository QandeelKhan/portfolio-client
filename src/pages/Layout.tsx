import React, { useEffect, useState, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ThemesGear from "../components/theme/ThemesGear";
import SideNav from "../components/sideNav/SideNav";
import ThemeWrapper from "../components/theme/ThemeWrapper";
import LandingPageAndLoadingSkeleton from "./LandingPageAndLoadingSkeleton";
import BlogDetailSidebar from "../components/BlogDetailSidebar";
import { useDispatch, useSelector } from "react-redux";
import {
    setGearOpen,
    setNavVisible,
    setSideBarVisible,
} from "../redux/reducers/eventsSlice";
import CustomFloatingWhatsApp from "../components/CustomFloatingWhatsApp";
import { RootState } from "../redux/store";

const Layout: React.FC = () => {
    const [showContent, setShowContent] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const [key, setKey] = useState<number>(0);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);
    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    // Get theme from Redux
    const selectedTheme = useSelector(
        (state: RootState) => state.themes.selectedTheme
    );

    const dispatch = useDispatch();
    const handleOutlet = () => {
        dispatch(setNavVisible(false));
        dispatch(setGearOpen(false));
        dispatch(setSideBarVisible(false));
    };

    // Check if this is the first load
    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisitedBefore');
        if (hasVisited) {
            setIsInitialLoad(false);
            setShowContent(true); // Show content immediately for returning visitors
        } else {
            // For first-time visitors, wait for the landing animation
            setTimeout(() => {
                setShowContent(true);
            }, 2000);
        }
    }, []);

    // Handle route changes and loading states
    useEffect(() => {
        // Start loading on route change
        setIsLoading(true);

        // Generate a numeric key based on the pathname and theme
        // This ensures the animation triggers when either the route or theme changes
        setKey(prev => prev + 1);

        // Wait for content to be ready
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, isHomePage ? 300 : 500); // Shorter loading time for home page

        return () => clearTimeout(timer);
    }, [location.pathname, isHomePage, selectedTheme]); // Add selectedTheme as dependency

    return (
        <div className={`layout-container ${ isHomePage ? 'home-layout' : '' }`}>
            {/* SideNav container */}
            <div className="sidenav-container">
                <SideNav />
            </div>

            {/* Loading screen - only show if not on home page or during initial load */}
            {(isLoading || isInitialLoad) && <LandingPageAndLoadingSkeleton />}

            {/* Main content */}
            {showContent && (
                <div className={`content-container ${ isHomePage ? 'home-page-content no-transition' : '' }`} ref={contentRef}>
                    <ThemesGear />
                    <BlogDetailSidebar />
                    <ThemeWrapper key={key}>
                        <div onClick={handleOutlet}>
                            <Outlet key={key} />
                        </div>
                    </ThemeWrapper>
                    <CustomFloatingWhatsApp
                        phoneNumber="03157051720"
                        accountName="Qandeel Haider Khan"
                        avatar="images/other/profile-img.jpg"
                    />
                </div>
            )}
        </div>
    );
};
export default Layout;
