import React from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import UpworkIcon from "./icons/UpworkIcon";

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
                                        // NavBtnHref={item.path}
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
