import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./landing-page.css";

function LandingPage() {
    const [show, setShow] = useState(true);
    const [landingHide, setLandingHide] = useState(false);

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

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
            setLandingHide(true);
        }, 2000);
    }, []);

    return (
        <>
            {show && (
                <div
                    className={`landing-page-container ${
                        landingHide ? "landing-hide" : ""
                    }`}
                >
                    <div className="landing-info">
                        <h1
                            className={`landing-name ${
                                !show && "landing-name-hide"
                            }`}
                        >
                            Qandeel Khan
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
            )}
        </>
    );
}

export default LandingPage;
