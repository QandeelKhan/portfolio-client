import React, { ReactNode } from "react";
import "./button.css";
import HomeIcon from "./icons/HomeIcon";

export const Button = ({ NavBtnIcon, NavBtnHref, NavBtnTitle }: any) => {
    return (
        <div className="nav-btn">
            {NavBtnIcon}
            <a href={NavBtnHref} className="nav-btn-link"></a>
            {NavBtnTitle}
        </div>
    );
};
