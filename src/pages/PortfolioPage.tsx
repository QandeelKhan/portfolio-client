import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    setCardClicked,
    setCrossClicked,
    setMyClassName,
} from "../redux/eventsSlice";
import Masonry from "react-masonry-css";
import "./portfolio-detail.css";
import "../pages/portfolio.css";
import GridItem from "../components/GridItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { gridItems, tabs } from "../components/GridItems";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PortfolioPage: React.FC = (props: any) => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        900: 2,
        700: 1,
    };

    // redux area
    const dispatch = useDispatch();
    const { myClassName } = useSelector((state: RootState) => state.events);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/portfolio-detail");
    };

    // tabs
    const [selectedTab, setSelectedTab] = useState("ALL");

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    const filteredItems = gridItems.filter((item) => {
        if (selectedTab === "ALL") {
            return true;
        } else {
            return item.category === selectedTab;
        }
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="projects-area">
                <div className="menu-div">
                    <ul>
                        {tabs.map((tab, index) => (
                            <li
                                key={index}
                                onClick={() => handleTabClick(tab)}
                                className={selectedTab === tab ? "active" : ""}
                            >
                                <div>{tab}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Masonry
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                    breakpointCols={breakpointColumnsObj}
                >
                    {filteredItems.map((item, index) => (
                        <GridItem
                            key={index}
                            navigateTo={handleNavigate}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            category={item.category}
                            icon={<i className={item.icon}></i>}
                            alt={item.title}
                        />
                    ))}
                </Masonry>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;

// this is a web page "https://watson.cosmos-themes.com/dark/#home" in this on the right corner
