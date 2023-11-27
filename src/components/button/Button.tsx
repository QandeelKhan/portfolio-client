import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNavVisible } from "../../redux/reducers/eventsSlice";
import "./button.css";

export interface ButtonProps {
    NavBtnIcon?: React.ReactNode;
    NavBtnHref?: string;
    NavBtnTitle?: string;
    navigateTo?: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    NavBtnIcon,
    NavBtnHref,
    NavBtnTitle,
    navigateTo,
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
                {NavBtnIcon}
                <a href={NavBtnHref} className="nav-btn-link">
                    {NavBtnTitle}
                </a>
            </div>
        </div>
    );
};

export default Button;
