// MenuList.tsx
import React from "react";
import { setClientPortalClicked } from "../../redux/reducers/eventsSlice";
import SideNavButton, { ButtonProps } from "./SideNavButton";

const SideNavList: React.FC<{ items: ButtonProps[] }> = ({ items }) => {
    const handleClick = (isCPMenuItem?: boolean) => {
        if (isCPMenuItem) {
            setClientPortalClicked(true);
        } else {
            setClientPortalClicked(false);
        }
    };

    return (
        <>
            {items.map((item, index) => (
                <li key={index}>
                    <SideNavButton
                        navBtnIcon={item.icon}
                        className={item.cName}
                        navBtnTitle={item.navBtnTitle}
                        navBtnHref={item.path}
                        navigateTo={item.navigateTo}
                        onClick={() => handleClick(item.isCPMenuItem)}
                    />
                </li>
            ))}
        </>
    );
};

export default SideNavList;
