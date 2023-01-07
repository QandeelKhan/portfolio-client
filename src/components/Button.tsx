import React, { ReactNode } from "react";
import "./button.css";
import HomeIcon from "./icons/HomeIcon";

export const Button = ({ ButtonIcon, buttonTitle, buttonHref }: any) => {
    return (
        <div className="nav-btn">
            {ButtonIcon}
            <a href={buttonHref} className="nav-btn-link"></a>
            {buttonTitle}
        </div>
    );
};
