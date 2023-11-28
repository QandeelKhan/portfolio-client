import React, { useState } from "react";
import { gridItems, tabs } from "../data/GridItems";

interface TabProps {
    categories: string[];
    selectedTab: string;
    handleTabClick: (tab: string) => void;
}

const Tab: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState("ALL");

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
        setTimeout(() => {
            setSelectedTab(tab);
        }, 1000);
    };

    const filteredItems = gridItems.filter((item) => {
        if (selectedTab === "ALL") {
            return true;
        } else {
            return item.category === selectedTab;
        }
    });

    return (
        <div className="menu-div">
            <ul>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        onClick={() => handleTabClick(tab)}
                        className={`tabs ${
                            selectedTab === tab ? "active" : ""
                        }`}
                        style={{
                            color: selectedTab === tab ? "black" : "white",
                        }}
                    >
                        <div>{tab}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tab;
