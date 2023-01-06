import React, { ReactNode } from "react";
import "./button.css";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import HomeIcon from "./icons/HomeIcon";

export const Button = (props: any) => {
    return (
        <div className="nav-btn">
            {/* <HouseOutlinedIcon fontSize="small" className="nav-icon" /> */}
            {/* <span className="nav-icon">
                <img src={homeIcon} alt="mySvgImage" />
            </span> */}
            <span className="nav-icon">{props.children}</span>
            <span className="lnr lnr-home"></span>
            <a href="#home" className="nav-btn-link">
                Home
            </a>
        </div>
    );
};
