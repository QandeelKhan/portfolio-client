import React, { useEffect, useState } from "react";
import "./side-nav.css";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import UpworkIcon from "./icons/UpworkIcon";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setNavVisible } from "../redux/eventsSlice";

const SideNav: React.FC = (props: any) => {
    const [toggleMode, setToggleMode] = useState(false);

    const dispatch = useDispatch();
    const navVisible = useSelector(
        (state: RootState) => state.events.navVisible
    );

    const handleResize = () => {
        if (navVisible) {
            dispatch(setNavVisible(false));
            setToggleMode(false);
        } else {
            dispatch(setNavVisible(true));
            setToggleMode(false);
        }
    };

    const handleToggleNav = () => {
        dispatch(setNavVisible(!navVisible));
    };

    useEffect(() => {
        handleResize();
    }, []);
    return (
        <>
            <div className="toggle-mode">
                {
                    <div
                        className={`toggler-container ${
                            navVisible ? "toggler-clicked" : "toggler-unclicked"
                        }`}
                    >
                        <button
                            onClick={handleToggleNav}
                            className={`toggler ${
                                navVisible ? "show-toggler" : "hide-toggler"
                            }`}
                        >
                            {navVisible ? (
                                <i className="fa-solid fa-xmark toggle-icon"></i>
                            ) : (
                                <i className="fas fa-bars toggle-icon"></i>
                            )}
                        </button>
                    </div>
                }
                <div className="mobile-header">Qandeel Khan</div>
            </div>

            <div
                className={`nav ${!navVisible ? "nav-hidden" : "nav-visible"}`}
            >
                <div className="image-area">
                    <img src="images/other/profile-img.jpg" alt="profile-img" />
                    <div className="person-name">
                        <span>QANDEEL KHAN</span>
                    </div>
                </div>
                <div className="menubar-area">
                    <ul>
                        {MenuItems.map((item, index) => {
                            return (
                                <li>
                                    <Button
                                        NavBtnIcon={item.icon}
                                        className={item.cName}
                                        NavBtnTitle={item.title}
                                        navigateTo={item.navigateTo}
                                    ></Button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footer-area">
                    <div className="footer-icons">
                        <a
                            href="https://www.instagram.com/qandeelhaiderkhan/"
                            className="side-nav-social-links"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className="fa-brands fa-square-instagram icons-social"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/qandeelhaiderkhan"
                            className="side-nav-social-links"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className="fa-brands fa-square-facebook icons-social"></i>
                        </a>
                        <a
                            href="https://twitter.com/CQandeelhaider"
                            className="side-nav-social-links"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className="fa-brands fa-square-twitter icons-social"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/qandeel-khan-b89a851a0/"
                            className="side-nav-social-links"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className="fa-brands fa-linkedin icons-social"></i>
                        </a>
                        <a
                            href="https://www.upwork.com/freelancers/~014d77a2fec0748c13"
                            className="side-nav-social-links side-nav-upwork-link"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <UpworkIcon />
                        </a>
                    </div>
                    <div className="footer-text">
                        <span>
                            2023 © developed by Qandeel Khan.
                            <br /> All Right Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideNav;

// in this component why my navbar is visible by default until i resize it just little bit it can not detect that to hide the navbar automatically by default below 769px, why i need to resize the screen a little bit then it detects that the screen is less then 769 px
