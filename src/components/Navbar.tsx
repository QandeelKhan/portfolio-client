import React from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";

const Navbar = (props: any) => {
    return (
        <>
            <div className="sidebar-main">
                <div className="image-area">
                    <img src="profile-img.jpg" alt="profile-img" />
                    <div className="person-name">
                        <span>Qandeel Khan</span>
                    </div>
                </div>
                <div className="menubar-area">
                    <ul>
                        {MenuItems.map((item, index) => {
                            return (
                                <li>
                                    <a href={item.path} className={item.cName}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="footer-area"></div>
            </div>
        </>
    );
};

export default Navbar;
