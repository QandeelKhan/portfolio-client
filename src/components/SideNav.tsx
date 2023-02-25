import React, { useEffect, useState } from "react";
import "./css/side-nav.css";
import { CPModeMenuItems, ResumeModeMenuItems } from "./MenuItems";
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
import ClientsPortalModeIcons from "./CPModeIcons";
import PowerSwitchIcon from "./icons/CPModeIcons/PowerSwitchIcon";
import RedoIcon from "./icons/CPModeIcons/RedoIcon";
import { UndoIcon } from "./data/iconsIndex";

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
    const { id, firstName, lastName, email, profileImage, loggedIn } =
        useSelector((state: RootState) => state.auth);
    const handleLogout = () => {
        // dispatch(unSetUserInfo({ name: "", email: "" }));
        dispatch(unSetUserToken({ access_token: null }));
        removeToken();
        navigate("/login");
    };

    const notify = () =>
        toast("oops! Please login first to open Clients Portal..");

    const ResumePortalNotify = () => toast("YOU ARE BACK TO RESUME PORTAL");
    const ClientPortalNotify = () => toast("WELCOME TO THE CLIENTS PORTAL!");

    const handleClientPortal = () => {
        if (access_token) {
            dispatch(setClientPortalClicked(true));
            navigate("/client-portal");
            ClientPortalNotify();
        }
        if (!access_token) {
            navigate("/login");
            notify();
            dispatch(setClientPortalClicked(false));
        }
    };
    const handleResumePortal = () => {
        dispatch(setClientPortalClicked(false));
        navigate("/");
        ResumePortalNotify();
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
                        src={
                            clientPortalClicked && profileImage
                                ? `${profileImage}`
                                : !clientPortalClicked
                                ? "images/other/profile-img.jpg"
                                : "images/other/avatar-male.jpg"
                        }
                        alt="qandeel baloch profile"
                    />
                    <div className="person-name">
                        <span>
                            {!clientPortalClicked
                                ? "QANDEEL KHAN"
                                : `${firstName} ${lastName}`}
                        </span>
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
                {clientPortalClicked ? (
                    <div
                        onClick={handleResumePortal}
                        className="login-btn send-message-btn login-sign"
                    >
                        <UndoIcon />
                        <div>Resume Portal</div>
                    </div>
                ) : (
                    <div
                        onClick={handleClientPortal}
                        className="login-btn send-message-btn login-sign"
                    >
                        <RedoIcon />
                        <div>Client Portal</div>
                    </div>
                )}
                <ToastContainer />
                {!access_token ? (
                    <a
                        href="/login"
                        className="login-btn send-message-btn login-sign"
                    >
                        <PowerSwitchIcon />
                        <div>Login / Sign Up</div>
                    </a>
                ) : (
                    // FIXME: The color of border transformation should be red
                    <div
                        onClick={handleLogout}
                        className="login-btn send-message-btn login-sign"
                    >
                        <PowerSwitchIcon />
                        <div>Logout</div>
                    </div>
                )}
                {/* <CPModeMenuItems /> */}
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
