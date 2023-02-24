import React from "react";
import { Button } from "./Button";
import { MenuItems } from "./MenuItems";

const ResumeModeIcons = () => {
    return (
        <>
            {MenuItems.map((item, index) => {
                return (
                    <li>
                        <Button
                            NavBtnIcon={item.icon}
                            className={item.cName}
                            NavBtnTitle={item.title}
                            navigateTo={item.navigateTo}
                        ></Button>
                    </li>
                );
            })}
        </>
    );
};

export default ResumeModeIcons;
