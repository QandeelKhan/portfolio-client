import React, { useEffect, useState } from "react";
import "./css/side-nav.css";
import { ResumeModeMenuItems } from "./MenuItems";
import { Button } from "./Button";
import UpworkIcon from "./icons/ResumeModeIcons/UpworkIcon";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
    setClientPortalClicked,
    setNavVisible,
} from "../redux/reducers/eventsSlice";
import { unSetUserToken } from "../redux/features/authSlice";
import { removeToken } from "../redux/services/localStorageService";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResumeModeIcons from "./ResumeModeIcons";
import ClientsPortalModeIcons from "./ClientsPortalModeIcons";

const SideNav: React.FC = (props: any) => {
    const { access_token } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const { navVisible, clientPortalClicked } = useSelector(
        (state: RootState) => state.events
    );

    const handleResize = () => {
        if (navVisible) {
            dispatch(setNavVisible(false));
        } else {
            dispatch(setNavVisible(true));
        }
    };

    const handleToggleNav = () => {
        dispatch(setNavVisible(!navVisible));
    };

    useEffect(() => {
        handleResize();
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        // dispatch(unSetUserInfo({ name: "", email: "" }));
        dispatch(unSetUserToken({ access_token: null }));
        removeToken();
        navigate("/login");
    };

    const [buttonClicked, setButtonClicked] = useState(false);

    const notify = () =>
        toast("oops! Please login first to open Clients Portal..");

    const handleClick = () => {
        if (access_token) {
            setButtonClicked(true);
            dispatch(setClientPortalClicked(true));
            navigate("/client-portal");
        }
        if (!access_token) {
            navigate("/login");
            notify();
            dispatch(setClientPortalClicked(false));
        }
    };
    // useEffect(() => {
    //     handleClick();
    // }, [buttonClicked]);

    return (
        <>
            <div className="toggle-mode">
                <>{console.log(`click status ${clientPortalClicked}`)}</>
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

                <div className="mobile-header">
                    <a href="/" className="mobile-header-text">
                        Qandeel Khan
                    </a>
                </div>
            </div>

            <div
                className={`nav ${!navVisible ? "nav-hidden" : "nav-visible"}`}
            >
                <div className="image-area">
                    <img
                        src="images/other/profile-img.jpg"
                        alt="qandeel baloch profile"
                    />
                    <div className="person-name">
                        <span>QANDEEL KHAN</span>
                    </div>
                </div>
                <div className="menubar-area">
                    <ul>
                        {clientPortalClicked ? (
                            <ClientsPortalModeIcons />
                        ) : (
                            <ResumeModeIcons />
                        )}
                    </ul>
                </div>
                {/* <Link onClick={handleC} to="/client-portal" className="login-anchor"> */}
                <button
                    onClick={handleClick}
                    type="submit"
                    className="send-messsage-btn login-sign"
                    value="Send Message"
                >
                    CLIENT PORTAL
                </button>
                <ToastContainer />
                {/* </Link> */}

                {!access_token ? (
                    <a href="/login" className="login-anchor">
                        <button
                            type="submit"
                            className="send-messsage-btn login-sign"
                            value="Send Message"
                        >
                            Login / Sign Up
                        </button>
                    </a>
                ) : (
                    <a href="#" onClick={handleLogout} className="login-anchor">
                        <button
                            type="submit"
                            className="send-messsage-btn login-sign"
                            value="Send Message"
                        >
                            Logout
                        </button>
                    </a>
                )}

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
