import React from "react";
import PortfolioBriefcase from "../components/icons/PortfolioBriefcase";
import PortfolioPage from "./PortfolioPage";
import "./portfolio.css";
import PageTemplate from "../components/PageTemplate";
import ThemeWrapper from "../components/ThemeWrapper";

const Portfolio: React.FC = () => {
    return (
        <section id="resume-section">
            <PageTemplate
                iconComponent={<PortfolioBriefcase />}
                pageName="Portfolio."
            >
                <PortfolioPage />
            </PageTemplate>
        </section>
    );
};

export default Portfolio;
