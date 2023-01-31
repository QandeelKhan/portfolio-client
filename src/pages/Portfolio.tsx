import React from "react";
import PortfolioBriefcase from "../components/icons/PortfolioBriefcase";
import PortfolioPage from "./PortfolioPage";
import PageTemplate from "../components/PageTemplate";
import "./css/portfolio.css";

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
