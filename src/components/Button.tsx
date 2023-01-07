import React, { ReactNode } from "react";
import "./button.css";
import HomeIcon from "./icons/HomeIcon";

export const Button = (props: any) => {
    return (
        <div className="nav-btn">
            <a href="#home" className="nav-btn-link nav-icon">
                {props.children}
            </a>
        </div>
    );
};
