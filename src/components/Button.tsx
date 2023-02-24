import "./css/button.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
    setClientPortalClicked,
    setNavVisible,
} from "../redux/reducers/eventsSlice";

export const Button = ({
    NavBtnIcon,
    NavBtnHref,
    NavBtnTitle,
    navigateTo,
}: any) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`${navigateTo}`);
        dispatch(setNavVisible(false));
        dispatch(setClientPortalClicked(!true));
    };

    return (
        <div className="nav-btn">
            <div className="nav-btn-container" onClick={handleNavigate}>
                {NavBtnIcon}
                <a href={NavBtnHref} className="nav-btn-link">
                    {NavBtnTitle}
                </a>
            </div>
        </div>
    );
};
