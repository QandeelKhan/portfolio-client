// MenuList.tsx
import React from "react";
import { setClientPortalClicked } from "../../redux/reducers/eventsSlice";
import Button from "../button/Button";

interface MenuListProps {
    items: Array<any>; // Update this with the correct type
}

const SideNavList: React.FC<MenuListProps> = ({ items }) => {
    const handleClick = (isCPMenuItem: boolean) => {
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
                    <Button
                        NavBtnIcon={item.icon}
                        className={item.cName}
                        NavBtnTitle={item.title}
                        NavBtnHref={item.path}
                        navigateTo={item.navigateTo}
                        onClick={() => handleClick(item.isCPMenuItem)}
                    />
                </li>
            ))}
        </>
    );
};

export default SideNavList;
