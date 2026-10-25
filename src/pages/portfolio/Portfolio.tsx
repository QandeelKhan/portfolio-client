import React, { useState, useRef, useEffect } from "react";
import GridItem from "../../components/grid/GridItem";
import { gridItems, tabs } from "../../components/data/GridItems";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageTemplate from "../../components/PageTemplate";
import PortfolioBriefcase from "../../components/icons/ResumeModeIcons/PortfolioBriefcase";
import "./portfolio.css";

interface ItemPosition {
    element: HTMLElement;
    rect: DOMRect;
}

const Portfolio: React.FC = (props: any) => {
    const navigate = useNavigate();
    const handleNavigate = (index: string | number) => {
        navigate(`/portfolio-detail/${index}`);
    };

    const [selectedTab, setSelectedTab] = useState("ALL");
    const gridRef = useRef<HTMLDivElement>(null);

    const handleTabClick = (tab: string) => {
        if (tab === selectedTab) return;

        // FLIP animation technique
        if (gridRef.current) {
            const items = Array.from(gridRef.current.querySelectorAll('.grid-item-container'));
            
            // First: Record current positions
            const firstPositions = items.map(item => ({
                element: item as HTMLElement,
                rect: item.getBoundingClientRect()
            }));

            // Update the state (this causes re-layout)
            setSelectedTab(tab);

            // Use requestAnimationFrame to ensure DOM has updated
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    // Last: Record new positions
                    const newItems = Array.from(gridRef.current!.querySelectorAll('.grid-item-container'));
                    
                    newItems.forEach((item) => {
                        const element = item as HTMLElement;
                        const oldPosition = firstPositions.find(p => p.element.dataset.title === element.dataset.title);
                        
                        if (oldPosition) {
                            const newRect = element.getBoundingClientRect();
                            const deltaX = oldPosition.rect.left - newRect.left;
                            const deltaY = oldPosition.rect.top - newRect.top;

                            // Invert: Apply transform to move element back to old position
                            element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                            element.style.transition = 'none';

                            // Play: Animate to new position
                            requestAnimationFrame(() => {
                                element.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease';
                                element.style.transform = '';
                            });
                        } else {
                            // New items fade in
                            element.style.opacity = '0';
                            element.style.transform = 'scale(0.8)';
                            requestAnimationFrame(() => {
                                element.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
                                element.style.opacity = '1';
                                element.style.transform = 'scale(1)';
                            });
                        }
                    });
                });
            });
        } else {
            setSelectedTab(tab);
        }
    };

    const filteredItems = gridItems.filter((item) => {
        if (selectedTab === "ALL") {
            return true;
        } else {
            // Handle both string and array categories
            if (Array.isArray(item.category)) {
                return item.category.includes(selectedTab);
            } else {
                return item.category === selectedTab;
            }
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
                                    >
                                        <div>{tab}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div ref={gridRef} className="portfolio-grid">
                            {filteredItems.map((item) => {
                                const originalIndex = gridItems.findIndex(g => g.title === item.title);
                                return (
                                    <div
                                        key={item.title}
                                        className="grid-item-container"
                                        data-title={item.title}
                                    >
                                        <GridItem
                                            navigateTo={() => handleNavigate(originalIndex)}
                                            imgSrc={item.titleImgSrc}
                                            title={item.title}
                                            category={item.category}
                                            icon={<i className={item.icon}></i>}
                                            alt={item.title}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            </PageTemplate>
        </section>
    );
};

export default Portfolio;
