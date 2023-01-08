import React from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";

const Navbar: React.FC = (props: any) => {
    return (
        <>
            <div className="main-of-main">
                <div className="sidebar-main">
                    <div className="image-area">
                        <img src="profile-img.jpg" alt="profile-img" />
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
                                            NavBtnHref={item.path}
                                            className={item.cName}
                                            NavBtnTitle={item.title}
                                        ></Button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="footer-area">
                        <div className="footer-icons">
                            <i className="fa-brands fa-square-facebook icons-social"></i>
                            <i className="fa-brands fa-square-twitter icons-social"></i>
                            <i className="fa-brands fa-square-youtube icons-social"></i>
                            <i className="fa-brands fa-linkedin icons-social"></i>
                            <i className="fa-brands fa-square-dribbble icons-social"></i>
                        </div>
                        <div className="footer-text">
                            <span>
                                2022 © Cosmos-Themes.
                                <br /> All Right Reserved.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="main-image-area">
                    {/* <img src="home-bg.jpg" alt="main-bg" /> */}
                </div>
                <div className="banner-text">
                    <span className="banner-qandeel">QANDEEL</span>
                    <span className="banner-khan">KHAN</span>
                    <div className="animation-text">
                        <span className="banner-iam"></span>
                        <span className="banner-iam"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
