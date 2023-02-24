import React from "react";
import { setClientPortalClicked } from "../redux/reducers/eventsSlice";
import { Button } from "./Button";
import { CPModeMenuItems } from "./MenuItems";
import { useDispatch } from "react-redux";

const ClientsPortalModeIcons = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setClientPortalClicked(true));
    };
    return (
        <>
            {CPModeMenuItems.map((item: any, index: any) => {
                return (
                    <li>
                        <Button
                            NavBtnIcon={item.icon}
                            className={item.cName}
                            NavBtnTitle={item.title}
                            navigateTo={item.navigateTo}
                        >
                            <button onClick={handleClick}></button>
                        </Button>
                    </li>
                );
            })}
        </>
    );
};

export default ClientsPortalModeIcons;
