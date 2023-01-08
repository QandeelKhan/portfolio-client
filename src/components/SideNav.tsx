import React from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";

const SideNav: React.FC = (props: any) => {
    return (
        <>
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
                                        navigateTo={item.navigateTo}
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
