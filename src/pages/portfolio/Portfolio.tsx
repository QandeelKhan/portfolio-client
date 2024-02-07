import React, { useState } from "react";
import Masonry from "react-masonry-css";
import GridItem from "../../components/grid/GridItem";
import { gridItems, tabs } from "../../components/data/GridItems";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/PageTemplate";
import PortfolioBriefcase from "../../components/icons/ResumeModeIcons/PortfolioBriefcase";
import "./portfolio.css";

const Portfolio: React.FC = (props: any) => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        900: 2,
        700: 1,
    };

    const navigate = useNavigate();
    const handleNavigate = (index: string | number) => {
        navigate(`/portfolio-detail/${index}`);
    };

    // tabs
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
        <section id="resume-section">
            <PageTemplate
                iconComponent={<PortfolioBriefcase />}
                pageName="Portfolio."
            >
                <>
                    <Helmet>
                        <title>
                            Qandeel Khan | Python Django and React Full Stack
                            Developer | Portfolio
                        </title>
                        <meta
                            name="description"
                            content="Check out the portfolio of Qandeel Khan, a full stack developer specializing in Python Django and React. View his projects and get in touch for your next project."
                        />
                        <meta
                            name="keywords"
                            content="Qandeel Khan, Python Django, React, Full Stack Developer, Portfolio, Projects, Web Development"
                        />
                        <meta name="robots" content="index, follow" />
                    </Helmet>

                    <div className="projects-area">
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
                                            color:
                                                selectedTab === tab
                                                    ? "black"
                                                    : "white",
                                        }}
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
                                    navigateTo={() => handleNavigate(index)}
                                    imgSrc={item.titleImgSrc}
                                    title={item.title}
                                    category={item.category}
                                    icon={<i className={item.icon}></i>}
                                    alt={item.title}
                                />
                            ))}
                        </Masonry>
                    </div>
                </>
            </PageTemplate>
        </section>
    );
};

export default Portfolio;
