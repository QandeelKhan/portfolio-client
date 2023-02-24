import React from "react";
import { setClientPortalClicked } from "../redux/reducers/eventsSlice";
import { Button } from "./Button";
import { ResumeModeMenuItems } from "./MenuItems";

const ResumeModeIcons = () => {
    const handleClick = () => {
        setClientPortalClicked(false);
    };
    return (
        <>
            {ResumeModeMenuItems.map((item, index) => {
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

export default ResumeModeIcons;
