import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/landing-page.css";

function LandingPageAndLoadingSkeleton() {
    const [landingHide, setLandingHide] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const location = useLocation();

    const dots = [
        { color: "red" },
        { color: "blue" },
        { color: "green" },
        { color: "yellow" },
        { color: "purple" },
        { color: "pink" },
        { color: "orange" },
        { color: "brown" },
    ];

    // Check if this is the first load or a route change
    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisitedBefore');
        if (hasVisited) {
            setIsInitialLoad(false);
        } else {
            sessionStorage.setItem('hasVisitedBefore', 'true');
        }

        // Add fade-in effect
        setTimeout(() => {
            setLandingHide(true);
        }, isInitialLoad ? 1800 : 400);

        return () => {
            // Reset state when component unmounts
            setLandingHide(false);
        };
    }, [location.pathname, isInitialLoad]);

    // Determine if we're on the home page
    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    return (
        <div
            className={`landing-page-container no-transition ${ landingHide ? "landing-fade-out" : "" } 
                ${ !isInitialLoad ? "content-only-loader" : "" } ${ isHomePage ? "home-page-loader" : "" }`}
        >
            <div className="landing-info no-transition">
                <h1 className="landing-name no-transition">
                    {"Qandeel Khan"}
                </h1>
                <div className="dots-container">
                    {dots.map((dot, index) => (
                        <div
                            key={index}
                            className="dot"
                            style={{ background: dot.color }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LandingPageAndLoadingSkeleton;
