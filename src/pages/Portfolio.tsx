import React from "react";
import PortfolioBriefcase from "../components/icons/PortfolioBriefcase";
import PortfolioPage from "./PortfolioPage";
import "./portfolio.css";
import ResumeHeader from "../components/ResumeHeader";

const Portfolio: React.FC = () => {
    return (
        <section id="resume-section">
            <ResumeHeader
                iconComponent={<PortfolioBriefcase />}
                pageName="Portfolio."
            >
                <PortfolioPage />
            </ResumeHeader>
        </section>
    );
};

export default Portfolio;
