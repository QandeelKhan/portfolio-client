import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNavVisible } from "../../redux/reducers/eventsSlice";
import { ButtonProps } from "./Button";

const withButtonLogic = (
    WrappedComponent: React.ComponentType<ButtonProps>
) => {
    return function WithButtonLogic(props: ButtonProps) {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        const handleNavigate = () => {
            navigate(`${props.navigateTo}`);
            dispatch(setNavVisible(false));
        };

        return (
            <WrappedComponent
                {...props}
                onClick={props.onClick ? props.onClick : handleNavigate}
            />
        );
    };
};

export default withButtonLogic;
