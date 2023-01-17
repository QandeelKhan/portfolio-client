import React from "react";
import PortfolioBriefcase from "../components/icons/PortfolioBriefcase";
import PortfolioProject from "../components/PortfolioProject";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section id="resume-section">
            <div className="about-container">
                <div className="main-about-area">
                    <div className="about-head-logo-area">
                        <h1 className="aboutme-heading">Portfolio.</h1>
                        <PortfolioBriefcase />
                    </div>
                    <PortfolioProject />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
