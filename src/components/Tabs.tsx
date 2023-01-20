import React from "react";

interface TabProps {
    categories: string[];
    selectedTab: string;
    handleTabClick: (tab: string) => void;
}

const Tab: React.FC<TabProps> = ({
    categories,
    selectedTab,
    handleTabClick,
}) => {
    return (
        <ul>
            <li
                onClick={() => handleTabClick("ALL")}
                className={selectedTab === "ALL" ? "active" : ""}
            >
                <div>ALL</div>
            </li>
            {categories.map((category, index) => (
                <li
                    key={index}
                    onClick={() => handleTabClick(category)}
                    className={selectedTab === category ? "active" : ""}
                >
                    <div>{category}</div>
                </li>
            ))}
        </ul>
    );
};

export default Tab;
