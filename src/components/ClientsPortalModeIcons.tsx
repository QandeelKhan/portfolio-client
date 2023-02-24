import React from "react";
import { Button } from "./Button";
import { ClientsPortalModeMenuItems } from "./MenuItems";

const ClientsPortalModeIcons = () => {
    return (
        <>
            {ClientsPortalModeMenuItems.map((item: any, index: any) => {
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

export default ClientsPortalModeIcons;
