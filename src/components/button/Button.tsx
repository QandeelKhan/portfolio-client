import "./button.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
    setClientPortalClicked,
    setNavVisible,
} from "../../redux/reducers/eventsSlice";

export type ButtonProps = {
    NavBtnIcon?: React.ReactNode;
    NavBtnHref?: string;
    NavBtnTitle?: string;
    navigateTo?: string;
    onClick?: () => void;
    className?: string;
};

export const Button = ({
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

    return (
        <div className={`nav-btn ${className}`}>
            <div
                className="nav-btn-container"
                onClick={onClick ? onClick : handleNavigate}
            >
                {NavBtnIcon}
                <a href={NavBtnHref} className="nav-btn-link">
                    {NavBtnTitle}
                </a>
            </div>
        </div>
    );
};
