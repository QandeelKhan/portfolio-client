import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNavVisible } from "../../redux/reducers/eventsSlice";
import "./side-nav-button.css";

export type ButtonProps = {
    navBtnIcon?: React.ReactNode;
    navBtnHref?: string;
    navBtnTitle?: string;
    navigateTo?: string;
    cName?: string;
    path?: string;
    icon?: JSX.Element;
    onClick?: () => void;
    className?: string;
    isCPMenuItem?: boolean;
};

const SideNavButton: React.FC<ButtonProps> = ({
    navBtnIcon,
    navBtnHref,
    navBtnTitle,
    navigateTo,
    path,
    icon,
    cName,
    isCPMenuItem,
    onClick,
    className,
}: ButtonProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`${navigateTo}`);
        dispatch(setNavVisible(false));
    };

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        handleNavigate();
    };

    return (
        <div className={`nav-btn ${className}`}>
            <div className="nav-btn-container" onClick={handleClick}>
                {navBtnIcon}
                <a href={navBtnHref} className="nav-btn-link">
                    {navBtnTitle}
                </a>
            </div>
        </div>
    );
};

export default SideNavButton;
